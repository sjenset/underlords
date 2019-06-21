import { HeroAdapter } from '_app/hero/state';
import { HeroFeatureState, InitialHeroFeatureState } from '_app/state/app.state';
import { RosterActions, RosterActionTypes } from './roster.actions';

export function RosterReducer(state: HeroFeatureState = InitialHeroFeatureState, action: RosterActions): HeroFeatureState {
  switch (action.type) {
    case RosterActionTypes.LoadHeroes: {
      return HeroAdapter.addAll(action.payload.heroes, state);
    }
    default: {
      return state;
    }
  }
}
