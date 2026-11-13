import { defineComponent, h } from 'vue';

/** BkProgress — bar progres dengan label opsional */
export default defineComponent({
  name: 'BkProgress',
  props: {
    value: { type: Number, default: 0 },
    color: { type: String, default: null },
    size: { type: String, default: null },
    striped: { type: Boolean, default: false },
    label: { type: String, default: null },
    showValue: { type: Boolean, default: true },
  },
  setup(props, { attrs }) {
    return () => {
      const wrapCls = ['bk-progress'];
      if (props.size) wrapCls.push('bk-progress-' + props.size);
      const barCls = ['bk-progress-bar'];
      if (props.color) barCls.push('bk-' + props.color);
      if (props.striped) barCls.push('is-striped');
      const value = Math.max(0, Math.min(100, props.value));
      const children = [
        props.label
          ? h('div', { class: 'bk-progress-label' }, [
              h('span', props.label),
              props.showValue ? h('span', { class: 'bk-mono' }, value + '%') : null,
            ])
          : null,
        h('div', { class: wrapCls }, [
          h('div', { class: barCls, style: { width: value + '%' } }),
        ]),
      ];
      return h('div', { ...attrs, class: attrs.class }, children);
    };
  },
});
