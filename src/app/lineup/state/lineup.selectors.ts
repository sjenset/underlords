import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Hero } from '@app/hero/state/hero.model';
import { HeroFeatureState } from '@app/state/';
import { SortOptions, sortHeroes, HeroAdapter } from '@app/hero/state';

const getLineupFeatureState = createFeatureSelector<HeroFeatureState>('lineup');

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = HeroAdapter.getSelectors(getLineupFeatureState);

export const selectHeroes = createSelector(
  selectAll,
  (heroes: Hero[], props: SortOptions) => heroes.sort(sortHeroes(props))
);

export const isInLineup = createSelector(
  selectAll,
  (heroes: Hero[], heroName: string) => heroes.filter(hero => hero.name === heroName).length > 0
);
