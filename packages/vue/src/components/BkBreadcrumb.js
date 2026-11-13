import { defineComponent, h } from 'vue';
import BkIcon from './BkIcon.js';

/** BkBreadcrumb — items: [{ label, href }] */
export default defineComponent({
  name: 'BkBreadcrumb',
  props: {
    items: { type: Array, default: () => [] },
    home: { type: Boolean, default: true },
  },
  setup(props, { attrs }) {
    return () => {
      const children = [];
      props.items.forEach((item, i) => {
        if (i > 0) children.push(h('span', { class: 'sep' }, '/'));
        const last = i === props.items.length - 1;
        if (last) {
          children.push(h('span', { class: 'current' }, item.label));
        } else {
          children.push(h('a', { href: item.href || '#' }, [
            i === 0 && props.home ? h(BkIcon, { name: 'home' }) : null,
            item.label,
          ]));
        }
      });
      return h('nav', { ...attrs, class: ['bk-breadcrumb', attrs.class], 'aria-label': 'Breadcrumb' }, children);
    };
  },
});
