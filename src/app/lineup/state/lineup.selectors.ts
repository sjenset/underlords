import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Hero } from '@app/hero/hero.model';
import { AppAdapter } from '@app/state/app.adapter';
import { FeatureState, SortOptions, sortHeroes } from '@app/state';

const getLineupFeatureState = createFeatureSelector<FeatureState>('lineup');

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = AppAdapter.getSelectors(getLineupFeatureState);

export const selectHeroes = createSelector(
  selectAll,
  (heroes: Hero[], props: SortOptions) => heroes.sort(sortHeroes(props))
);

export const isInLineup = createSelector(
  selectAll,
  (heroes: Hero[], heroName: string) => heroes.filter(hero => hero.name === heroName).length > 0
);
