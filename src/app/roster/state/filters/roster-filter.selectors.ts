import { Hero } from '@app/hero/hero.model';
import { createSelector } from '@ngrx/store';
import { selectAll } from '../roster.selectors';
import { FilterValue } from './roster-filter.types';

// export const filterHeroes = createSelector(
//     selectAll,
//     (heroes: Hero[], state: RosterState) => state.activeFilters ? filterFn(heroes, state.activeFilters) : heroes
//   );

export const filterHeroes2 = createSelector(
    selectAll,
    (heroes: Hero[], filters: FilterValue[]) => filterFn(heroes, filters)
);

function filterFn(heroes: Hero[], filters: FilterValue[]) {
    // return heroes.filter(hero =>
      // filters.some( (filter) =>
        // tslint:disable-next-line:triple-equals
        // hero[filter.filterType] == filter.value));
}

// Sorting methods
function sortByName(a, b) {

}

