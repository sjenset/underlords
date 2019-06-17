import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { HeroesState } from './heroes.state';
import { Hero } from '@app/shared/data/heroes';

const getHeroesFeatureState = createFeatureSelector<HeroesState>('heroes');

export const getHeroes = createSelector(
  getHeroesFeatureState,
  (state: HeroesState) => state.heroes
);

export const getLineup = createSelector(
  getHeroesFeatureState,
  (state: HeroesState) => state.lineup
);

export const isInLineup = createSelector(
  getLineup,
  (lineup: Hero[], selectedHero: Hero) => {
    return lineup.filter(hero => hero.name === selectedHero.name).length > 0;
  }
);
