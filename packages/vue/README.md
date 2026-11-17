# @bkpsdm/ui-kit-vue

Komponen **Vue 3 / Nuxt** untuk [BKPSDM UI Kit](https://www.npmjs.com/package/@bkpsdm/ui-kit) — tanpa menulis kelas CSS manual. Selaras **INA Digital Design System**.

## Daftar komponen (37)

| Kategori | Komponen |
|---|---|
| **Dasar** | `BkButton` · `BkBadge` · `BkAlert` · `BkCard` · `BkIcon` |
| **Formulir** | `BkField` · `BkInput` · `BkTextarea` · `BkSelect` · `BkSelectSearch` · `BkCheckbox` · `BkRadio` · `BkSwitch` · `BkOtp` |
| **Display** | `BkAvatar` · `BkChip` · `BkProgress` · `BkSpinner` · `BkSkeleton` · `BkEmpty` · `BkList` · `BkListItem` · `BkTimeline` · `BkTimelineItem` |
| **Data** | `BkStatCard` · `BkSteps` · `BkChart` |
| **Navigasi** | `BkTabs` · `BkBreadcrumb` · `BkPagination` |
| **Overlay** | `BkModal` · `BkDrawer` · `BkDropdown` · `BkDropdownItem` · `BkTooltip` · `BkAccordion` · `BkAccordionItem` |

Props utama:

| Komponen | Props / v-model |
|---|---|
| `BkButton` | `type`, `size` (`xs/sm/lg/xl`), `icon`, `href`, `block` |
| `BkBadge` | `type`, `soft`, `dot` |
| `BkAlert` | `type`, `title`, `dismissible` · event `close` |
| `BkCard` | `title`, `subtitle`, `footer` · slot `actions` |
| `BkIcon` | `name` (67 ikon) |
| `BkField` | `label`, `hint`, `error`, `required` |
| `BkInput` | `v-model`, `type`, `icon`, `password`, `size`, `invalid`, `valid` |
| `BkSelectSearch` | `v-model`, `options` `[{value,label}]` |
| `BkCheckbox` | `v-model`, `label`, `color` |
| `BkRadio` | `v-model`, `value`, `name`, `label` |
| `BkSwitch` | `v-model`, `label`, `success` |
| `BkProgress` | `value`, `color`, `size`, `striped`, `label` |
| `BkStatCard` | `label`, `value`, `delta`, `deltaUp`, `icon`, `color` |
| `BkTabs` | `v-model` (key), `tabs` `[{key,label,icon}]`, `pill` |
| `BkModal` / `BkDrawer` | `v-model` (open), `title`, `size`/`side` |
| `BkAccordion` | `v-model` (array key), `single` |
| `BkPagination` | `v-model:page`, `pages` |
| `BkOtp` | `v-model` (kode), `length` · event `complete` |

## Instalasi

```bash
npm install @bkpsdm/ui-kit @bkpsdm/ui-kit-vue

# opsional — hanya jika memakai <BkChart>
npm install chart.js
```

Wajib memuat CSS inti (sekali di aplikasi):

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@bkpsdm/ui-kit/css']
})
```

## Pemakaian di Nuxt

Daftarkan sebagai plugin global:

```ts
// plugins/bk-ui-kit.ts
import BkUiKit from '@bkpsdm/ui-kit-vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BkUiKit)
})
```

Lalu komponen langsung tersedia di template:

```vue
<template>
  <BkButton type="primary" icon="plus" size="lg">Simpan</BkButton>
  <BkButton type="soft-danger" size="sm" icon="trash">Hapus</BkButton>

  <BkBadge type="success" dot>Aktif</BkBadge>
  <BkBadge type="warning" soft>Menunggu</BkBadge>

  <BkAlert type="success" title="Berhasil" dismissible @close="onClose">
    Data tersinkronisasi dengan SIASN.
  </BkAlert>

  <BkCard title="Profil Pegawai" subtitle="Data pribadi">
    <template #actions>
      <BkButton type="outline" size="sm">Ubah</BkButton>
    </template>
    Isi kartu…
  </BkCard>

  <BkIcon name="graduation" class="bk-stat-icon" />
</template>
```

## Pemakaian di Vue 3 (Vite)

```ts
// main.js
import { createApp } from 'vue'
import BkUiKit from '@bkpsdm/ui-kit-vue'
import '@bkpsdm/ui-kit/css'
import App from './App.vue'

createApp(App).use(BkUiKit).mount('#app')
```

Atau impor per komponen (tree-shaking):

```ts
import { BkButton, BkBadge } from '@bkpsdm/ui-kit-vue'
```

## Ikons

`BkIcon` mengambil ikon dari kamus inti (`@bkpsdm/ui-kit`) dan merender SVG **di server** (SSR-safe) — tidak bergantung pada `ui-kit.js` di browser.

```ts
import { icons, icon } from '@bkpsdm/ui-kit-vue'
```

> Untuk interaktivitas penuh (tema, dropdown, modal, toast) muat `@bkpsdm/ui-kit/script` dan gunakan `window.Bk`.

## Publikasi (maintainer)

```bash
cd packages/vue
npm version patch      # setelah versi inti di-update (sesuaikan dependensi)
npm publish
```

> Publikasikan `@bkpsdm/ui-kit` (inti) **lebih dulu**, karena paket Vue bergantung padanya.
