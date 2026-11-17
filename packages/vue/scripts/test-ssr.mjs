// Uji SSR: render SEMUA komponen atau sebagian & validasi kelas CSS yang dihasilkan.
// Jalankan: node scripts/test-ssr.mjs
import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';
import * as Bk from '../src/index.js';

const app = createSSRApp({
  render: () =>
    h('div', [
      h(Bk.BkButton, { type: 'primary', size: 'lg', icon: 'plus' }, () => 'Simpan'),
      h(Bk.BkButton, { type: 'soft-danger', size: 'sm', icon: 'trash' }, () => 'Hapus'),
      h(Bk.BkBadge, { type: 'success', dot: true }, () => 'Aktif'),
      h(Bk.BkBadge, { type: 'warning', soft: true }, () => 'Menunggu'),
      h(Bk.BkAlert, { type: 'success', title: 'Berhasil', dismissible: true }, () => 'Data tersimpan.'),
      h(Bk.BkCard, { title: 'Profil', subtitle: 'Data pribadi' }, {
        default: () => 'Isi kartu',
        actions: () => h(Bk.BkButton, { type: 'outline', size: 'sm' }, () => 'Ubah'),
      }),
      h(Bk.BkIcon, { name: 'graduation' }),
      h(Bk.BkField, { label: 'Nama', hint: 'Sesuai KTP' }, { default: () => h(Bk.BkInput, { modelValue: 'Dewi', icon: 'user' }) }),
      h(Bk.BkField, { label: 'NIP', error: 'Wajib diisi' }, { default: () => h(Bk.BkInput, { modelValue: '', invalid: true }) }),
      h(Bk.BkTextarea, { modelValue: 'catatan' }),
      h(Bk.BkSelect, { modelValue: 'a', options: [{ value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta' }] }),
      h(Bk.BkSelectSearch, { modelValue: 'a', options: [{ value: 'a', label: 'Alpha' }] }),
      h(Bk.BkCheckbox, { modelValue: true, label: 'PNS' }),
      h(Bk.BkRadio, { modelValue: 'x', value: 'x', label: 'Laki-laki', name: 'jk' }),
      h(Bk.BkSwitch, { modelValue: true, label: 'Notifikasi' }),
      h(Bk.BkAvatar, { label: 'DS', color: 'blue', status: 'online' }),
      h(Bk.BkChip, { type: 'primary', removable: true }, () => 'Tag'),
      h(Bk.BkProgress, { value: 65, label: 'Kemajuan', color: 'success', striped: true }),
      h(Bk.BkSpinner, { size: 'lg', primary: true }),
      h(Bk.BkSkeleton, { variant: 'avatar' }),
      h(Bk.BkEmpty, { title: 'Belum ada data', text: 'Mulai unggah.' }),
      h(Bk.BkList, {}, { default: () => h(Bk.BkListItem, { title: 'Dewi', sub: 'Pranata Komputer', icon: 'user', hover: true }) }),
      h(Bk.BkTimeline, {}, { default: () => h(Bk.BkTimelineItem, { title: 'Mulai', text: 'Berkas diterima', time: '09:00', color: 'success' }) }),
      h(Bk.BkStatCard, { label: 'Pegawai Aktif', value: '2.847', delta: '+3,2%', icon: 'users', foot: '142 OPD' }),
      h(Bk.BkSteps, { items: ['Data Diri', 'Berkas', 'Selesai'], active: 1 }),
      h(Bk.BkBreadcrumb, { items: [{ label: 'Beranda', href: '#' }, { label: 'Data Pegawai' }] }),
      h(Bk.BkTabs, { modelValue: 'a', tabs: [{ key: 'a', label: 'Profil' }, { key: 'b', label: 'Riwayat' }] }),
      h(Bk.BkPagination, { page: 2, pages: 10 }),
      h(Bk.BkModal, { modelValue: true, title: 'Konfirmasi' }, { default: () => 'Isi modal', footer: () => 'Aksi' }),
      h(Bk.BkDrawer, { modelValue: true, title: 'Detail' }, { default: () => 'Isi drawer' }),
      h(Bk.BkDropdown, {}, {
        trigger: () => 'Menu',
        default: () => h(Bk.BkDropdownItem, { icon: 'eye' }, () => 'Lihat'),
      }),
      h(Bk.BkTooltip, { text: 'Keterangan', position: 'bottom' }, () => 'Hover saya'),
      h(Bk.BkAccordion, { modelValue: ['a'], single: true }, {
        default: () => h(Bk.BkAccordionItem, { name: 'a', title: 'Pertanyaan', icon: 'info' }, () => 'Jawaban'),
      }),
      h(Bk.BkOtp, { modelValue: '123' }),
      h(Bk.BkChart, {
        type: 'line',
        data: { labels: ['Jan', 'Feb'], datasets: [{ data: [10, 20] }] },
        height: 200,
      }),
    ]),
});

const html = await renderToString(app);

const checks = [
  ['bk-btn bk-btn-primary bk-btn-lg', 'BkButton primary+lg'],
  ['bk-btn-soft-danger', 'BkButton soft-danger'],
  ['bk-badge bk-badge-success', 'BkBadge success'],
  ['bk-badge-dot', 'BkBadge dot'],
  ['bk-alert bk-alert-success', 'BkAlert'],
  ['bk-alert-close', 'BkAlert dismissible'],
  ['bk-card-header', 'BkCard header'],
  ['bk-field', 'BkField'],
  ['bk-input-icon', 'BkInput icon'],
  ['bk-textarea', 'BkTextarea'],
  ['bk-select', 'BkSelect'],
  ['bk-select-search', 'BkSelectSearch'],
  ['bk-check', 'BkCheckbox'],
  ['bk-radio', 'BkRadio'],
  ['bk-switch', 'BkSwitch'],
  ['bk-avatar-status online', 'BkAvatar status'],
  ['bk-chip', 'BkChip'],
  ['bk-chip-remove', 'BkChip removable'],
  ['bk-progress-bar bk-success', 'BkProgress'],
  ['bk-spinner bk-spinner-lg', 'BkSpinner'],
  ['bk-skeleton-avatar', 'BkSkeleton'],
  ['bk-empty', 'BkEmpty'],
  ['bk-list-item is-hover', 'BkListItem'],
  ['bk-timeline-dot success', 'BkTimelineItem'],
  ['bk-stat', 'BkStatCard'],
  ['bk-step is-active', 'BkSteps'],
  ['bk-breadcrumb', 'BkBreadcrumb'],
  ['bk-tab is-active', 'BkTabs'],
  ['bk-page is-active', 'BkPagination'],
  ['bk-modal-backdrop is-open', 'BkModal'],
  ['bk-drawer-backdrop is-open', 'BkDrawer'],
  ['bk-dropdown-item', 'BkDropdownItem'],
  ['data-tooltip="Keterangan"', 'BkTooltip'],
  ['bk-accordion-item is-open', 'BkAccordionItem'],
  ['bk-otp-input', 'BkOtp'],
  ['bk-chart-box', 'BkChart'],
  ['<svg', 'BkIcon SVG'],
];

let ok = true;
for (const [needle, label] of checks) {
  if (!html.includes(needle)) {
    ok = false;
    console.log('GAGAL:', label, '-> tidak ditemukan', JSON.stringify(needle));
  }
}
console.log(ok ? 'SEMUA ' + checks.length + ' CEK KOMPONEN OK' : 'ADA YANG GAGAL');
process.exit(ok ? 0 : 1);
