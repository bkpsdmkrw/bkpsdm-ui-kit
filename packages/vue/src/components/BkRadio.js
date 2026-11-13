import { defineComponent, h } from 'vue';

/** BkRadio — pakai dalam grup dengan v-model yang sama */
export default defineComponent({
  name: 'BkRadio',
  props: {
    modelValue: { type: [String, Number, Boolean], default: null },
    value: { type: [String, Number, Boolean], required: true },
    name: { type: String, default: null },
    label: { type: String, default: null },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit, slots }) {
    return () => h('label', { class: ['bk-radio', attrs.class] }, [
      h('input', {
        type: 'radio',
        name: props.name || undefined,
        checked: props.modelValue === props.value,
        disabled: props.disabled,
        onChange: () => emit('update:modelValue', props.value),
      }),
      h('span', { class: 'bk-radio-box' }),
      slots.default ? slots.default() : (props.label || null),
    ]);
  },
});
