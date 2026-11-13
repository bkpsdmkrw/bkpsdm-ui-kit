import { defineComponent, h } from 'vue';

/**
 * BkBadge
 * Props : type, soft, dot
 * Slot  : default
 * Contoh: <BkBadge type="success" dot>Aktif</BkBadge>
 *         <BkBadge type="warning" soft>Menunggu</BkBadge>
 */
export default defineComponent({
  name: 'BkBadge',
  props: {
    type: { type: String, default: 'primary' },
    soft: { type: Boolean, default: false },
    dot: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () => {
      const variant = props.soft ? `bk-badge-soft-${props.type}` : `bk-badge-${props.type}`;
      return h(
        'span',
        { ...attrs, class: ['bk-badge', variant, attrs.class] },
        [
          props.dot ? h('span', { class: 'bk-badge-dot' }) : null,
          slots.default ? slots.default() : null,
        ]
      );
    };
  },
});
