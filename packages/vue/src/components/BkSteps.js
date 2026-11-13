import { defineComponent, h } from 'vue';
import BkIcon from './BkIcon.js';

/** BkSteps — indikator tahapan; items: array label, active: indeks aktif */
export default defineComponent({
  name: 'BkSteps',
  props: {
    items: { type: Array, default: () => [] },
    active: { type: Number, default: 0 },
  },
  setup(props, { attrs }) {
    return () => h('div', { ...attrs, class: ['bk-steps', attrs.class], 'aria-label': 'Tahapan' }, props.items.map((label, i) => {
      const done = i < props.active;
      const active = i === props.active;
      return h('div', { class: ['bk-step', done ? 'is-done' : '', active ? 'is-active' : ''] }, [
        h('div', { class: 'bk-step-head' }, [
          h('span', { class: 'bk-step-num' }, done ? h(BkIcon, { name: 'check' }) : String(i + 1)),
          i < props.items.length - 1 ? h('span', { class: 'bk-step-line' }) : null,
        ]),
        h('div', { class: 'bk-step-label' }, label),
      ]);
    }));
  },
});
