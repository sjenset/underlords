import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AllianceFeatureState } from '@app/state';
import { AllianceAdapter } from './alliances.adapter';
import { Alliance } from './alliances.model';
import { Hero } from '@app/hero/state';

const getAlliancesFeatureState = createFeatureSelector<AllianceFeatureState>('alliances');

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = AllianceAdapter.getSelectors(getAlliancesFeatureState);

export const selectAlliances = createSelector(
  selectAll,
  alliances => alliances.filter(alliance => alliance.active > 0)
);

export const getByHero = createSelector(
  selectAll,
  (alliances: Alliance[], hero: Hero) => {
    const out = [];
    alliances.filter(alliance => {
      if (hero.races.filter(
        race => race === alliance.requirements).length ||
        hero.roles.filter(role => role === alliance.requirements).length
      ) {
        out.push(alliance);
      }
    });
    return out;
  }
);
