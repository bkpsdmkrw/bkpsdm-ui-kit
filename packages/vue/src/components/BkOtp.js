import { defineComponent, h, ref, watch } from 'vue';

/** BkOtp — input OTP; v-model = string kode */
export default defineComponent({
  name: 'BkOtp',
  props: {
    modelValue: { type: String, default: '' },
    length: { type: Number, default: 6 },
  },
  emits: ['update:modelValue', 'complete'],
  setup(props, { attrs, emit }) {
    const inputs = ref([]);
    const chars = ref([]);

    watch(() => props.modelValue, (v) => {
      chars.value = String(v || '').split('').slice(0, props.length);
    }, { immediate: true });

    function update() {
      const value = chars.value.join('');
      emit('update:modelValue', value);
      if (value.length === props.length) emit('complete', value);
    }
    function onInput(i, e) {
      const digit = e.target.value.replace(/\D/g, '').slice(-1);
      chars.value[i] = digit;
      e.target.value = digit;
      update();
      if (digit && i < props.length - 1 && inputs.value[i + 1]) inputs.value[i + 1].focus();
    }
    function onKeydown(i, e) {
      if (e.key === 'Backspace' && !chars.value[i] && i > 0 && inputs.value[i - 1]) {
        inputs.value[i - 1].focus();
      }
    }
    function onPaste(e) {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '').slice(0, props.length);
      chars.value = text.split('');
      update();
      const idx = Math.min(text.length, props.length - 1);
      if (inputs.value[idx]) inputs.value[idx].focus();
    }

    return () => h('div', { ...attrs, class: ['bk-otp', attrs.class] }, Array.from({ length: props.length }, (_, i) => h('input', {
      class: ['bk-otp-input', chars.value[i] ? 'is-filled' : ''],
      inputmode: 'numeric',
      maxlength: '1',
      autocomplete: i === 0 ? 'one-time-code' : 'off',
      'aria-label': 'Digit ' + (i + 1),
      value: chars.value[i] || '',
      ref: (el) => { if (el) inputs.value[i] = el; },
      onInput: (e) => onInput(i, e),
      onKeydown: (e) => onKeydown(i, e),
      onPaste,
    })));
  },
});
