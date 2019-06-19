import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Hero } from '@app/hero/hero.model';
import { AppAdapter } from '@app/state/app.adapter';
import { AppState, AppSorter } from '@app/state';

const getLineupFeatureState = createFeatureSelector<AppState.FeatureState>('lineup');

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = AppAdapter.getSelectors(getLineupFeatureState);

export const selectHeroes = createSelector(
  selectAll,
  (heroes: Hero[], props: AppSorter.SortOptions) => heroes.sort(AppSorter.SortHeroes(props))
);

export const isSelected = createSelector(
  selectAll,
  (heroes: Hero[], heroName: string) => heroes.filter(hero => hero.name === heroName).length > 0
)
