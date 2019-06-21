import { HeroFeatureState, InitialHeroFeatureState } from '@app/state/app.state';
import { RosterActions, RosterActionTypes } from './roster.actions';
import { HeroAdapter } from '@app/hero/state';

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
