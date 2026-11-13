import { defineComponent, h } from 'vue';

/** BkSelect — select native; pakai prop options atau slot <option> */
export default defineComponent({
  name: 'BkSelect',
  props: {
    modelValue: { type: [String, Number], default: '' },
    options: { type: Array, default: null },
    placeholder: { type: String, default: null },
    size: { type: String, default: null },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit, slots }) {
    return () => {
      const cls = ['bk-select'];
      if (props.size) cls.push('bk-select-' + props.size);
      const opts = props.options && props.options.length
        ? props.options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const label = typeof o === 'string' ? o : o.label;
            return h('option', { value }, label);
          })
        : slots.default ? slots.default() : null;
      return h('select', {
        ...attrs,
        class: [cls, attrs.class],
        value: props.modelValue,
        disabled: props.disabled,
        onChange: (e) => emit('update:modelValue', e.target.value),
      }, [
        props.placeholder ? h('option', { value: '', disabled: true }, props.placeholder) : null,
        opts,
      ]);
    };
  },
});
