import { Hero } from './hero.model';

export * from './hero.adapter';
export * from './hero.model';

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

export const sortHeroes = (options: SortOptions) => {
  return (a: Hero, b: Hero) => {
    return options.facets.map((facet: string) => {
      return a[facet] > b[facet] ? options.order : a[facet] < b[facet] ? -(options.order) : 0;
    }).reduce(
      (aResult: number, bResult: number) => {
        return aResult ? aResult : bResult;
      }, 0);
  };
};
