type RangeState = {
  hoveredDate: Nullable<Date>;
  pickedDate: Nullable<Date>;
  selecting: boolean;
};

type RangePickValue = {
  minDate: Nullable<Date>;
  maxDate: Nullable<Date>;
  rangeState: RangeState;
};

interface DateCellModel {
  row: number;
  column: number;
  type: string;
  inRange: boolean;
  start: boolean;
  end: boolean;
  text: number | string;
  date: Nullable<Date>;
  disabled: boolean;
}

type TablePropSelectionMode = 'day' | 'week' | 'month' | 'year' | 'range';

interface TableProps {
  year: number;
  month: number;
  value: Date;
  minDate: Nullable<Date>;
  maxDate: Nullable<Date>;
  selectionMode: TablePropSelectionMode;
  rangeState: RangeState;
}

export {
  RangePickValue,
  RangeState,
  DateCellModel,
  TableProps,
  TablePropSelectionMode
};
