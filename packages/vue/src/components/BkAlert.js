import { defineComponent, h, ref } from 'vue';
import BkIcon from './BkIcon.js';

const TYPE_ICONS = {
  success: 'check-circle',
  danger: 'x-circle',
  warning: 'alert',
  primary: 'bell',
  info: 'info',
};

/**
 * BkAlert
 * Props : type, title, dismissible
 * Slot  : default (isi alert)
 * Event : close
 * Contoh: <BkAlert type="success" title="Berhasil" dismissible>Data tersimpan.</BkAlert>
 */
export default defineComponent({
  name: 'BkAlert',
  props: {
    type: { type: String, default: 'info' },
    title: { type: String, default: null },
    dismissible: { type: Boolean, default: false },
  },
  emits: ['close'],
  setup(props, { slots, attrs, emit }) {
    const closed = ref(false);
    return () => {
      if (closed.value) return null;
      return h(
        'div',
        { ...attrs, class: ['bk-alert', `bk-alert-${props.type}`, attrs.class], role: 'alert' },
        [
          h('span', { class: 'bk-alert-icon' }, [h(BkIcon, { name: TYPE_ICONS[props.type] || 'info' })]),
          h('div', [
            props.title ? h('div', { class: 'bk-alert-title' }, props.title) : null,
            h('div', { class: 'bk-alert-body' }, slots.default ? slots.default() : null),
          ]),
          props.dismissible
            ? h(
                'button',
                {
                  type: 'button',
                  class: 'bk-alert-close',
                  'aria-label': 'Tutup',
                  onClick: () => {
                    closed.value = true;
                    emit('close');
                  },
                },
                [h(BkIcon, { name: 'x' })]
              )
            : null,
        ]
      );
    };
  },
});
