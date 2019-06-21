import { HeroFeatureState, InitialHeroFeatureState, AppState } from '@app/state/app.state';
import { LineupActions, LineupActionTypes } from './lineup.actions';
import { HeroAdapter } from '@app/hero/state';

export function HeroReducer(state: HeroFeatureState = InitialHeroFeatureState, action: LineupActions): AppState {
  switch (action.type) {
    case LineupActionTypes.AddHero: {
      return HeroAdapter.addOne(action.payload.hero, state);
    }
    case LineupActionTypes.RemoveHero: {
      return HeroAdapter.removeOne(action.payload.hero.name, state);
    }
    default: {
      return state;
    }
  }
}
