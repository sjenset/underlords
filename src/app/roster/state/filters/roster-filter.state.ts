import { EntityState } from '@ngrx/entity';
import { RosterFilterAdapter } from './roster-filter.adapter';
import { FilterValue } from './roster-filter.types';

export interface RosterFilterFeatureState extends EntityState<FilterValue> {
    // additional entities state properties
}

export const IntialRosterFilterFeatureState = RosterFilterAdapter.getInitialState();
