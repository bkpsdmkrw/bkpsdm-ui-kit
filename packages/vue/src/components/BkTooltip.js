import { defineComponent, h } from 'vue';

/** BkTooltip — bungkus elemen; text = isi tooltip, position: top|bottom|left|right */
export default defineComponent({
  name: 'BkTooltip',
  props: {
    text: { type: String, required: true },
    position: { type: String, default: null },
  },
  setup(props, { attrs, slots }) {
    return () => h('span', {
      ...attrs,
      class: ['bk-tooltip-wrap', attrs.class],
      'data-tooltip': props.text,
      'data-tooltip-pos': props.position || undefined,
    }, slots.default ? slots.default() : null);
  },
});
