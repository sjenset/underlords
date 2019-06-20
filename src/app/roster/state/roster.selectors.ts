import { Hero } from '@app/hero/hero.model';
import { FeatureState, sortHeroes, SortOptions } from '@app/state';
import { AppAdapter } from '@app/state/app.adapter';
import { createFeatureSelector, createSelector } from '@ngrx/store';


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
