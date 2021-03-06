import type { VNode } from 'vue';

import type { Nullable } from '#/helpers';

import type { ExtendedColumn } from '../../QTableContainer/types';

export type QTableTBodyCellPropRow = Record<string, unknown>;
export type QTableTBodyCellPropValue = Nullable<unknown>;

export interface QTableTBodyCellProps {
  row: QTableTBodyCellPropRow;
  rowIndex: number;
  column: ExtendedColumn;
  columnIndex: number;
  value: QTableTBodyCellPropValue;
}

export type QTableTBodyCellInstance = () => VNode;
