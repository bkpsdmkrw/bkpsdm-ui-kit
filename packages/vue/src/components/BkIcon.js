import { defineComponent, h } from 'vue';
import { icons } from '@bkpsdm/ui-kit';

/**
 * BkIcon — ikon SVG dari kamus UI Kit (SSR-safe, tanpa DOM).
 * Pemakaian: <BkIcon name="graduation" /> atau <BkIcon name="plus" class="bk-stat-icon" />
 */
export default defineComponent({
  name: 'BkIcon',
  props: {
    name: { type: String, required: true },
  },
  setup(props, { attrs }) {
    return () => {
      const path = icons[props.name] || '';
      return h('span', {
        ...attrs,
        class: ['bk-icon', attrs.class],
        'aria-hidden': 'true',
        innerHTML: path
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + path + '</svg>'
          : '',
      });
    };
  },
});
