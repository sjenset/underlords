import { FilterValue } from './roster-filter.types';
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export enum RosterFilterActionTypes {
    RosterFilterUpdate = '[RosterFilter] Update filter'
}

export class RosterFilterUpdateAction implements Action {
    readonly type = RosterFilterActionTypes.RosterFilterUpdate;

    constructor(public payload: { filter: Update<FilterValue> }) { }
}

export type RosterFilterActions = RosterFilterUpdateAction;
