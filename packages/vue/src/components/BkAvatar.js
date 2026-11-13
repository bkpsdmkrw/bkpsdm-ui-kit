import { defineComponent, h } from 'vue';

/** BkAvatar — inisial/nama, warna, ukuran, status online */
export default defineComponent({
  name: 'BkAvatar',
  props: {
    label: { type: String, default: null },
    color: { type: String, default: null },
    size: { type: String, default: null },
    square: { type: Boolean, default: false },
    status: { type: String, default: null },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const cls = ['bk-avatar'];
      if (props.color) cls.push('bk-avatar-' + props.color);
      if (props.size) cls.push('bk-avatar-' + props.size);
      if (props.square) cls.push('bk-avatar-square');
      return h('span', { ...attrs, class: [cls, attrs.class] }, [
        slots.default ? slots.default() : (props.label || null),
        props.status ? h('span', { class: 'bk-avatar-status ' + props.status }) : null,
      ]);
    };
  },
});
