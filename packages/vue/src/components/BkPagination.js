import { defineComponent, h } from 'vue';
import BkIcon from './BkIcon.js';

function pageList(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const res = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) res.push('…');
  for (let p = start; p <= end; p++) res.push(p);
  if (end < total - 1) res.push('…');
  res.push(total);
  return res;
}

/** BkPagination — page (1-based), pages (total halaman) */
export default defineComponent({
  name: 'BkPagination',
  props: {
    page: { type: Number, default: 1 },
    pages: { type: Number, default: 1 },
  },
  emits: ['update:page'],
  setup(props, { attrs, emit }) {
    return () => {
      const go = (p) => {
        if (p >= 1 && p <= props.pages && p !== props.page) emit('update:page', p);
      };
      return h('div', { ...attrs, class: ['bk-pagination', attrs.class] }, [
        h('button', {
          type: 'button',
          class: ['bk-page', props.page <= 1 ? 'is-disabled' : ''],
          'aria-label': 'Sebelumnya',
          onClick: () => go(props.page - 1),
        }, [h(BkIcon, { name: 'chevron-left' })]),
        ...pageList(props.page, props.pages).map((p) => p === '…'
          ? h('span', { class: 'bk-muted bk-fs-xs' }, '…')
          : h('button', {
              type: 'button',
              class: ['bk-page', p === props.page ? 'is-active' : ''],
              onClick: () => go(p),
            }, String(p))),
        h('button', {
          type: 'button',
          class: ['bk-page', props.page >= props.pages ? 'is-disabled' : ''],
          'aria-label': 'Berikutnya',
          onClick: () => go(props.page + 1),
        }, [h(BkIcon, { name: 'chevron-right' })]),
      ]);
    };
  },
});
