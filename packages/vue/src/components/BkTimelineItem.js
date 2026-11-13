import { defineComponent, h } from 'vue';
import BkIcon from './BkIcon.js';

/** BkTimelineItem */
export default defineComponent({
  name: 'BkTimelineItem',
  props: {
    title: { type: String, default: null },
    text: { type: String, default: null },
    time: { type: String, default: null },
    color: { type: String, default: 'primary' },
  },
  setup(props, { attrs, slots }) {
    return () => h('div', { class: ['bk-timeline-item', attrs.class] }, [
      h('span', { class: 'bk-timeline-dot ' + props.color }),
      props.title ? h('div', { class: 'bk-timeline-title' }, props.title) : null,
      props.text ? h('div', { class: 'bk-timeline-text' }, props.text) : null,
      slots.default ? slots.default() : null,
      props.time
        ? h('div', { class: 'bk-timeline-time' }, [h(BkIcon, { name: 'clock' }), props.time])
        : null,
    ]);
  },
});
