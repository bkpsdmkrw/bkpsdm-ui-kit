import { defineComponent, h } from 'vue';

/** BkSwitch — sakelar on/off */
export default defineComponent({
  name: 'BkSwitch',
  props: {
    modelValue: { type: Boolean, default: false },
    label: { type: String, default: null },
    success: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit, slots }) {
    return () => h('label', { class: ['bk-switch', props.success ? 'bk-switch-success' : '', attrs.class] }, [
      h('input', {
        type: 'checkbox',
        checked: props.modelValue,
        disabled: props.disabled,
        onChange: (e) => emit('update:modelValue', e.target.checked),
      }),
      h('span', { class: 'bk-switch-track' }),
      slots.default ? slots.default() : (props.label || null),
    ]);
  },
});
