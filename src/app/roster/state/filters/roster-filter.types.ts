type SortByTypes = 'name' | 'tier';

export type FilterTypes = 'name' | 'tiers';

export interface FilterValue {
  filterType: FilterTypes;
  values: any[];
}
