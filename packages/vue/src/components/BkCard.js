import { defineComponent, h } from 'vue';

/**
 * BkCard
 * Props : title, subtitle, footer
 * Slot  : default (isi kartu), actions (tombol di header)
 * Contoh:
 *   <BkCard title="Profil" subtitle="Data pribadi">
 *     <template #actions><BkButton type="outline" size="sm">Ubah</BkButton></template>
 *     Isi kartu…
 *   </BkCard>
 */
export default defineComponent({
  name: 'BkCard',
  props: {
    title: { type: String, default: null },
    subtitle: { type: String, default: null },
    footer: { type: String, default: null },
  },
  setup(props, { slots, attrs }) {
    return () => {
      const hasHeader = props.title || props.subtitle || slots.actions;
      const header = hasHeader
        ? h('div', { class: 'bk-card-header' }, [
            h('div', [
              props.title ? h('div', { class: 'bk-card-title' }, props.title) : null,
              props.subtitle ? h('div', { class: 'bk-card-sub' }, props.subtitle) : null,
            ]),
            slots.actions ? h('div', { class: 'bk-flex bk-gap-2' }, slots.actions()) : null,
          ])
        : null;

      return h('div', { ...attrs, class: ['bk-card', attrs.class] }, [
        header,
        h('div', { class: 'bk-card-body' }, slots.default ? slots.default() : null),
        props.footer ? h('div', { class: 'bk-card-footer' }, props.footer) : null,
      ]);
    };
  },
});
