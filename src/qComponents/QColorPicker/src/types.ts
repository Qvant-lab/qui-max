import { Ref, ComputedRef } from 'vue';
import { Placement, Options } from '@popperjs/core';

// import QPickerDropdown from './QPickerDropdown.vue';

export type ColorFormat = 'hex' | 'rgb';

export interface QColorAlphaSliderProps {
  color: string;
  alpha: number;
}

export interface QColorAlphaSliderInstance {
  root: Ref<HTMLElement | null>;
  thumb: Ref<HTMLElement | null>;
  bar: Ref<HTMLElement | null>;
  barStyles: ComputedRef<Record<string, string>>;
  thumbStyles: ComputedRef<Record<string, string>>;
  handleBarClick: (event: MouseEvent) => void;
}

export interface QColorHueSliderProps {
  hue: number;
}

export interface QColorHueSliderInstance {
  root: Ref<HTMLElement | null>;
  thumb: Ref<HTMLElement | null>;
  bar: Ref<HTMLElement | null>;
  thumbStyles: ComputedRef<Record<string, string>>;
  handleBarClick: (event: MouseEvent) => void;
}

export type QColorPickerPropColorFormat = ColorFormat;
export type QColorPickerPropPlacement = Placement;
export type QColorPickerPropPopperOptions = Nullable<Partial<Options>>;
export type QColorPickerPropTeleportTo = Nullable<string | HTMLElement>;

export interface QColorPickerProps {
  modelValue: Nullable<string>;
  disabled: Nullable<boolean>;
  clearable: Nullable<boolean>;
  alphaShown: Nullable<boolean>;
  colorFormat: QColorPickerPropColorFormat;
  placement: QColorPickerPropPlacement;
  popperOptions: QColorPickerPropPopperOptions;
  teleportTo: QColorPickerPropTeleportTo;
}

export interface QColorPickerInstance {
  trigger: Ref<HTMLElement | null>;
  dropdown: Ref<QPickerDropdownInstance | null>;
  zIndex: Ref<number>;
  iconClasses: ComputedRef<Record<string, boolean>>;
  isDisabled: ComputedRef<boolean>;
  isPickerShown: Ref<boolean>;
  handleClose: () => void;
  handleTriggerClick: () => void;
  handlePick: (value: string) => void;
  handleClear: () => void;
}

export interface QColorSvpanelProps {
  hue: number;
  saturation: number;
  value: number;
}

export interface QColorSvpanelInstance {
  root: Ref<HTMLElement | null>;
  rootStyles: ComputedRef<Record<string, string>>;
  cursorStyles: ComputedRef<Record<string, string>>;
}

export type QPickerDropdownPropColorFormat = ColorFormat;

export interface QPickerDropdownProps {
  isShown: Nullable<boolean>;
  isClearBtnShown: Nullable<boolean>;
  color: Nullable<string>;
  colorFormat: QPickerDropdownPropColorFormat;
  alphaShown: Nullable<boolean>;
}

export interface QColorPickerProvider {
  trigger: Ref<HTMLElement | null>;
}

export interface QPickerDropdownInstance {
  t: (arg0: string) => string;
  dropdown: Ref<HTMLElement | null>;
  saturation: Ref<number>;
  value: Ref<number>;
  hue: Ref<number>;
  alpha: Ref<number>;
  tempColor: Ref<string>;
  rgbString: ComputedRef<string>;
  updateHSVA: (newValue: string) => void;
  closeDropdown: (e: KeyboardEvent | MouseEvent) => void;
  handleClearBtnClick: () => void;
  handleConfirmBtnClick: () => void;
}
