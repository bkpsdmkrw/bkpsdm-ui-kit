import { defineComponent, h, ref } from 'vue';
import BkIcon from './BkIcon.js';

/** BkInput — input teks dengan ikon / toggle sandi / state */
export default defineComponent({
  name: 'BkInput',
  props: {
    modelValue: { type: [String, Number], default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: null },
    icon: { type: String, default: null },
    size: { type: String, default: null },
    invalid: { type: Boolean, default: false },
    valid: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    password: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    const show = ref(false);
    return () => {
      const cls = ['bk-input'];
      if (props.size) cls.push('bk-input-' + props.size);
      if (props.invalid) cls.push('is-invalid');
      if (props.valid) cls.push('is-valid');
      const inputType = props.password ? (show.value ? 'text' : 'password') : props.type;
      const inputEl = h('input', {
        ...attrs,
        class: [cls, attrs.class],
        type: inputType,
        value: props.modelValue,
        placeholder: props.placeholder || undefined,
        disabled: props.disabled,
        onInput: (e) => emit('update:modelValue', e.target.value),
      });
      if (!props.icon && !props.password) return inputEl;
      return h('div', { class: ['bk-input-icon', props.password ? 'bk-input-icon-end' : ''] }, [
        props.icon ? h(BkIcon, { name: props.icon }) : null,
        inputEl,
        props.password
          ? h('button', {
              type: 'button',
              'data-password-toggle': '',
              'aria-label': show.value ? 'Sembunyikan sandi' : 'Tampilkan sandi',
              onClick: () => { show.value = !show.value; },
            }, [h(BkIcon, { name: show.value ? 'eye-off' : 'eye' })])
          : null,
      ]);
    };
  },
});
