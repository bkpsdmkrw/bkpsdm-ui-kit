import { defineComponent, h, ref, computed, onMounted, onBeforeUnmount } from 'vue';
import BkIcon from './BkIcon.js';

/** BkSelectSearch — combobox dengan pencarian (v-model: value terpilih) */
export default defineComponent({
  name: 'BkSelectSearch',
  props: {
    modelValue: { type: [String, Number], default: '' },
    options: { type: Array, default: () => [] },
    placeholder: { type: String, default: 'Cari & pilih…' },
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    const open = ref(false);
    const query = ref('');
    const active = ref(-1);
    const root = ref(null);

    const filtered = computed(() => {
      const q = query.value.toLowerCase().trim();
      if (!q) return props.options;
      return props.options.filter((o) => String(o.label).toLowerCase().indexOf(q) !== -1);
    });
    const selectedLabel = computed(() => {
      const found = props.options.find((o) => o.value === props.modelValue);
      return found ? found.label : '';
    });
    const display = computed(() => (open.value ? query.value : selectedLabel.value));

    function choose(o) {
      emit('update:modelValue', o.value);
      open.value = false;
      query.value = '';
      active.value = -1;
    }
    function onInput(e) {
      query.value = e.target.value;
      open.value = true;
      active.value = -1;
    }
    function onKeydown(e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        open.value = true;
        active.value = Math.min(active.value + 1, filtered.value.length - 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        active.value = Math.max(active.value - 1, 0);
      } else if (e.key === 'Enter' && active.value >= 0 && filtered.value[active.value]) {
        e.preventDefault();
        choose(filtered.value[active.value]);
      } else if (e.key === 'Escape') {
        open.value = false;
      }
    }
    function onDocClick(e) {
      if (root.value && !root.value.contains(e.target)) open.value = false;
    }
    onMounted(() => document.addEventListener('click', onDocClick));
    onBeforeUnmount(() => document.removeEventListener('click', onDocClick));

    return () => h('div', { ref: root, class: ['bk-select-search', open.value ? 'is-open' : '', attrs.class] }, [
      h('input', {
        class: 'bk-input',
        type: 'text',
        value: display.value,
        placeholder: props.placeholder,
        disabled: props.disabled,
        role: 'combobox',
        'aria-expanded': open.value ? 'true' : 'false',
        onInput,
        onFocus: () => { open.value = true; },
        onKeydown,
      }),
      h('button', {
        type: 'button',
        'data-select-clear': '',
        class: props.modelValue ? 'is-visible' : '',
        'aria-label': 'Bersihkan pilihan',
        onClick: () => {
          emit('update:modelValue', '');
          query.value = '';
        },
      }, [h(BkIcon, { name: 'x' })]),
      h('button', {
        type: 'button',
        'data-select-toggle': '',
        'aria-label': 'Buka daftar pilihan',
        onClick: () => { open.value = !open.value; },
      }, [h(BkIcon, { name: 'chevron-down' })]),
      h('div', { class: 'bk-select-menu' }, filtered.value.length
        ? filtered.value.map((o, i) => h('button', {
            type: 'button',
            class: ['bk-select-option', o.value === props.modelValue ? 'is-selected' : '', i === active.value ? 'is-active' : ''],
            onClick: () => choose(o),
          }, [h('span', String(o.label)), h(BkIcon, { name: 'check' })]))
        : [h('div', { class: 'bk-select-empty is-visible' }, 'Tidak ditemukan. Coba kata kunci lain.')]),
    ]);
  },
});
