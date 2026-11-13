import { defineComponent, h } from 'vue';
import BkIcon from './BkIcon.js';

/** BkChip — label pilihan yang bisa dihapus */
export default defineComponent({
  name: 'BkChip',
  props: {
    type: { type: String, default: null },
    removable: { type: Boolean, default: false },
  },
  emits: ['remove'],
  setup(props, { attrs, emit, slots }) {
    return () => h('span', { ...attrs, class: ['bk-chip', props.type ? 'bk-chip-' + props.type : '', attrs.class] }, [
      slots.default ? slots.default() : null,
      props.removable
        ? h('button', {
            type: 'button',
            class: 'bk-chip-remove',
            'aria-label': 'Hapus chip',
            onClick: () => emit('remove'),
          }, [h(BkIcon, { name: 'x' })])
        : null,
    ]);
  },
});
