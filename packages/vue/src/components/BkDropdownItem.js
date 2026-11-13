import { defineComponent, h } from 'vue';
import BkIcon from './BkIcon.js';

/** BkDropdownItem */
export default defineComponent({
  name: 'BkDropdownItem',
  props: {
    icon: { type: String, default: null },
    danger: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }) {
    return () => h('button', {
      ...attrs,
      type: 'button',
      class: ['bk-dropdown-item', props.danger ? 'is-danger' : '', attrs.class],
    }, [
      props.icon ? h(BkIcon, { name: props.icon }) : null,
      slots.default ? slots.default() : null,
    ]);
  },
});
