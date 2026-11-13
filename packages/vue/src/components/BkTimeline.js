import { defineComponent, h } from 'vue';

/** BkTimeline — wadah timeline */
export default defineComponent({
  name: 'BkTimeline',
  setup(_, { attrs, slots }) {
    return () => h('div', { ...attrs, class: ['bk-timeline', attrs.class] }, slots.default ? slots.default() : null);
  },
});
