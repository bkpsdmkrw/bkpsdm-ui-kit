import { defineComponent, h } from 'vue';

/** BkField — pembungkus label + kontrol + hint/error */
export default defineComponent({
  name: 'BkField',
  props: {
    label: { type: String, default: null },
    hint: { type: String, default: null },
    error: { type: String, default: null },
    required: { type: Boolean, default: false },
    forId: { type: String, default: null },
  },
  setup(props, { slots, attrs }) {
    return () => h('div', { class: ['bk-field', props.error ? 'has-error' : '', attrs.class] }, [
      props.label
        ? h('label', { class: 'bk-label', for: props.forId || undefined }, [
            props.label,
            props.required ? h('span', { class: 'bk-req' }, ' *') : null,
          ])
        : null,
      slots.default ? slots.default() : null,
      props.error
        ? h('span', { class: 'bk-error' }, props.error)
        : props.hint
          ? h('span', { class: 'bk-hint' }, props.hint)
          : null,
    ]);
  },
});
