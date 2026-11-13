import { defineComponent, h } from 'vue';

/** BkTextarea */
export default defineComponent({
  name: 'BkTextarea',
  props: {
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: null },
    rows: { type: [Number, String], default: 4 },
    invalid: { type: Boolean, default: false },
    valid: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    return () => {
      const cls = ['bk-textarea'];
      if (props.invalid) cls.push('is-invalid');
      if (props.valid) cls.push('is-valid');
      return h('textarea', {
        ...attrs,
        class: [cls, attrs.class],
        rows: props.rows,
        placeholder: props.placeholder || undefined,
        disabled: props.disabled,
        value: props.modelValue,
        onInput: (e) => emit('update:modelValue', e.target.value),
      });
    };
  },
});
