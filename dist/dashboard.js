/* ============================================================
   BKPSDM UI KIT — Grafik Dashboard (Chart.js 4)
   Semua warna dibaca dari CSS custom properties, sehingga
   otomatis mengikuti tema terang/gelap.
   ============================================================ */
(function () {
  'use strict';

  var charts = {};   // registri instance chart
  var R = document.documentElement;

  /* ---------- Pembaca token warna dari CSS ---------- */
  function cssVar(name) {
    return getComputedStyle(R).getPropertyValue(name).trim();
  }
  function rgbaVar(name, alpha) {
    var rgb = cssVar(name).split(',').map(function (n) { return parseInt(n, 10); });
    return 'rgba(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ', ' + alpha + ')';
  }
  function themeColors() {
    return {
      primary: cssVar('--bk-primary'),
      teal: rgbaVar('--bk-teal-rgb', 1),
      green: rgbaVar('--bk-green-rgb', 1),
      bright: rgbaVar('--bk-bright-rgb', 1),
      brown: rgbaVar('--bk-brown-rgb', 1),
      orange: rgbaVar('--bk-orange-rgb', 1),
      red: rgbaVar('--bk-red-rgb', 1),
      success: cssVar('--bk-success'),
      danger: cssVar('--bk-danger'),
      text: cssVar('--bk-text'),
      muted: cssVar('--bk-muted'),
      grid: rgbaVar('--bk-ink-rgb', 0.08),
      gridDark: rgbaVar('--bk-ink-rgb', 0.14)
    };
  }

  /* ---------- Setup global Chart.js ---------- */
  function setupChartJs() {
    if (!window.Chart) {
      document.body.classList.add('no-chart');
      return false;
    }
    var C = themeColors();
    Chart.defaults.font.family = cssVar('--bk-font');
    Chart.defaults.font.size = 11.5;
    Chart.defaults.color = C.muted;
    Chart.defaults.borderColor = C.grid;
    Chart.defaults.plugins.tooltip.backgroundColor = cssVar('--bk-ink');
    Chart.defaults.plugins.tooltip.titleFont = { family: cssVar('--bk-font'), weight: '700', size: 12 };
    Chart.defaults.plugins.tooltip.bodyFont = { family: cssVar('--bk-font'), size: 11.5 };
    Chart.defaults.plugins.tooltip.padding = 10;
    Chart.defaults.plugins.tooltip.cornerRadius = 8;
    Chart.defaults.plugins.tooltip.boxPadding = 4;
    Chart.defaults.plugins.tooltip.displayColors = true;
    Chart.defaults.plugins.legend.display = false;
    Chart.defaults.animation.duration = 800;
    Chart.defaults.animation.easing = 'easeOutQuart';
    return true;
  }

  function gradient(ctx, hex, from, to) {
    var g = ctx.createLinearGradient(0, 0, 0, ctx.canvas.clientHeight || 260);
    g.addColorStop(0, hexToRgba(hex, from));
    g.addColorStop(1, hexToRgba(hex, to));
    return g;
  }
  function hexToRgba(hex, a) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(function (c) { return c + c; }).join('');
    var n = parseInt(hex, 16);
    return 'rgba(' + ((n >> 16) & 255) + ', ' + ((n >> 8) & 255) + ', ' + (n & 255) + ', ' + a + ')';
  }
  function alphaOf(rgbaStr, a) {
    return rgbaStr.replace(/[\d.]+\)$/, a + ')');
  }

  /* ---------- Data demo ---------- */
  var BULAN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  var DATA_KEHADIRAN = [91, 93, 92, 94, 95, 93, 96, 95, 97, 96, 97, 98];
  var DATA_KINERJA = [78, 80, 79, 83, 85, 84, 88, 87, 90, 92, 93, 94];
  var DATA_DIKLAT = [320, 380, 410, 290, 460, 520, 480, 560, 610, 590, 640, 720];

  /* ---------- Kartu stat: sparkline ---------- */
  function sparkline(id, data, color) {
    var el = document.getElementById(id);
    if (!el || !window.Chart) return;
    var ctx = el.getContext('2d');
    charts[id] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(function (_, i) { return i; }),
        datasets: [{
          data: data,
          borderColor: color,
          borderWidth: 2,
          fill: true,
          backgroundColor: gradient(ctx, color, 0.22, 0.0),
          pointRadius: 0,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: color,
          pointHoverBorderColor: cssVar('--bk-surface'),
          pointHoverBorderWidth: 2,
          tension: 0.42
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { tooltip: { enabled: false }, legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
        interaction: { intersect: false },
        animation: { duration: 900 }
      }
    });
  }

  /* ---------- Grafik utama ---------- */
  function lineChart() {
    var el = document.getElementById('chart-tren');
    if (!el || !window.Chart) return;
    var C = themeColors();
    var ctx = el.getContext('2d');
    charts['chart-tren'] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: BULAN,
        datasets: [
          {
            label: 'Tingkat Kehadiran (%)',
            data: DATA_KEHADIRAN,
            borderColor: C.teal,
            backgroundColor: gradient(ctx, C.teal, 0.16, 0.0),
            fill: true,
            tension: 0.42,
            borderWidth: 2.5,
            pointRadius: 3,
            pointBackgroundColor: C.teal,
            pointBorderColor: cssVar('--bk-surface'),
            pointBorderWidth: 2,
            pointHoverRadius: 5
          },
          {
            label: 'Indeks Kinerja (%)',
            data: DATA_KINERJA,
            borderColor: C.bright,
            backgroundColor: 'rgba(0,0,0,0)',
            fill: false,
            tension: 0.42,
            borderWidth: 2.5,
            borderDash: [6, 4],
            pointRadius: 3,
            pointBackgroundColor: C.bright,
            pointBorderColor: cssVar('--bk-surface'),
            pointBorderWidth: 2,
            pointHoverRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: { label: function (c) { return ' ' + c.dataset.label + ': ' + c.parsed.y + '%'; } }
          }
        },
        scales: {
          x: { grid: { display: false }, border: { display: false }, ticks: { maxRotation: 0, autoSkipPadding: 12 } },
          y: { min: 60, max: 100, border: { display: false }, ticks: { callback: function (v) { return v + '%'; }, stepSize: 10 } }
        }
      }
    });
  }

  function barChart() {
    var el = document.getElementById('chart-bidang');
    if (!el || !window.Chart) return;
    var C = themeColors();
    var ctx = el.getContext('2d');
    charts['chart-bidang'] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Umum', 'Keuangan', 'Kepegawaian', 'Teknis', 'Hukum', 'Sosial'],
        datasets: [{
          label: 'Peserta Diklat',
          data: [640, 480, 720, 560, 310, 420],
          backgroundColor: [C.teal, C.green, C.bright, C.brown, C.orange, C.red],
          borderRadius: 8,
          borderSkipped: false,
          maxBarThickness: 34,
          hoverBackgroundColor: [C.teal, C.green, C.bright, C.brown, C.orange, C.red]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: function (c) { return ' ' + c.parsed.y + ' peserta'; } } }
        },
        scales: {
          x: { grid: { display: false }, border: { display: false } },
          y: { border: { display: false }, ticks: { stepSize: 200 } }
        }
      }
    });
  }

  function doughnutChart() {
    var el = document.getElementById('chart-sumber');
    if (!el || !window.Chart) return;
    var C = themeColors();
    var ctx = el.getContext('2d');
    charts['chart-sumber'] = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Diklat In-House', 'E-Learning', 'Diklat Mandiri', 'Sertifikasi'],
        datasets: [{
          data: [42, 28, 18, 12],
          backgroundColor: [C.teal, C.bright, C.green, C.orange],
          borderColor: cssVar('--bk-surface'),
          borderWidth: 3,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '68%',
        plugins: {
          legend: { position: 'bottom', display: true, labels: { usePointStyle: true, pointStyle: 'circle', boxWidth: 7, boxHeight: 7, padding: 14, font: { size: 11.5, weight: '600' } } },
          tooltip: { callbacks: { label: function (c) { return ' ' + c.label + ': ' + c.parsed + '%'; } } }
        }
      }
    });
  }

  function radarChart() {
    var el = document.getElementById('chart-kompetensi');
    if (!el || !window.Chart) return;
    var C = themeColors();
    var ctx = el.getContext('2d');
    charts['chart-kompetensi'] = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Manajerial', 'Teknis', 'Digital', 'Kepemimpinan', 'Sosio-Kultural', 'Analisis'],
        datasets: [
          {
            label: 'Target',
            data: [85, 90, 80, 85, 82, 88],
            borderColor: C.green,
            backgroundColor: hexToRgba(C.green, 0.12),
            borderWidth: 2,
            borderDash: [5, 4],
            pointRadius: 3,
            pointBackgroundColor: C.green
          },
          {
            label: 'Aktual',
            data: [72, 84, 66, 78, 80, 74],
            borderColor: C.teal,
            backgroundColor: hexToRgba(C.teal, 0.14),
            borderWidth: 2,
            pointRadius: 3,
            pointBackgroundColor: C.teal
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', display: true, labels: { usePointStyle: true, pointStyle: 'circle', boxWidth: 7, boxHeight: 7, padding: 14, font: { size: 11.5, weight: '600' } } }
        },
        scales: { r: { min: 0, max: 100, ticks: { display: false, stepSize: 25 }, pointLabels: { font: { size: 11, weight: '600' } } } }
      }
    });
  }

  /* ---------- Grafik demo halaman komponen ---------- */
  function demoCharts() {
    var C = themeColors();
    // Line mini
    var l = document.getElementById('demo-line');
    if (l && window.Chart) {
      var lctx = l.getContext('2d');
      charts['demo-line'] = new Chart(lctx, {
        type: 'line',
        data: {
          labels: BULAN,
          datasets: [{
            data: DATA_DIKLAT,
            borderColor: C.teal,
            backgroundColor: gradient(lctx, C.teal, 0.2, 0),
            fill: true, tension: 0.42, borderWidth: 2.5,
            pointRadius: 2, pointBackgroundColor: C.teal,
            pointBorderColor: cssVar('--bk-surface'), pointBorderWidth: 2
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { x: { grid: { display: false }, border: { display: false } }, y: { border: { display: false } } }
        }
      });
    }
    // Bar mini
    var b = document.getElementById('demo-bar');
    if (b && window.Chart) {
      var bctx = b.getContext('2d');
      charts['demo-bar'] = new Chart(bctx, {
        type: 'bar',
        data: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [{
            data: [340, 420, 390, 480],
            backgroundColor: [C.green, C.bright, C.brown, C.teal],
            borderRadius: 6, borderSkipped: false, maxBarThickness: 40
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { x: { grid: { display: false }, border: { display: false } }, y: { border: { display: false } } }
        }
      });
    }
    // Doughnut mini
    var d = document.getElementById('demo-donut');
    if (d && window.Chart) {
      var dctx = d.getContext('2d');
      charts['demo-donut'] = new Chart(dctx, {
        type: 'doughnut',
        data: {
          labels: ['PNS', 'PPPK', 'Honorer'],
          datasets: [{ data: [58, 27, 15], backgroundColor: [C.teal, C.bright, C.green], borderColor: cssVar('--bk-surface'), borderWidth: 3 }]
        },
        options: {
          responsive: true, maintainAspectRatio: false, cutout: '64%',
          plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, pointStyle: 'circle', boxWidth: 7, boxHeight: 7, padding: 12 } } }
        }
      });
    }
    // Radar mini
    var r = document.getElementById('demo-radar');
    if (r && window.Chart) {
      var rctx = r.getContext('2d');
      charts['demo-radar'] = new Chart(rctx, {
        type: 'radar',
        data: {
          labels: ['A', 'B', 'C', 'D', 'E'],
          datasets: [{ data: [80, 65, 90, 72, 85], borderColor: C.teal, backgroundColor: hexToRgba(C.teal, 0.15), pointRadius: 2 }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { r: { ticks: { display: false } } }
        }
      });
    }
    // Radar profil pegawai (halaman profil)
    var pr = document.getElementById('profile-radar');
    if (pr && window.Chart) {
      var prctx = pr.getContext('2d');
      charts['profile-radar'] = new Chart(prctx, {
        type: 'radar',
        data: {
          labels: ['Manajerial', 'Teknis', 'Digital', 'Kepemimpinan', 'Sosio-Kultural', 'Analisis'],
          datasets: [{
            label: 'Kompetensi',
            data: [82, 91, 78, 74, 85, 88],
            borderColor: C.teal,
            backgroundColor: hexToRgba(C.teal, 0.16),
            borderWidth: 2.5,
            pointRadius: 4,
            pointBackgroundColor: C.teal,
            pointBorderColor: cssVar('--bk-surface'),
            pointBorderWidth: 2
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { r: { min: 0, max: 100, ticks: { display: false, stepSize: 25 }, pointLabels: { font: { size: 11, weight: '600' } } } }
        }
      });
    }
  }

  /* ---------- Re-tema saat mode berubah: bangun ulang semua grafik ---------- */
  function reTheme() {
    setupChartJs();
    Object.keys(charts).forEach(function (key) {
      try { charts[key].destroy(); } catch (err) { /* noop */ }
      delete charts[key];
    });
    initAll();
  }
  document.addEventListener('bk:theme', reTheme);

  /* ---------- Init ---------- */
  function initAll() {
    if (!window.Chart) { document.body.classList.add('no-chart'); return; }
    var C = themeColors();
    sparkline('spark-1', [18, 22, 20, 26, 24, 30, 28, 34, 32, 38, 40, 44], C.teal);
    sparkline('spark-2', [12, 16, 15, 20, 26, 24, 30, 34, 33, 40, 46, 52], C.bright);
    sparkline('spark-3', [92, 93, 91, 94, 95, 94, 96, 95, 96, 97, 96, 98], C.green);
    sparkline('spark-4', [40, 36, 38, 34, 32, 35, 30, 33, 31, 28, 30, 27], C.orange);
    lineChart();
    barChart();
    doughnutChart();
    radarChart();
    demoCharts();
  }
  document.addEventListener('DOMContentLoaded', function () {
    if (!setupChartJs()) return;
    initAll();
  });
})();
