import { defineComponent, h } from 'vue';
import BkIcon from './BkIcon.js';

/**
 * BkButton
 * Props : type, size, icon, href, block
 * Slot  : default (isi tombol)
 * Contoh: <BkButton type="primary" icon="plus">Simpan</BkButton>
 *         <BkButton type="outline" size="sm" href="/pegawai">Lihat</BkButton>
 */
export default defineComponent({
  name: 'BkButton',
  props: {
    type: { type: String, default: 'primary' },
    size: { type: String, default: null },
    icon: { type: String, default: null },
    href: { type: String, default: null },
    block: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () => {
      const classes = ['bk-btn', `bk-btn-${props.type}`];
      if (props.size) classes.push(`bk-btn-${props.size}`);
      if (props.block) classes.push('bk-btn-block');

      const children = [
        props.icon ? h(BkIcon, { name: props.icon }) : null,
        slots.default ? slots.default() : null,
      ];

      if (props.href) {
        return h('a', { ...attrs, href: props.href, class: [classes, attrs.class] }, children);
      }
      return h('button', { ...attrs, type: 'button', class: [classes, attrs.class] }, children);
    };
  },
});
