import { HeroActions, HeroActionTypes } from './hero.actions';
import { InitialHeroState, HeroState } from './hero.state';
import { HeroAdapter } from './hero.adapter';


export function HeroReducer(state: HeroState = InitialHeroState, action: HeroActions): HeroState {
  switch (action.type) {
    case HeroActionTypes.LoadHeroes: {
      return HeroAdapter.addAll(action.payload.heroes, state);
    }
    case HeroActionTypes.UpdateHero: {
      return HeroAdapter.updateOne(action.payload.hero, state);
    }
    default: {
      return state;
    }
  }
}
