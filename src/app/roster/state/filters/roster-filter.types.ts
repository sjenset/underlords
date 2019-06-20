type SortByTypes = 'name' | 'tier';

type FilterTypes = 'name' | 'tier';

export interface FilterValue {
  filterType: FilterTypes;
  values: string[];
}
