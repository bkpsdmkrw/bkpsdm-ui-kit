import { defineComponent, h, watch, onMounted, onBeforeUnmount } from 'vue';
import BkIcon from './BkIcon.js';

/** BkModal — v-model: terbuka/tertutup */
export default defineComponent({
  name: 'BkModal',
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: null },
    size: { type: String, default: null },
    closeOnBackdrop: { type: Boolean, default: true },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit, slots }) {
    const close = () => emit('update:modelValue', false);
    const onKey = (e) => { if (e.key === 'Escape' && props.modelValue) close(); };
    watch(() => props.modelValue, (open) => {
      if (typeof document !== 'undefined') document.body.style.overflow = open ? 'hidden' : '';
    });
    onMounted(() => document.addEventListener('keydown', onKey));
    onBeforeUnmount(() => {
      document.removeEventListener('keydown', onKey);
      if (typeof document !== 'undefined') document.body.style.overflow = '';
    });
    return () => h('div', {
      class: ['bk-modal-backdrop', props.modelValue ? 'is-open' : '', attrs.class],
      role: 'dialog',
      'aria-modal': 'true',
      onClick: (e) => { if (props.closeOnBackdrop && e.target === e.currentTarget) close(); },
    }, [
      h('div', { class: ['bk-modal', props.size ? 'bk-modal-' + props.size : ''] }, [
        props.title
          ? h('div', { class: 'bk-modal-header' }, [
              h('div', { class: 'bk-modal-title' }, props.title),
              h('button', { type: 'button', class: 'bk-icon-btn bk-ms-auto', 'aria-label': 'Tutup', onClick: close }, [h(BkIcon, { name: 'x' })]),
            ])
          : null,
        h('div', { class: 'bk-modal-body' }, slots.default ? slots.default() : null),
        slots.footer ? h('div', { class: 'bk-modal-footer' }, slots.footer()) : null,
      ]),
    ]);
  },
});
