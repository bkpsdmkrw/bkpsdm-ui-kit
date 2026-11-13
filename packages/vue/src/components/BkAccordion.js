import { defineComponent, h, provide } from 'vue';

/** BkAccordion — v-model: array key yang terbuka; single = hanya satu terbuka */
export default defineComponent({
  name: 'BkAccordion',
  props: {
    modelValue: { type: Array, default: () => [] },
    single: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit, slots }) {
    provide('bkAccordion', {
      isOpen: (name) => (props.modelValue || []).indexOf(name) !== -1,
      toggle: (name) => {
        const cur = props.modelValue || [];
        if (cur.indexOf(name) !== -1) emit('update:modelValue', cur.filter((k) => k !== name));
        else emit('update:modelValue', props.single ? [name] : cur.concat([name]));
      },
    });
    return () => h('div', { ...attrs, class: ['bk-accordion', attrs.class] }, slots.default ? slots.default() : null);
  },
});
