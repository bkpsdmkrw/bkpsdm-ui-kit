import { defineComponent, h } from 'vue';

/** BkList — wadah daftar */
export default defineComponent({
  name: 'BkList',
  setup(_, { attrs, slots }) {
    return () => h('div', { ...attrs, class: ['bk-list', attrs.class] }, slots.default ? slots.default() : null);
  },
});
