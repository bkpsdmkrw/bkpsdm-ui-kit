import { defineComponent, h, watch, onMounted, onBeforeUnmount } from 'vue';
import BkIcon from './BkIcon.js';

/** BkDrawer — panel geser; side: right (default) | left */
export default defineComponent({
  name: 'BkDrawer',
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: null },
    side: { type: String, default: 'right' },
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
      class: ['bk-drawer-backdrop', props.modelValue ? 'is-open' : '', attrs.class],
      role: 'dialog',
      'aria-modal': 'true',
      onClick: (e) => { if (e.target === e.currentTarget) close(); },
    }, [
      h('aside', { class: ['bk-drawer', 'bk-drawer-' + props.side] }, [
        props.title
          ? h('div', { class: 'bk-drawer-header' }, [
              h('div', { class: 'bk-drawer-title' }, props.title),
              h('button', { type: 'button', class: 'bk-icon-btn bk-ms-auto', 'aria-label': 'Tutup', onClick: close }, [h(BkIcon, { name: 'x' })]),
            ])
          : null,
        h('div', { class: 'bk-drawer-body' }, slots.default ? slots.default() : null),
        slots.footer ? h('div', { class: 'bk-drawer-footer' }, slots.footer()) : null,
      ]),
    ]);
  },
});
