import { FilterValue } from './roster-filter.types';
import { Action, createAction, props, union } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export enum RosterFilterActionTypes {
    RosterFilterUpdate = '[RosterFilter] Update filter'
}

export class RosterFilterUpdateAction implements Action {
    readonly type = RosterFilterActionTypes.RosterFilterUpdate;

    constructor(public payload: { filter: Update<FilterValue> }) { }
}

export type RosterFilterActions = RosterFilterUpdateAction;

export const LoadFilters = createAction('[RosterFilter] Load filters');
export const LoadFiltersSuccess = createAction('[RosterFilter] Load filters success', (filters: FilterValue[]) => ({ filters }));
export const UpdateTiersSelected = createAction('[RosterFilter] Update tiers selected', props<{ tiers: Update<FilterValue> }>());

const actions = union({
    LoadFilters,
    LoadFiltersSuccess
});

export type Actions = typeof actions;
