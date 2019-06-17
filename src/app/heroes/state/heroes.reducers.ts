import { HeroesActions, HeroesActionTypes } from './heroes.actions';
import { HeroesState, initialState } from './heroes.state';

export function heroesReducer(state: HeroesState = initialState, action: HeroesActions): HeroesState {
  switch (action.type) {
    case HeroesActionTypes.GetHeroesSuccess:
      return {
        ...state,
        heroes: action.payload
      };
    case HeroesActionTypes.ModifiyLineup:
      if (action.payload.removeFromLineup) {
        return {
          ...state,
          lineup: state.lineup.filter(hero => hero.name !== action.payload.hero.name)
        }
      }
      return {
        ...state,
        lineup: [
          action.payload.hero,
          ...state.lineup
        ]
      }
    default:
      return state;
  }
}
