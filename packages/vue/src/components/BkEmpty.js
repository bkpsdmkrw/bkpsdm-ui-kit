import { defineComponent, h } from 'vue';
import BkIcon from './BkIcon.js';

/** BkEmpty — tampilan kosong dengan aksi (slot default) */
export default defineComponent({
  name: 'BkEmpty',
  props: {
    icon: { type: String, default: 'folder' },
    title: { type: String, default: 'Belum ada data' },
    text: { type: String, default: null },
  },
  setup(props, { attrs, slots }) {
    return () => h('div', { ...attrs, class: ['bk-empty', attrs.class] }, [
      h('div', { class: 'bk-empty-icon' }, [h(BkIcon, { name: props.icon })]),
      h('div', { class: 'bk-empty-title' }, props.title),
      props.text ? h('div', { class: 'bk-empty-text' }, props.text) : null,
      slots.default ? slots.default() : null,
    ]);
  },
});
