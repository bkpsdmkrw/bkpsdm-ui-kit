import { defineComponent, h } from 'vue';

/** BkSkeleton — placeholder loading (variant: text|title|avatar) */
export default defineComponent({
  name: 'BkSkeleton',
  props: {
    variant: { type: String, default: 'text' },
    width: { type: String, default: null },
  },
  setup(props, { attrs }) {
    return () => h('div', {
      ...attrs,
      class: ['bk-skeleton', 'bk-skeleton-' + props.variant, attrs.class],
      style: props.width ? { width: props.width } : undefined,
    });
  },
});
