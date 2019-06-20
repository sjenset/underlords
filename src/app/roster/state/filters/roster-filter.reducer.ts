import { FeatureState } from '@app/state';
import { RosterFilterActions, RosterFilterActionTypes } from './roster-filter.actions';
import { RosterFilterAdapter } from './roster-filter.adapter';
import { IntialRosterFilterFeatureState, RosterFilterFeatureState } from './roster-filter.state';



export function RosterFilterReducer(
    state: RosterFilterFeatureState = IntialRosterFilterFeatureState,
    action: RosterFilterActions
    ): RosterFilterFeatureState {
    switch (action.type) {
      case RosterFilterActionTypes.RosterFilterUpdate: {
        return RosterFilterAdapter.upsertOne(action.payload.filter, state);
      }
      default: {
        return state;
      }
    }
  }

//   const userReducer = createReducer(