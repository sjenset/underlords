type SortByTypes = 'name' | 'tier';

export type FilterType = 'name' | 'tier';

export interface FilterValue {
  filterType: FilterType;
  values: any[];
}
