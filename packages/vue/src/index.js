import BkButton from './components/BkButton.js';
import BkBadge from './components/BkBadge.js';
import BkAlert from './components/BkAlert.js';
import BkCard from './components/BkCard.js';
import BkIcon from './components/BkIcon.js';
import BkField from './components/BkField.js';
import BkInput from './components/BkInput.js';
import BkTextarea from './components/BkTextarea.js';
import BkSelect from './components/BkSelect.js';
import BkSelectSearch from './components/BkSelectSearch.js';
import BkCheckbox from './components/BkCheckbox.js';
import BkRadio from './components/BkRadio.js';
import BkSwitch from './components/BkSwitch.js';
import BkAvatar from './components/BkAvatar.js';
import BkChip from './components/BkChip.js';
import BkProgress from './components/BkProgress.js';
import BkSpinner from './components/BkSpinner.js';
import BkSkeleton from './components/BkSkeleton.js';
import BkEmpty from './components/BkEmpty.js';
import BkList from './components/BkList.js';
import BkListItem from './components/BkListItem.js';
import BkTimeline from './components/BkTimeline.js';
import BkTimelineItem from './components/BkTimelineItem.js';
import BkStatCard from './components/BkStatCard.js';
import BkSteps from './components/BkSteps.js';
import BkBreadcrumb from './components/BkBreadcrumb.js';
import BkTabs from './components/BkTabs.js';
import BkPagination from './components/BkPagination.js';
import BkModal from './components/BkModal.js';
import BkDrawer from './components/BkDrawer.js';
import BkDropdown from './components/BkDropdown.js';
import BkDropdownItem from './components/BkDropdownItem.js';
import BkTooltip from './components/BkTooltip.js';
import BkAccordion from './components/BkAccordion.js';
import BkAccordionItem from './components/BkAccordionItem.js';
import BkOtp from './components/BkOtp.js';
import BkChart from './components/BkChart.js';

export { icons, icon } from '@bkpsdm/ui-kit';

const components = {
  BkButton,
  BkBadge,
  BkAlert,
  BkCard,
  BkIcon,
  BkField,
  BkInput,
  BkTextarea,
  BkSelect,
  BkSelectSearch,
  BkCheckbox,
  BkRadio,
  BkSwitch,
  BkAvatar,
  BkChip,
  BkProgress,
  BkSpinner,
  BkSkeleton,
  BkEmpty,
  BkList,
  BkListItem,
  BkTimeline,
  BkTimelineItem,
  BkStatCard,
  BkSteps,
  BkBreadcrumb,
  BkTabs,
  BkPagination,
  BkModal,
  BkDrawer,
  BkDropdown,
  BkDropdownItem,
  BkTooltip,
  BkAccordion,
  BkAccordionItem,
  BkOtp,
  BkChart,
};

/**
 * Plugin Vue — daftarkan semua komponen sekaligus:
 *
 *   import BkUiKit from '@bkpsdm/ui-kit-vue'
 *   app.use(BkUiKit)
 */
const BkUiKit = {
  install(app) {
    Object.entries(components).forEach(([name, comp]) => {
      app.component(name, comp);
    });
  },
};

export {
  BkButton,
  BkBadge,
  BkAlert,
  BkCard,
  BkIcon,
  BkField,
  BkInput,
  BkTextarea,
  BkSelect,
  BkSelectSearch,
  BkCheckbox,
  BkRadio,
  BkSwitch,
  BkAvatar,
  BkChip,
  BkProgress,
  BkSpinner,
  BkSkeleton,
  BkEmpty,
  BkList,
  BkListItem,
  BkTimeline,
  BkTimelineItem,
  BkStatCard,
  BkSteps,
  BkBreadcrumb,
  BkTabs,
  BkPagination,
  BkModal,
  BkDrawer,
  BkDropdown,
  BkDropdownItem,
  BkTooltip,
  BkAccordion,
  BkAccordionItem,
  BkOtp,
  BkChart,
};

export default BkUiKit;
