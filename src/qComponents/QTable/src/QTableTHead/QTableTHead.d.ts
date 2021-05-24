import type { ComputedRef } from 'vue';

import type { QTablePropSortBy } from '../QTable';
import type { ExtendedColumn } from '../QTableContainer/QTableContainer';

export interface QTableTHeadInstance {
  isSelectable: Nullable<ComputedRef<boolean>>;
  isCheckable: ComputedRef<boolean>;
  isChecked: ComputedRef<boolean>;
  isIndeterminate: ComputedRef<boolean>;
  columnList: ComputedRef<ExtendedColumn[]>;
  sortBy: ComputedRef<Nullable<QTablePropSortBy>>;

  handleCheckboxChange: () => void;
}