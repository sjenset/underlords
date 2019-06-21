import { HeroAdapter } from '_app/hero/state';
import { AppState, HeroFeatureState, InitialHeroFeatureState } from '_app/state/app.state';
import { LineupActions, LineupActionTypes } from './lineup.actions';

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
