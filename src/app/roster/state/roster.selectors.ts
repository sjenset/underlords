import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Hero } from '@app/hero/hero.model';
import { AppAdapter } from '@app/state/app.adapter';
import { FeatureState, SortOptions, sortHeroes } from '@app/state';

const getRosterFeatureState = createFeatureSelector<FeatureState>('roster');

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = AppAdapter.getSelectors(getRosterFeatureState);

export const selectHeroes = createSelector(
  selectAll,
  (heroes: Hero[], props: SortOptions) => heroes.sort(sortHeroes(props))
);
