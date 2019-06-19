import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Hero } from '@app/hero/hero.model';
import { AppAdapter } from '@app/state/app.adapter';
import { AppState, AppSorter } from '@app/state';

const getRosterFeatureState = createFeatureSelector<AppState.FeatureState>('roster');

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = AppAdapter.getSelectors(getRosterFeatureState);

export const selectHeroes = createSelector(
  selectAll,
  (heroes: Hero[], props: AppSorter.SortOptions) => heroes.sort(AppSorter.SortHeroes(props))
);
