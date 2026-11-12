# BKPSDM UI Kit v1.0

Design system & admin theme untuk aplikasi **BKPSDM** (Badan Kepegawaian & Pengembangan SDM), agar seluruh aplikasi memiliki ciri khas yang sama — baik yang dibangun dengan **Laravel monolith (Blade)** maupun **Nuxt.js (Vue)**.

## Struktur

```
ui-kit/
├── index.html            # Demo Dashboard Analitik (grafik lengkap)
├── components.html       # Pustaka Komponen (menu pohon + contoh kode tiap komponen)
├── dokumentasi.html      # Panduan instalasi Laravel & Nuxt + publikasi Packagist
├── form.html             # Contoh: Formulir wizard multi-tahap
├── table.html            # Contoh: Tabel data (filter, bulk action, pagination)
├── profile.html          # Contoh: Profil pengguna + radar kompetensi
├── profil-asn.html       # Contoh: Profil ASN (6 tab riwayat kepegawaian)
├── mutasi.html           # Contoh: Mutasi & rotasi (usulan + alur persetujuan)
├── pensiun.html          # Contoh: Manajemen pensiun (BUP + kelengkapan berkas)
├── login.html            # Contoh: Halaman autentikasi (split-screen)
├── 404.html              # Contoh: Halaman error
├── composer.json         # Paket Composer (siap publikasi ke Packagist)
├── LICENSE               # Lisensi MIT
├── src/                  # Service provider Laravel
├── resources/views/components/  # Komponen Blade starter (<x-bk::...>)
├── assets/
│   ├── css/ui-kit.css    # Design system: tokens + seluruh komponen
│   └── js/
│       ├── ui-kit.js     # Interaksi inti (ikon, tema, modal, toast, dll.)
│       ├── samples.js    # Contoh kode untuk halaman dokumentasi
│       └── dashboard.js  # Grafik Chart.js 4 (tema-adaptif)
└── color.text            # Sumber warna brand
```

## Selaras INA Digital Design System (IDDS)

Kit ini diselaraskan dengan **INA Digital Design System** (sistem desain digital resmi layanan publik Indonesia, Oktober 2025) sehingga aplikasi Laravel Blade dan Nuxt tampil konsisten dengan ekosistem digital pemerintah.

| Area | Penerapan di kit |
|---|---|
| **Arsitektur warna** | Token 2 lapis: **primitif** (skala 25–900) → **semantik** (`content.*`, `background.*`, `brand.*`, `feedback.*`) |
| **Mode Merek** | Warna brand per instansi — ganti `--ina-brand-*` untuk instansi lain tanpa menyentuh komponen |
| **Feedback** | Positif `#16A34A` · Eror `#D50B0B` · Peringatan `#EC7204` · Panduan `#0968F6` (skala resmi IDDS) |
| **Netral** | `#FFFFFF → #1F1F1F` (skala IDDS) |
| **Tipografi** | Font **Inter**, skala Display/H1–H5/Body/Caption persis IDDS |
| **Spacing** | Skala 4px penuh: 4→8→12→14→16→20→24→28→32→36→40→44→48→56→64→80→96→128 |
| **Komponen** | Button 5 ukuran (32/40/44/48/56), Chip, Date Picker, Drawer, OTP, Stepper, Toast — anatomi mengikuti spesifikasi IDDS |

### Warna Brand (Mode Merek: KARAWANG)

Skala brand tersimpan di `--ina-brand-25 … 900` (500 = warna utama):

| Token | HEX | Peran Semantik |
|---|---|---|
| `--ina-brand-500` | `#2E594D` | Primary, CTA, aksen utama |
| `--ina-brand-600/700` | `#264A40` / `#1D3932` | Hover / aktif |
| `--ina-brand-400` | `#55937E` | Soft / dark mode |
| `--ina-positif-600` | `#16A34A` | Success |
| `--ina-panduan-500` | `#0968F6` | Info |
| `--ina-peringatan-500` | `#EC7204` | Warning |
| `--ina-eror-600` | `#D50B0B` | Danger |

