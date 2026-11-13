import { defineComponent, h, ref, onMounted, onBeforeUnmount } from 'vue';

/** BkDropdown — menu dropdown; slot trigger + slot default (isi menu) */
export default defineComponent({
  name: 'BkDropdown',
  props: {
    alignStart: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }) {
    const open = ref(false);
    const root = ref(null);
    const onDoc = (e) => { if (root.value && !root.value.contains(e.target)) open.value = false; };
    onMounted(() => document.addEventListener('click', onDoc));
    onBeforeUnmount(() => document.removeEventListener('click', onDoc));
    return () => h('div', { ref: root, class: ['bk-dropdown', open.value ? 'is-open' : '', attrs.class] }, [
      h('span', { class: 'bk-dropdown-trigger', onClick: (e) => { e.stopPropagation(); open.value = !open.value; } },
        slots.trigger ? slots.trigger() : null),
      h('div', { class: ['bk-dropdown-menu', props.alignStart ? 'bk-start' : ''] }, slots.default ? slots.default() : null),
    ]);
  },
});
