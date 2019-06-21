import { FilterValue } from '../../roster/state/filters/roster-filter.types';

export const DefaultFilters: FilterValue[] = [
    {
        filterType: 'tier',
        // tslint:disable-next-line:variable-name
        values: Array(5).fill(1).map((_x, idx) => `${idx}`)
    }
];
