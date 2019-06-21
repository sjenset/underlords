import { Hero } from '@app/hero/hero.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FilterValue } from './roster-filter.types';
import { RosterFilterAdapter } from './roster-filter.adapter';
import { RosterFilterFeatureState } from './roster-filter.state';

// export const filterHeroes = createSelector(
//     selectAll,
//     (heroes: Hero[], state: RosterState) => state.activeFilters ? filterFn(heroes, state.activeFilters) : heroes
//   );

const getRosterFiltersFeatureState = createFeatureSelector<RosterFilterFeatureState>('rosterFilters');

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = RosterFilterAdapter.getSelectors(getRosterFiltersFeatureState);

// Sorting methods
function sortByName(a, b) {

}

