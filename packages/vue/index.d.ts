import type { DefineComponent, Plugin } from 'vue';

export interface BkIconProps { name: string; }
export interface BkButtonProps { type?: string; size?: 'xs' | 'sm' | 'lg' | 'xl' | null; icon?: string | null; href?: string | null; block?: boolean; }
export interface BkBadgeProps { type?: string; soft?: boolean; dot?: boolean; }
export interface BkAlertProps { type?: 'info' | 'success' | 'warning' | 'danger' | 'primary'; title?: string | null; dismissible?: boolean; }
export interface BkCardProps { title?: string | null; subtitle?: string | null; footer?: string | null; }
export interface BkFieldProps { label?: string | null; hint?: string | null; error?: string | null; required?: boolean; forId?: string | null; }
export interface BkInputProps { modelValue?: string | number; type?: string; placeholder?: string | null; icon?: string | null; size?: string | null; invalid?: boolean; valid?: boolean; disabled?: boolean; password?: boolean; }
export interface BkTextareaProps { modelValue?: string; placeholder?: string | null; rows?: number | string; invalid?: boolean; valid?: boolean; disabled?: boolean; }
export interface BkSelectProps { modelValue?: string | number; options?: Array<string | { value: string | number; label: string }> | null; placeholder?: string | null; size?: string | null; disabled?: boolean; }
export interface BkSelectSearchProps { modelValue?: string | number; options?: Array<{ value: string | number; label: string }>; placeholder?: string; disabled?: boolean; }
export interface BkCheckboxProps { modelValue?: boolean; label?: string | null; color?: string | null; disabled?: boolean; }
export interface BkRadioProps { modelValue?: string | number | boolean | null; value: string | number | boolean; name?: string | null; label?: string | null; disabled?: boolean; }
export interface BkSwitchProps { modelValue?: boolean; label?: string | null; success?: boolean; disabled?: boolean; }
export interface BkAvatarProps { label?: string | null; color?: string | null; size?: string | null; square?: boolean; status?: string | null; }
export interface BkChipProps { type?: string | null; removable?: boolean; }
export interface BkProgressProps { value?: number; color?: 'success' | 'info' | 'warning' | 'danger' | 'gradient' | null; size?: 'sm' | 'lg' | null; striped?: boolean; label?: string | null; showValue?: boolean; }
export interface BkSpinnerProps { size?: 'sm' | 'lg' | null; light?: boolean; primary?: boolean; }
export interface BkSkeletonProps { variant?: 'text' | 'title' | 'avatar'; width?: string | null; }
export interface BkEmptyProps { icon?: string; title?: string; text?: string | null; }
export interface BkListProps {}
export interface BkListItemProps { icon?: string | null; title?: string | null; sub?: string | null; hover?: boolean; }
export interface BkTimelineProps {}
export interface BkTimelineItemProps { title?: string | null; text?: string | null; time?: string | null; color?: 'primary' | 'success' | 'info' | 'warning'; }
export interface BkStatCardProps { label: string; value?: string | number; delta?: string | null; deltaUp?: boolean; icon?: string | null; color?: string; foot?: string | null; }
export interface BkStepsProps { items?: string[]; active?: number; }
export interface BkBreadcrumbProps { items?: Array<{ label: string; href?: string }>; home?: boolean; }
export interface BkTabsProps { modelValue?: string | number | null; tabs?: Array<{ key: string | number; label: string; icon?: string }>; pill?: boolean; }
export interface BkPaginationProps { page?: number; pages?: number; }
export interface BkModalProps { modelValue?: boolean; title?: string | null; size?: 'sm' | 'lg' | null; closeOnBackdrop?: boolean; }
export interface BkDrawerProps { modelValue?: boolean; title?: string | null; side?: 'left' | 'right'; }
export interface BkDropdownProps { alignStart?: boolean; }
export interface BkDropdownItemProps { icon?: string | null; danger?: boolean; }
export interface BkTooltipProps { text: string; position?: 'top' | 'bottom' | 'left' | 'right' | null; }
export interface BkAccordionProps { modelValue?: Array<string | number>; single?: boolean; }
export interface BkAccordionItemProps { name: string | number; title?: string | null; icon?: string | null; }
export interface BkOtpProps { modelValue?: string; length?: number; }

export declare const BkIcon: DefineComponent<BkIconProps>;
export declare const BkButton: DefineComponent<BkButtonProps>;
export declare const BkBadge: DefineComponent<BkBadgeProps>;
export declare const BkAlert: DefineComponent<BkAlertProps>;
export declare const BkCard: DefineComponent<BkCardProps>;
export declare const BkField: DefineComponent<BkFieldProps>;
export declare const BkInput: DefineComponent<BkInputProps>;
export declare const BkTextarea: DefineComponent<BkTextareaProps>;
export declare const BkSelect: DefineComponent<BkSelectProps>;
export declare const BkSelectSearch: DefineComponent<BkSelectSearchProps>;
export declare const BkCheckbox: DefineComponent<BkCheckboxProps>;
export declare const BkRadio: DefineComponent<BkRadioProps>;
export declare const BkSwitch: DefineComponent<BkSwitchProps>;
export declare const BkAvatar: DefineComponent<BkAvatarProps>;
export declare const BkChip: DefineComponent<BkChipProps>;
export declare const BkProgress: DefineComponent<BkProgressProps>;
export declare const BkSpinner: DefineComponent<BkSpinnerProps>;
export declare const BkSkeleton: DefineComponent<BkSkeletonProps>;
export declare const BkEmpty: DefineComponent<BkEmptyProps>;
export declare const BkList: DefineComponent<BkListProps>;
export declare const BkListItem: DefineComponent<BkListItemProps>;
export declare const BkTimeline: DefineComponent<BkTimelineProps>;
export declare const BkTimelineItem: DefineComponent<BkTimelineItemProps>;
export declare const BkStatCard: DefineComponent<BkStatCardProps>;
export declare const BkSteps: DefineComponent<BkStepsProps>;
export declare const BkBreadcrumb: DefineComponent<BkBreadcrumbProps>;
export declare const BkTabs: DefineComponent<BkTabsProps>;
export declare const BkPagination: DefineComponent<BkPaginationProps>;
export declare const BkModal: DefineComponent<BkModalProps>;
export declare const BkDrawer: DefineComponent<BkDrawerProps>;
export declare const BkDropdown: DefineComponent<BkDropdownProps>;
export declare const BkDropdownItem: DefineComponent<BkDropdownItemProps>;
export declare const BkTooltip: DefineComponent<BkTooltipProps>;
export declare const BkAccordion: DefineComponent<BkAccordionProps>;
export declare const BkAccordionItem: DefineComponent<BkAccordionItemProps>;
export declare const BkOtp: DefineComponent<BkOtpProps>;

export declare const icons: Record<string, string>;
export declare function icon(name: string, className?: string): string;

declare const BkUiKit: Plugin;
export default BkUiKit;
