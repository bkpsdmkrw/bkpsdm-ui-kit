import { defineComponent, h } from 'vue';

/** BkSpinner */
export default defineComponent({
  name: 'BkSpinner',
  props: {
    size: { type: String, default: null },
    light: { type: Boolean, default: false },
    primary: { type: Boolean, default: false },
  },
  setup(props, { attrs }) {
    return () => {
      const cls = ['bk-spinner'];
      if (props.size) cls.push('bk-spinner-' + props.size);
      if (props.light) cls.push('bk-spinner-light');
      if (props.primary) cls.push('bk-spinner-primary');
      return h('span', { ...attrs, class: [cls, attrs.class], role: 'status', 'aria-label': 'Memuat' });
    };
  },
});