> **Ganti instansi**: ubah nilai `--ina-brand-*` (atau `--bk-primary`) — seluruh komponen otomatis mengikuti. Kelas lama `--bk-*` tetap berfungsi sebagai alias kompatibilitas.

Seluruh warna dikonsumsi lewat **CSS custom properties** (`--bk-*`), jadi tema terang/gelap hanya berganti token di `[data-theme="dark"]`.

## Fitur

- **Dashboard analitik** — KPI cards + sparkline, grafik garis (tren), batang, donat, radar, tabel data, timeline aktivitas, progress target.
- **40+ komponen** — tombol (6 varian × 3 ukuran), badge, alert, kartu, form lengkap (validasi, upload, switch, **select combobox dengan pencarian**), tabel sortir, pagination, tabs, accordion, modal, dropdown, toast, tooltip, progress, spinner, skeleton, avatar, breadcrumb, timeline, steps, empty state, list group.
- **Tema 3 mode** — Terang / Gelap / **Ikuti Sistem** (`prefers-color-scheme`), tersimpan di `localStorage`, grafik ikut berubah warna otomatis.
- **Sidebar adaptif** — desktop: bisa di-*collapse* ke mode ikon (tersimpan antar sesi); mobile: off-canvas dengan backdrop.
- **Contoh halaman** — dashboard, komponen, formulir wizard, tabel data (filter + pilih massal), profil, login, 404.
- **Dokumentasi komponen** — menu pohon sidebar (Komponen UI → kategori → komponen) dan setiap komponen punya blok **Lihat Kode** (show/hide) + **Salin** ke clipboard.
- **Tree & Org Chart** — tree collapsible (arsip/berkas) dan 4 layout bagan organisasi: **Hierarki (piramida)**, **Horizontal (flat)**, **Matriks**, **Divisional** — lengkap dengan node aksi (tambah/ubah/hapus) serta **drag & drop posisi + dialog konfirmasi** sebelum struktur diubah.
- **Komponen IDDS** — Chip (removable), Date Picker, Drawer (kanan/kiri), OTP input 6 digit, Searchbar dengan saran — sesuai pola INA Digital Design System.
- **Ikon SVG inline** — `<i data-icon="nama"></i>` (kamus ikon di `ui-kit.js`), tanpa dependensi.
- **Tanpa build tool** — murni HTML/CSS/JS, dapat dibuka langsung via browser.

## Menjalankan Demo

```bash
cd ui-kit
python3 -m http.server 8000
# buka http://localhost:8000
```

> Chart.js dimuat dari CDN; grafik membutuhkan koneksi internet (ada fallback pesan bila gagal).

## Publikasi ke Packagist

Kit ini **siap dipublikasikan sebagai paket Composer** — lengkap dengan `composer.json`, lisensi MIT, service provider Laravel, dan 5 komponen Blade starter. Panduan rinci ada di halaman **`dokumentasi.html`** (bagian "Publikasi ke Packagist").

Ringkasnya:

```bash
composer validate
git tag v1.0.0 && git push origin main --tags
# daftarkan URL repo di https://packagist.org/packages/submit
```

Lalu di aplikasi Laravel:

```bash
composer require bkpsdm/ui-kit
php artisan vendor:publish --tag=bkpsdm-assets
php artisan vendor:publish --tag=bkpsdm-views
```

> Ganti `"name": "bkpsdm/ui-kit"` di `composer.json` dengan namespace vendor Anda sebelum submit.

---

## Integrasi ke Laravel (Blade)

1. **Salin aset** ke `public/`:

```bash
cp -r assets public/
```

2. **Layout utama** `resources/views/layouts/admin.blade.php`:

