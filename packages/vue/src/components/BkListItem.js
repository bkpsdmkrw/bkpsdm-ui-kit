import { defineComponent, h } from 'vue';
import BkIcon from './BkIcon.js';

/** BkListItem — baris daftar; slot default untuk konten kanan (badge/aksi) */
export default defineComponent({
  name: 'BkListItem',
  props: {
    icon: { type: String, default: null },
    title: { type: String, default: null },
    sub: { type: String, default: null },
    hover: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }) {
    return () => h('div', { class: ['bk-list-item', props.hover ? 'is-hover' : '', attrs.class] }, [
      props.icon ? h(BkIcon, { name: props.icon }) : null,
      h('div', { class: 'bk-flex-col bk-gap-1', style: { flex: '1' } }, [
        props.title ? h('span', { class: 'bk-list-item-title' }, props.title) : null,
        props.sub ? h('span', { class: 'bk-list-item-sub' }, props.sub) : null,
      ]),
      slots.default ? slots.default() : null,
    ]);
  },
});
