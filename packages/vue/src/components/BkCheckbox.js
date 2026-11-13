import { defineComponent, h } from 'vue';
import BkIcon from './BkIcon.js';

/** BkCheckbox */
export default defineComponent({
  name: 'BkCheckbox',
  props: {
    modelValue: { type: Boolean, default: false },
    label: { type: String, default: null },
    color: { type: String, default: null },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit, slots }) {
    return () => h('label', { class: ['bk-check', props.color ? 'bk-check-' + props.color : '', attrs.class] }, [
      h('input', {
        type: 'checkbox',
        checked: props.modelValue,
        disabled: props.disabled,
        onChange: (e) => emit('update:modelValue', e.target.checked),
      }),
      h('span', { class: 'bk-check-box' }, [h(BkIcon, { name: 'check' })]),
      slots.default ? slots.default() : (props.label || null),
    ]);
  },
});