```blade
<!DOCTYPE html>
<html lang="id" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{{ asset('assets/css/ui-kit.css') }}">
</head>
<body>
  <div class="bk-app">
    @include('layouts.partials.sidebar')
    <div class="bk-main">
      @include('layouts.partials.topbar')
      <main class="bk-content">@yield('content')</main>
    </div>
  </div>
  <script src="{{ asset('assets/js/ui-kit.js') }}"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js" defer></script>
  <script src="{{ asset('assets/js/dashboard.js') }}" defer></script>
  @stack('scripts')
</body>
</html>
```

3. **Komponen Blade** cukup memakai kelas yang sama, contoh `resources/views/components/bk/badge.blade.php`:

```blade
@props(['type' => 'primary', 'dot' => false])
<span {{ $attributes->merge(['class' => 'bk-badge bk-badge-' . $type]) }}>
  @if($dot)<span class="bk-badge-dot"></span>@endif
  {{ $slot }}
</span>
```

```blade
{{-- Pemakaian --}}
<x-bk.badge type="success" :dot="true">Aktif</x-bk.badge>
<x-bk.btn type="primary" icon="plus" onclick="Bk.toast({type:'success',title:'Tersimpan'})">Simpan</x-bk.btn>
```

4. **Toast dari server** (flash message):

```blade
@if (session('success'))
<script>Bk.toast({type:'success', title:'Berhasil', message:'{{ session('success') }}'});</script>
@endif
```

> Catatan: Blade escape `@` di dalam JS memakai `{{ }}` di luar script. Ikon diproses JS saat `DOMContentLoaded`; bila konten dirender lewat fetch/AJAX, panggil `Bk.replaceIcons(container)` setelah render.

---

## Integrasi ke Nuxt (Vue)

> **Opsi A — komponen resmi IDDS**: paket Vue resmi INA Digital (`@inadigital-ui/vue`) untuk komponen berstandar nasional. **Opsi B — kit ini** untuk konsistensi visual penuh dengan aplikasi Laravel Blade Anda. Keduanya dapat berjalan berdampingan karena token kit ini mengikuti spesifikasi IDDS.

**Opsi A — paket resmi IDDS:**

```bash
npm install @inadigital-ui/vue@^1.1.40
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@inadigital-ui/vue/index.css']
})
```

**Opsi B — kit ini (disarankan bila dipakai juga di Blade):**

1. **Salin CSS & JS** ke `assets/` (JS cukup dipakai ulang atau diport ke composable).

2. **Daftarkan CSS global** di `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  css: ['~/assets/css/ui-kit.css'],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js', defer: true }
      ]
    }
  }
})
```

3. **Plugin tema & ikon** `plugins/ui-kit.client.ts`:

```ts
import uiKit from '~/assets/js/ui-kit.js' // atau salin fungsi yang dibutuhkan

export default defineNuxtPlugin(() => {
  onMounted(() => window.Bk && (window.Bk.replaceIcons(document), window.Bk.animateCounters?.(document)))
  return { provide: { bk: window.Bk } }
})
```

4. **Bungkus komponen** — contoh `components/Bk/Badge.vue`:

```vue
<template>
  <span :class="['bk-badge', `bk-badge-${type}`]">
    <span v-if="dot" class="bk-badge-dot" />
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ type?: string; dot?: boolean }>(), { type: 'primary', dot: false })
</script>
```

5. **Layout** `layouts/admin.vue` — salin struktur `.bk-app` / `.bk-sidebar` / `.bk-main` dari `index.html`, ganti ikon `<i data-icon="x">` dengan komponen `<BkIcon name="x" />`:

```vue
<template>
  <span class="bk-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round" v-html="icon" />
  </span>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps<{ name: string }>()
const icon = computed(() => window.Bk?.icons[props.name] ?? '')
</script>
```

6. **Grafik** — panggil `dashboard.js` di halaman (atau plugin `useHead`), canvas diberi `id` yang sama (`chart-tren`, `chart-sumber`, dst.), grafik otomatis mengikuti tema karena membaca token CSS.

