import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FilterValue } from './roster-filter.types';

export const RosterFilterAdapter: EntityAdapter<FilterValue> = createEntityAdapter<FilterValue>({
    selectId: filter => `${filter.filterType}-${filter.value}`
});
