import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Hero } from '@app/hero/state/hero.model';
import { HeroFeatureState } from '@app/state/';
import { SortOptions, sortHeroes, HeroAdapter } from '@app/hero/state';

const getRosterFeatureState = createFeatureSelector<HeroFeatureState>('roster');

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = HeroAdapter.getSelectors(getRosterFeatureState);

export const selectHeroes = createSelector(
  selectAll,
  (heroes: Hero[], props: SortOptions) => heroes.sort(sortHeroes(props))
);
