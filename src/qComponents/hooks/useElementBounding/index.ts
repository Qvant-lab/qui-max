import { ref } from 'vue';

import { useResizeObserver } from '@/qComponents/hooks';
import { unrefElement } from '@/qComponents/hooks/helpers';
import { MaybeElementRef } from '@/qComponents/hooks/types';

import { UseElementBoundingResult } from './types';

export function useElementBounding(
  target: MaybeElementRef
): UseElementBoundingResult {
  const height = ref(0);
  const bottom = ref(0);
  const left = ref(0);
  const right = ref(0);
  const top = ref(0);
  const width = ref(0);
  const x = ref(0);
  const y = ref(0);

  const update = (): void => {
    const el = unrefElement(target);

    if (!el) {
      height.value = 0;
      bottom.value = 0;
      left.value = 0;
      right.value = 0;
      top.value = 0;
      width.value = 0;
      x.value = 0;
      y.value = 0;
      return;
    }

    const rect = el.getBoundingClientRect();

    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  };

  useResizeObserver(target, update);

  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}

export type UseElementBoundingReturn = ReturnType<typeof useElementBounding>;
