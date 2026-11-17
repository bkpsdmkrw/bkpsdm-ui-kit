import { defineComponent, h, ref, onMounted, onBeforeUnmount, watch } from 'vue';

/**
 * BkChart — grafik Chart.js (line/bar/doughnut/radar/pie).
 * Chart.js diimpor secara dinamis saat mount (SSR-safe) — pasang:
 *   npm install chart.js
 * Props: type, data (Chart.js data object), options, height, ariaLabel
 */
export default defineComponent({
  name: 'BkChart',
  props: {
    type: { type: String, default: 'line' },
    data: { type: Object, required: true },
    options: { type: Object, default: null },
    height: { type: [Number, String], default: 260 },
    ariaLabel: { type: String, default: 'Grafik' },
  },
  setup(props, { attrs }) {
    const canvas = ref(null);
    const failed = ref(false);
    let chart = null;
    let ChartCtor = null;

    async function init() {
      if (!ChartCtor) {
        try {
          const mod = await import('chart.js/auto');
          ChartCtor = mod.default || mod.Chart;
        } catch (e) {
          failed.value = true;
          return;
        }
      }
      if (!canvas.value) return;

      const cs = getComputedStyle(document.documentElement);
      ChartCtor.defaults.font.family = cs.getPropertyValue('--bk-font').trim() || 'Inter, sans-serif';
      ChartCtor.defaults.color = cs.getPropertyValue('--bk-muted').trim() || '#737373';

      const base = { responsive: true, maintainAspectRatio: false };
      chart = new ChartCtor(canvas.value, {
        type: props.type,
        data: props.data,
        options: Object.assign(base, props.options || {}),
      });
    }

    onMounted(init);
    watch(() => props.data, (value) => {
      if (chart) {
        chart.data = value;
        chart.update();
      }
    }, { deep: true });
    onBeforeUnmount(() => {
      if (chart) {
        chart.destroy();
        chart = null;
      }
    });

    return () => {
      const height = typeof props.height === 'number' ? props.height + 'px' : props.height;
      return h('div', {
        ...attrs,
        class: ['bk-chart-box', attrs.class],
        style: Object.assign({ height }, attrs.style),
      }, [
        failed.value
          ? h('div', { class: 'bk-chart-fallback', style: { display: 'flex' } },
              'Chart.js belum terpasang — jalankan: npm install chart.js')
          : h('canvas', { ref: canvas, role: 'img', 'aria-label': props.ariaLabel }),
      ]);
    };
  },
});
