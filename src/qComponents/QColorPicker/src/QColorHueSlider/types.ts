import type { Ref, ComputedRef } from 'vue';

import type { Nullable } from '#/helpers';

export interface QColorHueSliderInstance {
  root: Ref<Nullable<HTMLElement>>;
  thumb: Ref<Nullable<HTMLElement>>;
  bar: Ref<Nullable<HTMLElement>>;
  thumbStyles: ComputedRef<Record<string, string>>;
  handleBarClick: (event: MouseEvent) => void;
  update: () => void;
}
