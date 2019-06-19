import { AppAdapter } from '@app/state/app.adapter';
import { FeatureState, InitialFeatureState, AppState } from '@app/state/app.state';
import { LineupActions, LineupActionTypes } from './lineup.actions';

export function HeroReducer(state: FeatureState = InitialFeatureState, action: LineupActions): AppState {
  switch (action.type) {
    case LineupActionTypes.AddHero: {
      return AppAdapter.addOne(action.payload.hero, state);
    }
    case LineupActionTypes.RemoveHero: {
      return AppAdapter.removeOne(action.payload.name, state);
    }
    default: {
      return state;
    }
  }
}
