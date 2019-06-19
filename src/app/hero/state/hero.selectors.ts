import { createSelector, createFeatureSelector } from '@ngrx/store';

import { HeroAdapter } from './hero.adapter';
import { HeroStates, HeroModels } from '.';
import { Dictionary } from '@ngrx/entity';

export const getHeroFeatureState = createFeatureSelector<HeroStates.HeroState>('hero');

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = HeroAdapter.getSelectors(getHeroFeatureState);

export enum SortFacets {
  TIER = 'tier',
  NAME = 'name',
  RACE = 'race',
  ROLE = 'role'
}

export enum SortOrders {
  ASC = 1,
  DESC = -1
}

export interface SortOptions {
  facets: SortFacets[];
  order: SortOrders;
}

const heroSorter = (options: SortOptions) => {
  return (a: HeroModels.Hero, b: HeroModels.Hero) => {
    return options.facets.map((facet: string) => {
      return a[facet] > b[facet] ? options.order : a[facet] < b[facet] ? -(options.order) : 0;
    }).reduce(
      (aResult: number, bResult: number) => {
        return aResult ? aResult : bResult;
      }, 0);
  };
};

export const selectRoster = createSelector(
  selectAll,
  (heroes: HeroModels.Hero[], props: SortOptions) => heroes.sort(heroSorter(props))
);

export const selectLineup = createSelector(
  selectAll,
  (heroes: HeroModels.Hero[], props: SortOptions) => heroes.filter(hero => hero.inLineup).sort(heroSorter(props))
);

export const isInLineup = createSelector(
  selectEntities,
  (entities: Dictionary<HeroModels.Hero>, props: { id: number }) => entities[props.id].inLineup
);
