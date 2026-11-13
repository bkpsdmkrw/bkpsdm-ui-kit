import { defineComponent, h } from 'vue';
import BkIcon from './BkIcon.js';

/** BkStatCard — kartu KPI */
export default defineComponent({
  name: 'BkStatCard',
  props: {
    label: { type: String, required: true },
    value: { type: [String, Number], default: '' },
    delta: { type: String, default: null },
    deltaUp: { type: Boolean, default: true },
    icon: { type: String, default: null },
    color: { type: String, default: 'primary' },
    foot: { type: String, default: null },
  },
  setup(props, { attrs }) {
    return () => h('div', { ...attrs, class: ['bk-card bk-stat', attrs.class] }, [
      h('div', { class: 'bk-card-body' }, [
        h('div', { class: 'bk-stat-top' }, [
          h('div', [
            h('div', { class: 'bk-stat-label' }, props.label),
            h('div', { class: 'bk-stat-value' }, props.value),
            props.delta
              ? h('span', { class: ['bk-stat-delta', props.deltaUp ? 'up' : 'down'] }, [
                  h(BkIcon, { name: props.deltaUp ? 'trend-up' : 'trend-down' }),
                  props.delta,
                ])
              : null,
          ]),
          props.icon
            ? h('div', { class: 'bk-stat-icon bk-stat-icon-' + props.color }, [h(BkIcon, { name: props.icon })])
            : null,
        ]),
        props.foot ? h('div', { class: 'bk-stat-foot' }, props.foot) : null,
      ]),
    ]);
  },
});
