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

export const selectLineup = createSelector(
  selectAll,
  (heroes: HeroModels.Hero[]) => heroes.filter(hero => hero.inLineup)
);

export const selectEntityById = createSelector(
  selectEntities,
  (entities: Dictionary<HeroModels.Hero>, props: { id: number }) => entities[props.id]
);

export const isInLineup = createSelector(
  selectEntities,
  (entities: Dictionary<HeroModels.Hero>, props: { id: number}) => entities[props.id].inLineup
);
