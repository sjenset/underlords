import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroAdapter, sortHeroes, SortOptions } from '_app/hero/state';
import { Hero } from '_app/hero/state/hero.model';
import { HeroFeatureState } from '_app/state/';
import { FilterValue } from './filters';
import * as RosterFilterSelectors from './filters/roster-filter.selectors';


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

export const filterHeroes2 = createSelector(
  selectAll,
  RosterFilterSelectors.selectAll,
  (heroes: Hero[], filters: FilterValue[]) => filterFn(heroes, filters)
);

// function filterFn(heroes: Hero[], filters: FilterValue[]) {
//   return heroes.filter(hero =>
//     filters.some( ({ filterType, values: filterValues}) =>
//       // tslint:disable-next-line:triple-equals
// tslint:disable-next-line:max-line-length
//        hero[filterType] == filterType ? filterValues.some((filterValue: boolean, index) => filterValue ?  hero[filterType] == hero[filterType]) : false ));
// }

function filterFn(heroes: Hero[], filters: FilterValue[]) {
  return filters.length === 0 ? heroes
  : heroes.filter(hero =>
    filters.some( ({ filterType, values: filterValues}) =>
      // tslint:disable-next-line:triple-equals
      hero[filterType] ? filterValues.some(filterValue => hero[filterType] == filterValue ) : false
    )
  );
}
