import { FilterValue } from '../../roster/state/filters/roster-filter.types';

export const DefaultFilters: FilterValue[] = [
    {
        filterType: 'tiers',
        values: Array(5).fill(false)
    }
];
