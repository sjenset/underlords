import { AppAdapter } from '@app/state/app.adapter';
import { FeatureState, InitialFeatureState } from '@app/state/app.state';
import { RosterActions, RosterActionTypes } from './roster.actions';

export function RosterReducer(state: FeatureState = InitialFeatureState, action: RosterActions): FeatureState {
  switch (action.type) {
    case RosterActionTypes.LoadHeroes: {
      return AppAdapter.addAll(action.payload.heroes, state);
    }
    default: {
      return state;
    }
  }
}
