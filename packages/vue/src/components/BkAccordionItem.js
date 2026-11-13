import { defineComponent, h, ref, inject, computed } from 'vue';
import BkIcon from './BkIcon.js';

/** BkAccordionItem — name (key), title, icon */
export default defineComponent({
  name: 'BkAccordionItem',
  props: {
    name: { type: [String, Number], required: true },
    title: { type: String, default: null },
    icon: { type: String, default: null },
  },
  setup(props, { attrs, slots }) {
    const accordion = inject('bkAccordion', null);
    const local = ref(false);

    const isOpen = computed(() => accordion ? accordion.isOpen(props.name) : local.value);
    const toggle = () => {
      if (accordion) accordion.toggle(props.name);
      else local.value = !local.value;
    };

    return () => h('div', { class: ['bk-accordion-item', isOpen.value ? 'is-open' : '', attrs.class] }, [
      h('button', {
        type: 'button',
        class: 'bk-accordion-header',
        'aria-expanded': isOpen.value ? 'true' : 'false',
        onClick: toggle,
      }, [
        props.icon ? h(BkIcon, { name: props.icon }) : null,
        slots.title ? slots.title() : props.title,
        h(BkIcon, { name: 'chevron-down', class: 'chev' }),
      ]),
      h('div', { class: 'bk-accordion-content' }, [
        h('div', { class: 'bk-accordion-body' }, slots.default ? slots.default() : null),
      ]),
    ]);
  },
});
