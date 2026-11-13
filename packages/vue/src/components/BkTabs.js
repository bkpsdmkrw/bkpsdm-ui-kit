import { defineComponent, h } from 'vue';
import BkIcon from './BkIcon.js';

/** BkTabs — tabs: [{ key, label, icon? }]; v-model = key aktif */
export default defineComponent({
  name: 'BkTabs',
  props: {
    modelValue: { type: [String, Number], default: null },
    tabs: { type: Array, default: () => [] },
    pill: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    return () => h('div', { ...attrs, class: ['bk-tabs', attrs.class] }, props.tabs.map((tab) => {
      const active = tab.key === props.modelValue;
      return h('button', {
        type: 'button',
        class: ['bk-tab', props.pill ? 'bk-tab-pill' : '', active ? 'is-active' : ''],
        onClick: () => emit('update:modelValue', tab.key),
      }, [
        tab.icon ? h(BkIcon, { name: tab.icon }) : null,
        tab.label,
      ]);
    }));
  },
});
