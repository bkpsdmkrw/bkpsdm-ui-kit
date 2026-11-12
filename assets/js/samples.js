/* ============================================================
   BKPSDM UI KIT — Contoh Kode (halaman dokumentasi)
   Kode diinjeksi ke <pre data-code="key"> sebagai teks,
   sehingga aman disalin tanpa harus escape HTML manual.
   ============================================================ */
(function () {
  'use strict';

  var SAMPLES = {
    /* ---------- DASAR ---------- */
    'warna':
`<!-- Warna diakses lewat token CSS, bukan HEX langsung -->
<button class="bk-btn bk-btn-primary">Primary (#2E594D)</button>
<span class="bk-badge bk-badge-soft-success">Sukses (#10733B)</span>

/* Definisi token di :root — tema gelap otomatis via [data-theme="dark"] */
:root {
  --bk-primary:  #2E594D;   /* KARAWANG Teal  */
  --bk-info:     #4AA63C;   /* KARAWANG Bright*/
  --bk-success:  #10733B;   /* KARAWANG Green */
  --bk-warning:  #F28E13;   /* KARAWANG Orange*/
  --bk-danger:   #D92938;   /* KARAWANG Red   */
  --bk-brown:    #402727;   /* KARAWANG Brown */
}`,

    'tipografi':
`<!-- Skala IDDS (font Inter) -->
<h1>Heading H3 — 32px</h1>
<h2>Heading H4 — 28px</h2>
<h3>Heading H5 — 24px</h3>
<h4>Body Large — 20px</h4>
<h5>Body — 18px</h5>
<h6>Caption — 14px (Overline)</h6>

<!-- Utilitas teks (Body Small 16px = basis admin) -->
<p class="bk-muted">Teks sekunder</p>
<p class="bk-overline">Label seksi kecil</p>
<p class="bk-mono bk-fs-lg">96,8% &middot; 1.268 &middot; Rp 4.320.000</p>
<span class="bk-code">kode inline</span> <span class="bk-kbd">Ctrl</span>`,

    'tombol':
`<!-- Varian solid -->
<button class="bk-btn bk-btn-primary">Primary</button>
<button class="bk-btn bk-btn-success">Success</button>
<button class="bk-btn bk-btn-info">Info</button>
<button class="bk-btn bk-btn-warning">Warning</button>
<button class="bk-btn bk-btn-danger">Danger</button>
<button class="bk-btn bk-btn-dark">Dark</button>

<!-- Varian soft, outline, ghost -->
<button class="bk-btn bk-btn-soft-primary">Soft</button>
<button class="bk-btn bk-btn-outline-primary">Outline</button>
<button class="bk-btn bk-btn-ghost">Ghost</button>

<!-- Ukuran IDDS: 32 / 40 / 44 / 48 / 56 -->
<button class="bk-btn bk-btn-primary bk-btn-xs">32px</button>
<button class="bk-btn bk-btn-primary bk-btn-sm">40px</button>
<button class="bk-btn bk-btn-primary">44px</button>
<button class="bk-btn bk-btn-primary bk-btn-lg">48px</button>
<button class="bk-btn bk-btn-primary bk-btn-xl">56px</button>
<button class="bk-btn bk-btn-primary bk-btn-icon"><i data-icon="plus"></i></button>
<button class="bk-btn bk-btn-primary is-loading">Menyimpan…</button>
<button class="bk-btn bk-btn-outline" disabled>Nonaktif</button>`,

    'badge':
`<span class="bk-badge bk-badge-primary">Primary</span>
<span class="bk-badge bk-badge-success"><span class="bk-badge-dot"></span>Aktif</span>
<span class="bk-badge bk-badge-info"><span class="bk-badge-dot"></span>Diklat</span>
<span class="bk-badge bk-badge-warning"><span class="bk-badge-dot"></span>Cuti</span>
<span class="bk-badge bk-badge-danger"><span class="bk-badge-dot"></span>Nonaktif</span>
<span class="bk-badge bk-badge-cyan">Cyan</span>
<span class="bk-badge bk-badge-lime">Lime</span>

<!-- Varian soft & outline -->
<span class="bk-badge bk-badge-soft-primary"><i data-icon="graduation"></i>Diklat IV</span>
<span class="bk-badge bk-badge-soft-success">Selesai</span>
<span class="bk-badge bk-badge-outline-primary">Outline</span>`,

    'alert':
`<div class="bk-alert bk-alert-info">
  <span class="bk-alert-icon"><i data-icon="info"></i></span>
  <div>
    <div class="bk-alert-title">Informasi</div>
    <div class="bk-alert-body">Pendaftaran Diklat IV ditutup 30 November.</div>
  </div>
  <button class="bk-alert-close" onclick="this.closest('.bk-alert').remove()"><i data-icon="x"></i></button>
</div>

<div class="bk-alert bk-alert-success">
  <span class="bk-alert-icon"><i data-icon="check-circle"></i></span>
  <div><div class="bk-alert-title">Berhasil</div><div class="bk-alert-body">Data tersinkronisasi dengan SIASN.</div></div>
</div>

<!-- Tipe: bk-alert-info | success | warning | danger | primary
     Varian solid: bk-alert-solid-* -->
<div class="bk-alert bk-alert-solid-warning">
  <span class="bk-alert-icon"><i data-icon="alert"></i></span>
  <div><div class="bk-alert-title">Perhatian</div><div class="bk-alert-body">Batas pengisian SKP 5 Desember.</div></div>
</div>`,

    'kartu':
`<div class="bk-card">
  <div class="bk-card-header">
    <div><div class="bk-card-title">Judul Kartu</div><div class="bk-card-sub">Sub judul</div></div>
    <button class="bk-icon-btn"><i data-icon="more"></i></button>
  </div>
  <div class="bk-card-body">Isi kartu di sini.</div>
  <div class="bk-card-footer">Footer &middot; diperbarui 5 menit lalu</div>
</div>

<!-- Kartu statistik -->
<div class="bk-card bk-stat">
  <div class="bk-card-body">
    <div class="bk-stat-top">
      <div>
        <div class="bk-stat-label">Pegawai Aktif</div>
        <div class="bk-stat-value">2.847</div>
        <span class="bk-stat-delta up"><i data-icon="trend-up"></i>+3,2%</span>
      </div>
      <div class="bk-stat-icon bk-stat-icon-primary"><i data-icon="users"></i></div>
    </div>
  </div>
</div>`,

    /* ---------- FORMULIR ---------- */
    'form-input':
`<div class="bk-field">
  <label class="bk-label" for="nip">NIP <span class="bk-req">*</span></label>
  <input class="bk-input bk-mono" id="nip" type="text" placeholder="19850312 200901 2 008">
  <span class="bk-hint">18 digit tanpa spasi.</span>
  <span class="bk-error">NIP wajib diisi.</span>
</div>

<!-- Ikon di kiri -->
<div class="bk-input-icon">
  <i data-icon="user"></i>
  <input class="bk-input" type="text" placeholder="Nama pengguna">
</div>

<!-- Input group -->
<div class="bk-input-group">
  <span class="bk-input-addon"><i data-icon="mail"></i></span>
  <input class="bk-input" type="email" placeholder="nama@bkpsdm.go.id">
  <button class="bk-btn bk-btn-primary" style="border-radius:0 8px 8px 0">Kirim</button>
</div>

<!-- Ukuran: bk-input-sm | bk-input | bk-input-lg -->`,

    'form-select':
`<!-- Select native -->
<div class="bk-field">
  <label class="bk-label" for="opd">Instansi / OPD</label>
  <select class="bk-select" id="opd">
    <option>Badan Kepegawaian &amp; Pengembangan SDM</option>
    <option>Dinas Pendidikan</option>
    <option>Dinas Kesehatan</option>
  </select>
</div>

<!-- Select dengan pencarian -->
<div class="bk-select-search" data-select-search>
  <input class="bk-input" type="text" placeholder="Ketik untuk mencari…" data-select-input>
  <input type="hidden" data-select-value name="opd">
  <button type="button" data-select-clear aria-label="Bersihkan"><i data-icon="x"></i></button>
  <button type="button" data-select-toggle aria-label="Buka daftar"><i data-icon="chevron-down"></i></button>
  <div class="bk-select-menu">
    <button type="button" class="bk-select-option" data-value="bkpsdm"><span>Badan Kepegawaian…</span><i data-icon="check"></i></button>
    <button type="button" class="bk-select-option" data-value="dikbud"><span>Dinas Pendidikan…</span><i data-icon="check"></i></button>
    <div class="bk-select-empty">Tidak ditemukan.</div>
  </div>
</div>`,

    'form-check':
`<label class="bk-check">
  <input type="checkbox" checked>
  <span class="bk-check-box"><i data-icon="check"></i></span>
  PNS
</label>

<label class="bk-check bk-check-success">
  <input type="checkbox" checked>
  <span class="bk-check-box"><i data-icon="check"></i></span>
  PPPK
</label>

<label class="bk-check bk-check-danger">
  <input type="checkbox">
  <span class="bk-check-box"><i data-icon="check"></i></span>
  Honorer
</label>

<label class="bk-radio">
  <input type="radio" name="jk" checked>
  <span class="bk-radio-box"></span>
  Laki-laki
</label>

<label class="bk-radio">
  <input type="radio" name="jk">
  <span class="bk-radio-box"></span>
  Perempuan
</label>`,

    'form-switch':
`<label class="bk-switch">
  <input type="checkbox" checked>
  <span class="bk-switch-track"></span>
  Notifikasi email
</label>

<label class="bk-switch bk-switch-success">
  <input type="checkbox" checked>
  <span class="bk-switch-track"></span>
  Mode hemat data
</label>

<label class="bk-switch">
  <input type="checkbox">
  <span class="bk-switch-track"></span>
  Pengumuman publik
</label>`,

    'form-upload':
`<!-- Dropzone -->
<label class="bk-dropzone" for="berkas">
  <input type="file" id="berkas" class="bk-visually-hidden">
  <i data-icon="upload"></i>
  <div class="bk-dropzone-title">Klik untuk memilih berkas</div>
  <div class="bk-dropzone-sub">PDF / JPG / PNG — maks. 10 MB</div>
</label>

<!-- Daftar berkas terunggah -->
<div class="bk-file-list">
  <div class="bk-file-item">
    <div class="bk-file-icon bk-file-pdf">PDF</div>
    <div class="bk-file-info">
      <span class="bk-file-name">sk_pangkat_2026.pdf</span>
      <span class="bk-file-meta">2,4 MB</span>
    </div>
    <span class="bk-badge bk-badge-soft-success"><i data-icon="check"></i>Tervalidasi</span>
    <button class="bk-icon-btn bk-btn-sm" aria-label="Hapus"><i data-icon="trash"></i></button>
  </div>
</div>`,

    'form-validasi':
`<!-- form ber-atribut data-validate: kolom required otomatis divalidasi -->
<form data-validate novalidate>
  <div class="bk-field">
    <label class="bk-label" for="nama">Nama <span class="bk-req">*</span></label>
    <input class="bk-input" id="nama" type="text" required>
    <span class="bk-error">Nama wajib diisi.</span>
  </div>
  <button type="submit" class="bk-btn bk-btn-primary">Kirim</button>
</form>

<!-- Status manual -->
<input class="bk-input is-invalid" value="nip salah">
<input class="bk-input is-valid" value="198503122009012008">`,

    /* ---------- TABEL ---------- */
    'tabel-dasar':
`<div class="bk-table-wrap">
  <table class="bk-table bk-table-hover bk-table-striped">
    <thead>
      <tr><th>Nama</th><th>Pangkat/Gol.</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr>
        <td class="bk-fw-600" style="color:var(--bk-text)">Dewi Sartika</td>
        <td>Penata Tk. I (III/d)</td>
        <td><span class="bk-badge bk-badge-soft-success"><span class="bk-badge-dot"></span>Aktif</span></td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Modifier: bk-table-hover, bk-table-striped, bk-table-compact -->`,

    'tabel-sortir':
`<!-- Tambahkan .bk-th-sort pada th yang bisa diurutkan -->
<table class="bk-table bk-table-hover">
  <thead>
    <tr>
      <th class="bk-th-sort" data-dir="asc">Nama</th>
      <th class="bk-th-sort">Pangkat</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dewi Sartika</td>
      <td data-sort="IIId">Penata Tk. I (III/d)</td>
    </tr>
  </tbody>
</table>

<!-- data-sort pada td untuk nilai urut alternatif (mis. angka) -->`,

    'tabel-bulk':
`<!-- Checkbox pilih-semua + baris, dan bar aksi massal -->
<div class="bk-bulk-bar" data-bulk-bar>
  <span><span data-bulk-count>0</span> pegawai dipilih</span>
  <button class="bk-btn bk-btn-soft-danger bk-btn-sm"><i data-icon="trash"></i>Hapus</button>
</div>

<table class="bk-table">
  <thead>
    <tr>
      <th>
        <label class="bk-check">
          <input type="checkbox" data-check-all>
          <span class="bk-check-box"><i data-icon="check"></i></span>
        </label>
      </th>
      <th>Nama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <label class="bk-check">
          <input type="checkbox" data-check-item>
          <span class="bk-check-box"><i data-icon="check"></i></span>
        </label>
      </td>
      <td>Dewi Sartika</td>
    </tr>
  </tbody>
</table>`,

    'pagination':
`<div class="bk-pagination">
  <button class="bk-page is-disabled"><i data-icon="chevron-left"></i></button>
  <button class="bk-page is-active">1</button>
  <button class="bk-page">2</button>
  <button class="bk-page">3</button>
  <span class="bk-muted bk-fs-xs">…</span>
  <button class="bk-page">570</button>
  <button class="bk-page"><i data-icon="chevron-right"></i></button>
</div>

<!-- Info halaman -->
<div class="bk-table-foot bk-flex bk-between">
  <span>Menampilkan 1–8 dari 2.847</span>
  <div class="bk-pagination">…</div>
</div>`,

    /* ---------- NAVIGASI ---------- */
    'tabs':
`<div class="bk-tabs" data-tabs="contoh">
  <button class="bk-tab is-active" data-tab-target="#panel-1">Profil</button>
  <button class="bk-tab" data-tab-target="#panel-2">Riwayat</button>
</div>
<div class="bk-tab-panel is-active" id="panel-1">Isi panel 1</div>
<div class="bk-tab-panel" id="panel-2">Isi panel 2</div>

<!-- Varian pill -->
<button class="bk-tab bk-tab-pill is-active" data-tab-target="#p1">Semua</button>`,

    'accordion':
`<div class="bk-accordion" data-mode="single">
  <div class="bk-accordion-item is-open">
    <button class="bk-accordion-header" aria-expanded="true">
      Judul akordeon<i data-icon="chevron-down" class="chev"></i>
    </button>
    <div class="bk-accordion-content">
      <div class="bk-accordion-body">Isi akordeon di sini.</div>
    </div>
  </div>
</div>

<!-- data-mode="single" hanya satu terbuka; tanpa atribut = multi -->`,

    'breadcrumb':
`<nav class="bk-breadcrumb" aria-label="Breadcrumb">
  <a href="#"><i data-icon="home"></i>Beranda</a><span class="sep">/</span>
  <a href="#">Kepegawaian</a><span class="sep">/</span>
  <span class="current">Data Pegawai</span>
</nav>`,

    'steps':
`<div class="bk-steps" aria-label="Tahapan">
  <div class="bk-step is-done">
    <div class="bk-step-head"><span class="bk-step-num"><i data-icon="check"></i></span><span class="bk-step-line"></span></div>
    <div class="bk-step-label">Data Diri</div>
  </div>
  <div class="bk-step is-active">
    <div class="bk-step-head"><span class="bk-step-num">2</span><span class="bk-step-line"></span></div>
    <div class="bk-step-label">Berkas</div>
  </div>
  <div class="bk-step">
    <div class="bk-step-head"><span class="bk-step-num">3</span></div>
    <div class="bk-step-label">Selesai</div>
  </div>
</div>`,

    /* ---------- OVERLAY ---------- */
    'modal':
`<!-- Pemicu -->
<button class="bk-btn bk-btn-primary" data-modal-open="#modal-saya">Buka Modal</button>

<!-- Modal -->
<div class="bk-modal-backdrop" id="modal-saya" role="dialog" aria-modal="true">
  <div class="bk-modal bk-modal-sm">
    <div class="bk-modal-header">
      <div class="bk-modal-title">Judul Modal</div>
      <button class="bk-icon-btn bk-ms-auto" data-modal-close><i data-icon="x"></i></button>
    </div>
    <div class="bk-modal-body">Isi modal di sini.</div>
    <div class="bk-modal-footer">
      <button class="bk-btn bk-btn-ghost" data-modal-close>Batal</button>
      <button class="bk-btn bk-btn-primary" data-modal-close>Simpan</button>
    </div>
  </div>
</div>

<!-- Ukuran: bk-modal-sm | bk-modal (default) | bk-modal-lg -->`,

    'dropdown':
`<div class="bk-dropdown">
  <button class="bk-btn bk-btn-outline" data-dropdown-toggle>Aksi <i data-icon="chevron-down"></i></button>
  <div class="bk-dropdown-menu">
    <button class="bk-dropdown-item"><i data-icon="eye"></i>Lihat</button>
    <button class="bk-dropdown-item"><i data-icon="edit"></i>Ubah</button>
    <div class="bk-dropdown-divider"></div>
    <button class="bk-dropdown-item is-danger"><i data-icon="trash"></i>Hapus</button>
  </div>
</div>

<!-- Menu otomatis membalik arah bila dekat tepi layar.
     bk-start memaksa rata kiri, default rata kanan. -->`,

    'toast':
`<!-- Panggil dari JS -->
Bk.toast({ type: 'success', title: 'Berhasil', message: 'Data tersimpan.' });
Bk.toast({ type: 'danger',  title: 'Gagal',   message: 'Koneksi terputus.' });
Bk.toast({ type: 'warning', title: 'Perhatian', message: 'Kuota tersisa 5.' });
Bk.toast({ type: 'info',    title: 'Info',    message: 'Sinkronisasi berjalan.' });
Bk.toast({ type: 'primary', title: 'Notifikasi', message: 'Diklat IV dibuka.' });

// Opsi: durasi tampil (default 4200 ms)
Bk.toast({ type: 'success', title: 'OK', message: 'Tersimpan.', duration: 2500 });`,

    'tooltip':
`<button class="bk-btn bk-btn-outline" data-tooltip="Tooltip atas">Atas</button>
<button class="bk-btn bk-btn-outline" data-tooltip="Tooltip bawah" data-tooltip-pos="bottom">Bawah</button>
<button class="bk-btn bk-btn-outline" data-tooltip="Tooltip kiri" data-tooltip-pos="left">Kiri</button>
<button class="bk-btn bk-btn-outline" data-tooltip="Tooltip kanan" data-tooltip-pos="right">Kanan</button>

<!-- Posisi: default atas | bottom | left | right -->`,

    /* ---------- STATUS ---------- */
    'progress':
`<div class="bk-progress-label"><span>Realisasi Diklat</span><span class="bk-mono">84%</span></div>
<div class="bk-progress"><div class="bk-progress-bar is-striped" style="width:84%"></div></div>

<div class="bk-progress bk-progress-sm"><div class="bk-progress-bar bk-success" style="width:92%"></div></div>
<div class="bk-progress bk-progress-lg"><div class="bk-progress-bar bk-gradient" style="width:48%"></div></div>

<!-- Warna: bk-success | bk-info | bk-warning | bk-danger | bk-gradient
     Ukuran: bk-progress-sm | bk-progress | bk-progress-lg
     Animasi garis: is-striped -->`,

    'spinner':
`<span class="bk-spinner bk-spinner-sm"></span>
<span class="bk-spinner"></span>
<span class="bk-spinner bk-spinner-lg bk-spinner-primary"></span>

<!-- Tombol loading -->
<button class="bk-btn bk-btn-primary is-loading">Memuat data…</button>

<!-- Loader tengah halaman -->
<div class="bk-loading-center">
  <span class="bk-spinner bk-spinner-lg bk-spinner-primary"></span>
  <span>Memuat data pegawai…</span>
</div>`,

    'skeleton':
`<div class="bk-flex bk-gap-3">
  <div class="bk-skeleton bk-skeleton-avatar"></div>
  <div style="flex:1">
    <div class="bk-skeleton bk-skeleton-title"></div>
    <div class="bk-skeleton bk-skeleton-text"></div>
    <div class="bk-skeleton bk-skeleton-text"></div>
  </div>
</div>`,

    'empty':
`<div class="bk-empty">
  <div class="bk-empty-icon"><i data-icon="folder"></i></div>
  <div class="bk-empty-title">Belum ada data</div>
  <div class="bk-empty-text">Mulai dengan mengunggah berkas pertama Anda.</div>
  <button class="bk-btn bk-btn-primary bk-mt-2"><i data-icon="upload"></i>Unggah Berkas</button>
</div>`,

    /* ---------- DATA ---------- */
    'avatar':
`<span class="bk-avatar bk-avatar-sm">AR</span>
<span class="bk-avatar">DS</span>
<span class="bk-avatar bk-avatar-lg bk-avatar-blue">BA</span>
<span class="bk-avatar bk-avatar-xl bk-avatar-green">CP</span>

<!-- Status online -->
<span class="bk-avatar bk-avatar-blue"><span class="bk-avatar-status online"></span>GR</span>

<!-- Grup -->
<div class="bk-avatar-group">
  <span class="bk-avatar bk-avatar-sm">A</span>
  <span class="bk-avatar bk-avatar-sm bk-avatar-blue">B</span>
  <span class="bk-avatar bk-avatar-sm bk-avatar-ink">+18</span>
</div>

<!-- Warna: bk-avatar-blue | green | orange | ink | default(pink) -->`,

    'list':
`<div class="bk-list">
  <div class="bk-list-item is-hover">
    <i data-icon="user"></i>
    <div class="bk-flex-col bk-gap-1" style="flex:1">
      <span class="bk-list-item-title">Dewi Sartika</span>
      <span class="bk-list-item-sub">Pranata Komputer &middot; III/d</span>
    </div>
    <span class="bk-badge bk-badge-soft-success">Aktif</span>
  </div>
  <div class="bk-list-item is-hover">
    <i data-icon="user"></i>
    <div class="bk-flex-col bk-gap-1" style="flex:1">
      <span class="bk-list-item-title">Budi Antoro</span>
      <span class="bk-list-item-sub">Analis Kepegawaian &middot; III/a</span>
    </div>
    <span class="bk-badge bk-badge-soft-info">Diklat</span>
  </div>
</div>`,

    'timeline':
`<div class="bk-timeline">
  <div class="bk-timeline-item">
    <span class="bk-timeline-dot success"></span>
    <div class="bk-timeline-title">Berkas diterima</div>
    <div class="bk-timeline-text">Dokumen verifikasi lengkap.</div>
    <div class="bk-timeline-time"><i data-icon="clock"></i>09:00</div>
  </div>
  <div class="bk-timeline-item">
    <span class="bk-timeline-dot info"></span>
    <div class="bk-timeline-title">Verifikasi administrasi</div>
    <div class="bk-timeline-time"><i data-icon="clock"></i>11:30</div>
  </div>
</div>

<!-- Warna titik: primary | success | info | warning -->`,

    'stat':
`<div class="bk-card bk-stat">
  <div class="bk-card-body">
    <div class="bk-stat-top">
      <div>
        <div class="bk-stat-label">Peserta Diklat</div>
        <div class="bk-stat-value"><span data-counter="1268">0</span></div>
        <span class="bk-stat-delta up"><i data-icon="trend-up"></i>+12,5%</span>
        <span class="bk-fs-xs bk-muted"> vs bulan lalu</span>
      </div>
      <div class="bk-stat-icon bk-stat-icon-info"><i data-icon="graduation"></i></div>
    </div>
    <div class="bk-stat-spark"><canvas id="spark-2"></canvas></div>
    <div class="bk-stat-foot">24 program berjalan</div>
  </div>
</div>

<!-- Ikon warna: primary | info | success | warning | danger | cyan | lime
     data-counter menganimasikan angka; sparkline via assets/js/dashboard.js -->`,

    /* ---------- GRAFIK ---------- */
    'grafik-line':
`<div class="bk-chart-box" style="height:240px">
  <canvas id="grafik-saya"></canvas>
</div>

<script>
// Chart.js 4 — baca warna token agar mengikuti tema
var C = getComputedStyle(document.documentElement);
new Chart(document.getElementById('grafik-saya'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei'],
    datasets: [{
      data: [40, 55, 48, 70, 82],
      borderColor: C.getPropertyValue('--bk-primary'),
      backgroundColor: 'rgba(46, 89, 77, .15)',
      fill: true, tension: .42, borderWidth: 2.5
    }]
  },
  options: { responsive: true, maintainAspectRatio: false }
});
<\/script>

<!-- Pola lengkap (termasuk re-tema otomatis) ada di assets/js/dashboard.js -->`,

    'grafik-bar':
`new Chart(document.getElementById('grafik-batang'), {
  type: 'bar',
  data: {
    labels: ['Umum', 'Keuangan', 'Teknis'],
    datasets: [{
      data: [640, 480, 560],
      backgroundColor: ['#2E594D', '#10733B', '#4AA63C'],
      borderRadius: 8, borderSkipped: false, maxBarThickness: 34
    }]
  },
  options: { responsive: true, maintainAspectRatio: false }
});`,

    'grafik-donat':
`new Chart(document.getElementById('grafik-donat'), {
  type: 'doughnut',
  data: {
    labels: ['PNS', 'PPPK', 'Honorer'],
    datasets: [{
      data: [58, 27, 15],
      backgroundColor: ['#2E594D', '#4AA63C', '#10733B'],
      borderColor: '#fff', borderWidth: 3, hoverOffset: 6
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false, cutout: '68%',
    plugins: { legend: { position: 'bottom', labels: { usePointStyle: true } } }
  }
});`,

    'grafik-radar':
`new Chart(document.getElementById('grafik-radar'), {
  type: 'radar',
  data: {
    labels: ['Manajerial', 'Teknis', 'Digital', 'Kepemimpinan'],
    datasets: [{
      label: 'Aktual',
      data: [72, 84, 66, 78],
      borderColor: '#2E594D',
      backgroundColor: 'rgba(46, 89, 77, .14)',
      borderWidth: 2, pointRadius: 3
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    scales: { r: { min: 0, max: 100, ticks: { display: false } } }
  }
});`,

    /* ---------- STRUKTUR ---------- */
    'tree':
`<!-- Kasus nyata: pohon arsip dokumen kepegawaian -->
<div class="bk-tree">
  <div class="bk-tree-node is-open">
    <div class="bk-tree-row">
      <button class="bk-tree-toggle" aria-expanded="true"><i data-icon="chevron-right"></i></button>
      <i data-icon="folder"></i>
      <span class="bk-tree-label">SK Kenaikan Pangkat</span>
      <span class="bk-tree-badge">342</span>
    </div>
    <div class="bk-tree-children">
      <div class="bk-tree-node">
        <div class="bk-tree-row is-active">
          <i data-icon="file-text"></i>
          <span class="bk-tree-label">SK KP April 2026.pdf</span>
        </div>
      </div>
      <div class="bk-tree-node">
        <div class="bk-tree-row">
          <i data-icon="file-text"></i>
          <span class="bk-tree-label">SK KP Oktober 2026.pdf</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Klik baris = pilih (is-active) · klik panah = buka/tutup node
     Node tanpa is-open dirender tertutup. -->`,

    'org-piramida':
`<!-- Kasus nyata: struktur organisasi BKPSDM (hierarki top-down).
     Seret kartu ke kartu lain = pindahkan posisi (dengan dialog konfirmasi).
     Arahkan kursor ke kartu untuk menu aksi. -->
<div class="bk-org-scroll">
  <div class="bk-org">
    <div class="bk-org-node bk-org-node-lg">
      <div class="bk-org-actions">
        <button class="bk-org-act" data-org-action="tambah" data-tooltip="Tambah bawahan"><i data-icon="plus"></i></button>
        <button class="bk-org-act" data-org-action="ubah" data-tooltip="Ubah"><i data-icon="edit"></i></button>
        <button class="bk-org-act is-danger" data-org-action="hapus" data-tooltip="Hapus"><i data-icon="trash"></i></button>
      </div>
      <span class="bk-avatar bk-avatar-lg">AF</span>
      <div class="bk-org-node-title">Dr. H. Ahmad Fauzi, M.Si.</div>
      <div class="bk-org-node-sub">Kepala Badan</div>
    </div>
    <div class="bk-org-children">
      <div class="bk-org-branch">
        <div class="bk-org-node" draggable="true">
          <div class="bk-org-actions">…</div>
          <span class="bk-avatar bk-avatar-blue bk-avatar-sm">SR</span>
          <div class="bk-org-node-title">Dra. Siti Rahayu, M.M.</div>
          <div class="bk-org-node-sub">Sekretaris</div>
        </div>
        <div class="bk-org-children">
          <div class="bk-org-branch">
            <div class="bk-org-node" draggable="true">
              <div class="bk-org-node-title">Subbag Keuangan</div>
              <div class="bk-org-node-sub">Dedi Kurniawan, S.E.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bk-org-branch">…bidang lain…</div>
    </div>
  </div>
</div>`,

    'org-horizontal':
`<!-- Kasus nyata: struktur flat (horizontal) untuk OPD kecil / UPT -->
<div class="bk-org-scroll">
  <div class="bk-org-h">
    <div class="bk-org-node bk-org-node-lg">
      <span class="bk-avatar bk-avatar-lg">AF</span>
      <div class="bk-org-node-title">Dr. H. Ahmad Fauzi, M.Si.</div>
      <div class="bk-org-node-sub">Kepala Badan</div>
    </div>
    <div class="bk-org-h-children">
      <div class="bk-org-h-branch">
        <div class="bk-org-node">
          <div class="bk-org-node-title">Sekretariat</div>
          <div class="bk-org-node-sub">Siti Rahayu, M.M.</div>
        </div>
        <div class="bk-org-h-children">
          <div class="bk-org-h-branch">
            <div class="bk-org-node">
              <div class="bk-org-node-title">Subbag Keuangan</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bk-org-h-branch">
        <div class="bk-org-node">
          <div class="bk-org-node-title">Bidang Pengembangan Kompetensi</div>
        </div>
      </div>
    </div>
  </div>
</div>`,

    'org-matriks':
`<!-- Kasus nyata: matriks tim lintas fungsi (proyek reformasi birokrasi).
     Baris = tim proyek, kolom = fungsi pendukung, sel = penanggung jawab. -->
<div class="bk-org-scroll">
  <div class="bk-matrix" style="grid-template-columns:200px repeat(4, minmax(150px,1fr))">
    <div class="bk-matrix-cell bk-matrix-head">Tim \\ Fungsi</div>
    <div class="bk-matrix-cell bk-matrix-head">Kepegawaian</div>
    <div class="bk-matrix-cell bk-matrix-head">Diklat</div>
    <div class="bk-matrix-cell bk-matrix-head">Data &amp; Info</div>
    <div class="bk-matrix-cell bk-matrix-head">Keuangan</div>

    <div class="bk-matrix-cell bk-matrix-title">Tim Transformasi Digital</div>
    <div class="bk-matrix-cell">
      <span class="bk-matrix-chip is-lead"><span class="bk-avatar bk-avatar-blue">DS</span>Dewi S. (Lead)</span>
    </div>
    <div class="bk-matrix-cell bk-matrix-empty">—</div>
    <div class="bk-matrix-cell">
      <span class="bk-matrix-chip"><span class="bk-avatar bk-avatar-green">BA</span>Budi A.</span>
    </div>
    <div class="bk-matrix-cell bk-matrix-empty">—</div>
  </div>
</div>

<!-- .bk-matrix-chip.is-lead = koordinator utama -->`,

    'org-divisional':
`<!-- Kasus nyata: struktur divisional per fungsi layanan BKPSDM -->
<div class="bk-div-grid">
  <div class="bk-div-card">
    <div class="bk-div-head">
      <div class="bk-stat-icon bk-stat-icon-primary"><i data-icon="briefcase"></i></div>
      <div>
        <div class="bk-div-head-title">Sekretariat</div>
        <div class="bk-div-head-sub">Layanan administrasi &amp; keuangan</div>
      </div>
    </div>
    <div class="bk-div-body">
      <div class="bk-div-item"><i data-icon="users"></i>Subbag Umum &amp; Kepegawaian<span class="bk-div-item-sub">14 pegawai</span></div>
      <div class="bk-div-item"><i data-icon="wallet"></i>Subbag Keuangan<span class="bk-div-item-sub">8 pegawai</span></div>
    </div>
  </div>
  <div class="bk-div-card">…divisi lain…</div>
</div>`,

    /* ---------- INA DIGITAL (IDDS) ---------- */
    'chip':
`<!-- Chip: label pilihan yang bisa dihapus -->
<span class="bk-chip bk-chip-primary">BKPSDM Kab. Karawang</span>
<span class="bk-chip bk-chip-positif">Lulus</span>
<span class="bk-chip bk-chip-peringatan">Menunggu Verifikasi</span>
<span class="bk-chip bk-chip-panduan">E-Learning</span>
<span class="bk-chip bk-chip-eror">Ditolak</span>

<!-- Chip dengan tombol hapus -->
<span class="bk-chip">
  Diklat Kepemimpinan IV
  <button class="bk-chip-remove" data-chip-remove aria-label="Hapus chip"><i data-icon="x"></i></button>
</span>`,

    'date-picker':
`<div class="bk-datepicker" data-datepicker>
  <div class="bk-datepicker-input">
    <input class="bk-input" type="text" placeholder="DD/MM/YYYY" data-dp-input>
    <i data-icon="calendar"></i>
  </div>
  <input type="hidden" data-dp-value name="tanggal">
  <div class="bk-datepicker-panel" role="dialog" aria-label="Pilih tanggal">
    <div class="bk-datepicker-head">
      <button type="button" class="bk-datepicker-nav" data-dp-prev><i data-icon="chevron-left"></i></button>
      <span class="bk-datepicker-title">November 2026</span>
      <button type="button" class="bk-datepicker-nav" data-dp-next><i data-icon="chevron-right"></i></button>
    </div>
    <div class="bk-datepicker-grid">
      <span class="bk-datepicker-dow">Min</span><span class="bk-datepicker-dow">Sen</span>
      <span class="bk-datepicker-dow">Sel</span><span class="bk-datepicker-dow">Rab</span>
      <span class="bk-datepicker-dow">Kam</span><span class="bk-datepicker-dow">Jum</span>
      <span class="bk-datepicker-dow">Sab</span>
    </div>
    <div class="bk-datepicker-foot">
      <button type="button" class="bk-btn bk-btn-ghost bk-btn-sm" data-dp-today>Hari Ini</button>
      <button type="button" class="bk-btn bk-btn-ghost bk-btn-sm bk-ms-auto" data-dp-clear>Hapus</button>
    </div>
  </div>
</div>

<script>
// Nilai terpilih: input[data-dp-value] (YYYY-MM-DD)
dp.addEventListener('bk:datepicker', function (e) {
  console.log(e.detail.date); // "2026-12-12"
});
<\/script>`,

    'otp':
`<!-- Kasus nyata: verifikasi kode 6 digit (login / TTE) -->
<div data-otp id="otp-demo">
  <div class="bk-otp">
    <input class="bk-otp-input" inputmode="numeric" maxlength="1" autocomplete="one-time-code" aria-label="Digit 1">
    <input class="bk-otp-input" inputmode="numeric" maxlength="1" aria-label="Digit 2">
    <input class="bk-otp-input" inputmode="numeric" maxlength="1" aria-label="Digit 3">
    <input class="bk-otp-input" inputmode="numeric" maxlength="1" aria-label="Digit 4">
    <input class="bk-otp-input" inputmode="numeric" maxlength="1" aria-label="Digit 5">
    <input class="bk-otp-input" inputmode="numeric" maxlength="1" aria-label="Digit 6">
  </div>
</div>

<script>
document.getElementById('otp-demo').addEventListener('bk:otp-complete', function (e) {
  console.log(e.detail.code); // "123456"
});
<\/script>

<!-- Fokus otomatis berpindah, mendukung paste seluruh kode -->`,

    'drawer':
`<!-- Pemicu -->
<button class="bk-btn bk-btn-primary" data-drawer-open="#drawer-demo">Buka Drawer</button>

<!-- Drawer -->
<div class="bk-drawer-backdrop" id="drawer-demo" role="dialog" aria-modal="true">
  <aside class="bk-drawer bk-drawer-right">
    <div class="bk-drawer-header">
      <div class="bk-drawer-title">Detail Pegawai</div>
      <button class="bk-icon-btn bk-ms-auto" data-drawer-close><i data-icon="x"></i></button>
    </div>
    <div class="bk-drawer-body">Isi drawer di sini.</div>
    <div class="bk-drawer-footer">
      <button class="bk-btn bk-btn-ghost" data-drawer-close>Tutup</button>
      <button class="bk-btn bk-btn-primary" data-drawer-close>Simpan</button>
    </div>
  </aside>
</div>

<!-- Sisi: bk-drawer-right (default) | bk-drawer-left
     API: Bk.openDrawer('#id') / Bk.closeDrawer(el) -->`,

    'searchbar':
`<!-- Pencarian global dengan saran hasil -->
<div data-searchbar id="searchbar-demo">
  <div class="bk-searchbar">
    <i data-icon="search"></i>
    <input type="search" placeholder="Cari pegawai, diklat, atau dokumen…" data-searchbar-input>
    <kbd>Ctrl K</kbd>
    <button class="bk-btn bk-btn-primary bk-btn-sm">Cari</button>
  </div>
  <div class="bk-searchbar-suggestions" data-searchbar-list>
    <div class="bk-dropdown-item" data-searchbar-item><i data-icon="user"></i>Dewi Sartika — Pranata Komputer</div>
    <div class="bk-dropdown-item" data-searchbar-item><i data-icon="graduation"></i>Diklat Kepemimpinan IV</div>
    <div class="bk-select-empty" data-searchbar-empty>Tidak ditemukan.</div>
  </div>
</div>

<script>
// Ketik = filter saran · klik item = pilih
sb.addEventListener('bk:searchbar-select', function (e) {
  console.log(e.detail.value);
});
<\/script>`,

    /* ---------- DOKUMENTASI & INSTALASI ---------- */
    'dok-struktur':
`ui-kit/
├── assets/
│   ├── css/ui-kit.css          # design system (token IDDS + semua komponen)
│   └── js/
│       ├── ui-kit.js           # interaksi inti (ikon, tema, modal, toast…)
│       └── dashboard.js        # grafik Chart.js 4 (opsional, tema-adaptif)
├── resources/views/components/ # komponen Blade starter (paket Composer)
├── src/BkpsdmUiKitServiceProvider.php
├── composer.json               # untuk publish ke Packagist
├── index.html                  # demo dashboard analitik
├── components.html             # pustaka 46 komponen + contoh kode
├── dokumentasi.html            # halaman ini
└── README.md`,

    'laravel-manual':
`# 1) Salin aset ke folder public/
cp -r assets public/

{{-- 2) resources/views/layouts/admin.blade.php --}}
<!DOCTYPE html>
<html lang="id" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>@yield('title', 'BKPSDM')</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
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

{{-- 3) Pemakaian di halaman (kelas langsung) --}}
@extends('layouts.admin')
@section('content')
  <div class="bk-card">
    <div class="bk-card-header">
      <div><div class="bk-card-title">Data Pegawai</div><div class="bk-card-sub">2.847 pegawai</div></div>
      <button class="bk-btn bk-btn-primary"><i data-icon="plus"></i>Tambah</button>
    </div>
    <div class="bk-card-body">…</div>
  </div>
@endsection`,

    'laravel-komponen':
`{{-- Komponen Blade dari paket Composer (<x-bk::...>) --}}
<x-bk::button type="primary" icon="plus" size="lg">Simpan</x-bk::button>
<x-bk::button type="soft-danger" size="sm" icon="trash">Hapus</x-bk::button>

<x-bk::badge type="success" :dot="true">Aktif</x-bk::badge>
<x-bk::badge type="warning" soft>Menunggu</x-bk::badge>

<x-bk::alert type="success" title="Berhasil" dismissible>
  Data tersinkronisasi dengan SIASN.
</x-bk::alert>

<x-bk::card title="Profil Pegawai" subtitle="Data pribadi">
  <x-slot name="actions">
    <x-bk::button type="outline" size="sm">Ubah</x-bk::button>
  </x-slot>
  Isi kartu…
</x-bk::card>

<x-bk::icon name="graduation" class="bk-stat-icon" />

{{-- Varian: primary|success|info|warning|danger|soft-*|outline|ghost
     Ukuran: xs|sm|lg|xl (default 44px) — identik dengan kit HTML --}}`,

    'laravel-toast':
`{{-- 1) Flash message dari controller --}}
@if (session('success'))
<script>Bk.toast({ type: 'success', title: 'Berhasil', message: '{{ session('success') }}' });</script>
@endif
@if (session('error'))
<script>Bk.toast({ type: 'danger', title: 'Gagal', message: '{{ session('error') }}' });</script>
@endif

{{-- 2) Konten AJAX: render ulang ikon setelah fetch --}}
<script>
fetch('/api/pegawai/daftar')
  .then(r => r.text())
  .then(html => {
    const el = document.getElementById('daftar');
    el.innerHTML = html;
    Bk.replaceIcons(el);   // ikon baru ikut ter-render
    Bk.animateCounters(el);
  });
</script>`,

    'laravel-composer':
`# 1) Pasang paket (setelah terpublikasi di Packagist)
composer require bkpsdm/ui-kit

# 2) Publikasikan aset & komponen Blade
php artisan vendor:publish --tag=bkpsdm-assets
php artisan vendor:publish --tag=bkpsdm-views

# 3) Layout memakai aset vendor
<link rel="stylesheet" href="{{ asset('vendor/bkpsdm/ui-kit.css') }}">
<script src="{{ asset('vendor/bkpsdm/ui-kit.js') }}"></script>

# Provider terdaftar otomatis via Laravel auto-discovery,
# komponen langsung tersedia: <x-bk::button> <x-bk::badge> dll.`,

    'nuxt-config':
`// 1) Salin assets/ ke folder proyek Nuxt, lalu nuxt.config.ts
export default defineNuxtConfig({
  css: ['~/assets/css/ui-kit.css'],

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap' }
      ],
      script: [
        { src: '/vendor/ui-kit.js', defer: true },
        { src: 'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js', defer: true },
        { src: '/vendor/dashboard.js', defer: true }
      ]
    }
  }
})

// 2) Letakkan ui-kit.js & dashboard.js di public/vendor/`,

    'nuxt-plugin':
`// plugins/ui-kit.client.ts
export default defineNuxtPlugin(() => {
  // Render ulang ikon setelah mount & setiap pindah halaman
  const renderIcons = () => window.Bk?.replaceIcons(document)

  onMounted(renderIcons)
  watch(
    () => useRoute().fullPath,
    () => nextTick(renderIcons)
  )

  // $bk tersedia di seluruh komponen
  return { provide: { bk: () => window.Bk } }
})

// Pemakaian di komponen:
const { $bk } = useNuxtApp()
$bk().toast({ type: 'success', title: 'Tersimpan', message: 'OK' })`,

    'nuxt-komponen':
`<!-- components/Bk/BkIcon.vue -->
<template>
  <span class="bk-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round" v-html="icon" />
  </span>
</template>
<script setup lang="ts">
const props = defineProps<{ name: string }>()
const icon = computed(() => window.Bk?.icons[props.name] ?? '')
</script>

<!-- components/Bk/BkBadge.vue -->
<template>
  <span :class="['bk-badge', soft ? \`bk-badge-soft-\${type}\` : \`bk-badge-\${type}\`]">
    <span v-if="dot" class="bk-badge-dot" />
    <slot />
  </span>
</template>
<script setup lang="ts">
withDefaults(defineProps<{ type?: string; dot?: boolean; soft?: boolean }>(), {
  type: 'primary', dot: false, soft: false
})
</script>

<!-- Pemakaian -->
<BkBadge type="success" dot>Aktif</BkBadge>
<BkIcon name="graduation" />`,

    'packagist-json':
`// composer.json — syarat utama terpublikasi di Packagist
{
    "name": "bkpsdm/ui-kit",
    "description": "BKPSDM UI Kit — design system admin untuk Laravel & Nuxt (INA Digital Design System).",
    "type": "library",
    "license": "MIT",
    "keywords": ["laravel", "nuxt", "ui-kit", "design-system", "ina-digital"],
    "require": {
        "php": "^8.1",
        "illuminate/support": "^10.0|^11.0|^12.0"
    },
    "autoload": {
        "psr-4": { "Bkpsdm\\UiKit\\": "src/" }
    },
    "extra": {
        "laravel": {
            "providers": ["Bkpsdm\\UiKit\\BkpsdmUiKitServiceProvider"]
        }
    }
}

// Syarat Packagist:
// 1. composer.json valid (cek: composer validate)
// 2. Repo publik + punya tag versi semantik (v1.0.0)
// 3. License jelas (MIT) — file LICENSE wajib ada`,

    'packagist-publish':
`# 1) Validasi & commit
composer validate
git add -A && git commit -m "release: v1.0.0"

# 2) Buat tag versi (Packagist membaca tag)
git tag v1.0.0
git push origin main --tags

# 3) Daftarkan di https://packagist.org/packages/submit
#    Masukkan URL repo GitHub → Packagist otomatis membaca composer.json.

# 4) WAJIB: Pasang webhook GitHub → Packagist (auto-update)
#    Tanpa ini muncul peringatan "This package is not auto-updated."
#    a. Di Packagist: buka halaman paket → "Settings"
#       → salin URL di bagian "GitHub Service Hook":
#       https://packagist.org/api/github?username=USERNAME_GITHUB_ANDA
#    b. Di GitHub: repo → Settings → Webhooks → "Add webhook"
#       - Payload URL : tempel URL Packagist di atas
#                       (tambahkan ?token=API_TOKEN_PACKAGIST bila ingin aman)
#       - Content type: application/json
#       - Events      : "Just the push event" (cukup untuk push & tag baru)
#       - Aktifkan     : centang "Active" → "Add webhook"
#    c. Uji: git push --tags, atau tombol "Redeliver" di GitHub.

# 5) Di aplikasi Laravel
composer require bkpsdm/ui-kit
php artisan vendor:publish --tag=bkpsdm-assets
php artisan vendor:publish --tag=bkpsdm-views

# Update versi berikutnya cukup: tag baru (v1.1.0) → Packagist
# otomatis ter-update lewat webhook → composer update di aplikasi`,

  };

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-code]').forEach(function (pre) {
      var key = pre.getAttribute('data-code');
      pre.textContent = SAMPLES[key] || '<!-- contoh kode tidak tersedia -->';
    });
  });
})();
