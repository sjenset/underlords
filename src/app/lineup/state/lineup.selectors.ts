import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroAdapter, sortHeroes, SortOptions } from '_app/hero/state';
import { Hero } from '_app/hero/state/hero.model';
import { HeroFeatureState } from '_app/state/';


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
