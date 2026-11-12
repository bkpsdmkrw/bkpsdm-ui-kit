// scripts/build.mjs — membangun dist/ untuk publikasi npm
// Jalankan: npm run build  (otomatis dijalankan saat `npm publish` via prepublishOnly)
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

mkdirSync(dist, { recursive: true });

// 1) Salin aset statis
copyFileSync(join(root, 'assets/css/ui-kit.css'), join(dist, 'ui-kit.css'));
copyFileSync(join(root, 'assets/js/ui-kit.js'), join(dist, 'ui-kit.js'));
copyFileSync(join(root, 'assets/js/dashboard.js'), join(dist, 'dashboard.js'));

// 2) Ekstrak kamus ikon dari ui-kit.js
const src = readFileSync(join(root, 'assets/js/ui-kit.js'), 'utf8');
const start = src.indexOf('var ICONS = {');
const end = src.indexOf('};', start);
if (start === -1 || end === -1) {
  throw new Error('Kamus ICONS tidak ditemukan di ui-kit.js');
}
const objSrc = src.slice(start + 'var ICONS = '.length, end + 1); // "… };"
const icons = vm.runInNewContext('(' + objSrc + ')');

// 3) icons.json (untuk render ikon di sisi server / SSR)
writeFileSync(join(dist, 'icons.json'), JSON.stringify(icons, null, 2) + '\n');

// 4) ESM build (subset SSR-safe: ikon + replaceIcons)
//    JSON adalah subset valid dari object literal JS, jadi langsung embed apa adanya
const iconsLiteral = JSON.stringify(icons, null, 2);
const esm = `// ESM build — di-generate otomatis dari assets/js/ui-kit.js (jangan edit manual)
// Menyediakan subset SSR-safe: kamus ikon + render ikon.
// Interaktivitas penuh (tema, dropdown, modal, toast, dll.) tersedia via
//   import '@bkpsdm/ui-kit/script'  (window.Bk) — atau muat sebagai <script>.

export const icons = ${iconsLiteral};

export function icon(name, className = '') {
  if (!icons[name]) return '';
  const cls = className ? ' ' + className : '';
  return '<span class="bk-icon' + cls + '" aria-hidden="true">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    icons[name] + '</svg></span>';
}

export function replaceIcons(root = document) {
  if (!root) return;
  root.querySelectorAll('[data-icon]').forEach((el) => {
    el.outerHTML = icon(el.getAttribute('data-icon'), el.className);
  });
}

export default { icons, icon, replaceIcons };
`;
writeFileSync(join(dist, 'ui-kit.esm.js'), esm);

console.log('[build] dist/ siap:');
console.log('  - dist/ui-kit.css');
console.log('  - dist/ui-kit.js        (IIFE, untuk <script>)');
console.log('  - dist/ui-kit.esm.js    (ESM)');
console.log('  - dist/dashboard.js');
console.log('  - dist/icons.json       (' + Object.keys(icons).length + ' ikon)');
