/* ============================================================
   BKPSDM UI KIT — Grafik berbasis data-attribute
   Untuk <x-bk::chart> / @bkChart (Blade). Memakai Chart.js (CDN).
   ============================================================ */
(function () {
  'use strict';

  function hexToRgba(hex, a) {
    hex = (hex || '').trim().replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(function (c) { return c + c; }).join('');
    var n = parseInt(hex, 16);
    if (isNaN(n)) return 'rgba(46, 89, 77, ' + a + ')';
    return 'rgba(' + ((n >> 16) & 255) + ', ' + ((n >> 8) & 255) + ', ' + (n & 255) + ', ' + a + ')';
  }

  function cssVar(el, name) {
    return getComputedStyle(el).getPropertyValue(name).trim();
  }

  function palette(el) {
    var root = document.documentElement;
    return [
      cssVar(root, '--bk-primary'),
      cssVar(root, '--bk-info'),
      cssVar(root, '--bk-success'),
      cssVar(root, '--bk-warning'),
      cssVar(root, '--bk-danger'),
      cssVar(root, '--bk-cyan'),
      cssVar(root, '--bk-teal'),
    ];
  }

  function buildDatasets(type, data, colors) {
    var series = Array.isArray(data[0]) ? data : [data];
    return series.map(function (arr, i) {
      var color = colors[i % colors.length];
      if (type === 'doughnut' || type === 'pie') {
        return { data: arr, backgroundColor: colors, borderColor: cssVar(document.documentElement, '--bk-surface'), borderWidth: 3 };
      }
      if (type === 'bar') {
        return { data: arr, backgroundColor: color, borderRadius: 8, borderSkipped: false, maxBarThickness: 34 };
      }
      return {
        data: arr,
        borderColor: color,
        backgroundColor: type === 'line' ? hexToRgba(color, 0.15) : color,
        fill: type === 'line',
        tension: 0.4,
        borderWidth: 2.5,
        pointRadius: 3,
        pointBackgroundColor: color,
        pointBorderColor: cssVar(document.documentElement, '--bk-surface'),
        pointBorderWidth: 2,
      };
    });
  }

  function init(root) {
    if (!window.Chart) {
      document.body.classList.add('no-chart');
      return;
    }

    var rootEl = document.documentElement;
    Chart.defaults.font.family = cssVar(rootEl, '--bk-font') || 'Inter, sans-serif';
    Chart.defaults.color = cssVar(rootEl, '--bk-muted') || '#737373';
    Chart.defaults.borderColor = 'rgba(4, 18, 37, .08)';

    (root || document).querySelectorAll('[data-bk-chart]').forEach(function (el) {
      if (el._bkChart) return;

      try {
        var type = el.getAttribute('data-chart-type') || 'line';
        var labels = JSON.parse(el.getAttribute('data-chart-labels') || '[]');
        var data = JSON.parse(el.getAttribute('data-chart-data') || '[]');
        var options = JSON.parse(el.getAttribute('data-chart-options') || '{}');
        var colors = palette(el);

        var opts = Object.assign({
          responsive: true,
          maintainAspectRatio: false,
        }, options);

        opts.plugins = opts.plugins || {};
        if (opts.plugins.legend === undefined) {
          opts.plugins.legend = {
            display: (type === 'doughnut' || type === 'pie'),
            position: 'bottom',
            labels: { usePointStyle: true, pointStyle: 'circle', boxWidth: 7, boxHeight: 7, padding: 14 },
          };
        }

        if (type !== 'doughnut' && type !== 'pie') {
          opts.scales = opts.scales || {};
          opts.scales.x = opts.scales.x || { grid: { display: false }, border: { display: false } };
          opts.scales.y = opts.scales.y || { border: { display: false } };
        } else {
          opts.cutout = opts.cutout || '68%';
        }

        el._bkChart = new Chart(el, {
          type: type,
          data: { labels: labels, datasets: buildDatasets(type, data, colors) },
          options: opts,
        });
      } catch (err) {
        /* biarkan kanvas kosong bila data tidak valid */
      }
    });
  }

  function destroyAll() {
    document.querySelectorAll('[data-bk-chart]').forEach(function (el) {
      if (el._bkChart) {
        el._bkChart.destroy();
        el._bkChart = null;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () { init(document); });
  document.addEventListener('bk:theme', function () { destroyAll(); init(document); });

  window.BkCharts = { init: init, destroyAll: destroyAll };
})();