---

## API JavaScript (`window.Bk`)

| API | Keterangan |
|---|---|
| `Bk.icon('user')` | HTML SVG ikon |
| `Bk.replaceIcons(root)` | Ganti semua `[data-icon]` dalam `root` |
| `Bk.setTheme('dark' \| 'light' \| 'system')` | Atur tema & simpan (`system` = ikuti OS) |
| `Bk.getThemePref()` / `Bk.resolveTheme()` | Baca preferensi / tema teresolusi |
| `Bk.toggleTheme()` | Toggle terang ↔ gelap |
| `Bk.toast({ type, title, message, duration })` | Tampilkan toast |
| `Bk.openModal('#id')` / `Bk.closeModal(el)` | Buka/tutup modal |
| `Bk.openDrawer('#id')` / `Bk.closeDrawer(el)` | Buka/tutup drawer |

Atribut data:

| Atribut | Fungsi |
|---|---|
| `data-theme-toggle` | Toggle terang ↔ gelap |
| `data-theme-set="light\|dark\|system"` | Pilih mode tema (dropdown) |
| `data-theme-icon` | Elemen yang ikonnya mengikuti mode tema |
| `data-sidebar-toggle` | Mobile: buka sidebar; desktop: collapse/expand |
| `data-check-all` / `data-check-item` | Checkbox pilih semua / pilih baris |
| `data-bulk-bar` + `data-bulk-count` | Bar aksi massal & penghitung pilihan |
| `data-select-search` | Select combobox dengan pencarian (pakai `data-select-input`, `data-select-value`, `.bk-select-option`, `data-select-clear`, `data-select-toggle`) |
| `data-nav-toggle` (`.bk-nav-item`) | Buka/tutup submenu pohon sidebar |
| `data-code-toggle` (`.bk-code-block`) | Show/hide blok contoh kode |
| `data-chip-remove` (`.bk-chip`) | Hapus chip dari daftar |
| `data-drawer-open="#id"` / `data-drawer-close` | Buka/tutup drawer |
| `data-datepicker` | Date picker (pakai `data-dp-input`, `data-dp-value`, `data-dp-prev/next/today/clear`) |
| `data-otp` | Input OTP (event `bk:otp-complete` berisi `{ code }`) |
| `data-searchbar` | Searchbar + saran (pakai `data-searchbar-input`, `data-searchbar-list`, `data-searchbar-item`) |
| `data-dropdown-toggle` | Toggle menu dropdown |
| `data-modal-open="#id"` / `data-modal-close` | Modal |
| `data-tab-target="#panel"` | Tab |
| `data-tooltip="teks"` (+`data-tooltip-pos`) | Tooltip |
| `data-counter="96,8"` | Angka beranimasi |
| `data-copy="#HEX"` | Salin ke clipboard + toast |
| `data-password-toggle="#input"` | Tampilkan/sembunyikan sandi |
| `data-validate` (form) | Validasi required + toast |
| `.bk-th-sort` (th) | Sortir kolom tabel |

## Konvensi Penamaan

- Prefix `bk-` untuk semua kelas — aman dari bentrok dengan Tailwind/Bootstrap.
- Warna hanya lewat variabel `--bk-*`; jangan hardcode HEX di komponen.
- Ikon selalu `<i data-icon="...">` (atau `BkIcon` di Vue).
- Teks UI memakai bahasa Indonesia; angka/data memakai `bk-mono` (tabular).

## Roadmap

- [ ] Halaman autentikasi (login/register/lupa sandi)
- [ ] Komponen grafik jadi Vue (`BkChart.vue`) & Blade directive
- [ ] Dark mode per-sesi dari server (Blade)
- [ ] File ikon terpisah (`icons.json`) agar bisa di-share ke dua stack
# bkpsdm-ui-kit
# bkpsdm-ui-kit
