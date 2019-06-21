import { RosterFilterActions, RosterFilterActionTypes, UpdateTiersSelected, LoadFiltersSuccess } from './roster-filter.actions';
import { RosterFilterAdapter } from './roster-filter.adapter';
import { IntialRosterFilterFeatureState, RosterFilterFeatureState } from './roster-filter.state';
import { createReducer, on } from '@ngrx/store';


export function RosterFilterReducer(
    state: RosterFilterFeatureState = IntialRosterFilterFeatureState,
    action: RosterFilterActions
    ): RosterFilterFeatureState {
    switch (action.type) {
      case RosterFilterActionTypes.RosterFilterUpdate: {
        // return RosterFilterAdapter.upsertOne(action.payload.filter, state);
        // return RosterFilterAdapter.updateOne()
        return null;
      }
      default: {
        return state;
      }
    }
  }

//   const userReducer = createReducer(

const rosterFilterReducer = createReducer(
  IntialRosterFilterFeatureState,
  // on(RosterFilterUpdateAction, (state: RosterFilterFeatureState, {  }))
  // on(UpdateTiersSelected, (state: RosterFilterFeatureState, { tiers } ) => RosterFilterAdapter.updateOne(tiers, state))
  on(UpdateTiersSelected, (state: RosterFilterFeatureState, { tiers } ) => 
  RosterFilterAdapter.updateOne(tiers, state)),
  on(LoadFiltersSuccess, (state: RosterFilterFeatureState, { filters }) => RosterFilterAdapter.addMany(filters, state))
);

export function _RosterFilterReducer(state: RosterFilterFeatureState | undefined, action: RosterFilterActions) {
  return rosterFilterReducer(state, action);
}
