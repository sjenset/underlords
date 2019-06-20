import { EntityState } from '@ngrx/entity';

import { HeroAdapter } from '../hero/state/hero.adapter';
import { Hero } from '@app/hero/state/hero.model';
import { Alliance } from '@app/alliances/state/alliances.model';
import { AllianceAdapter } from '@app/alliances/state/alliances.adapter';

// tslint:disable-next-line:no-empty-interface
export interface AppState {}

export const InitialAppState: AppState = {};

export interface HeroFeatureState extends EntityState<Hero> { }

export interface AllianceFeatureState extends EntityState<Alliance> { }

export const InitialHeroFeatureState: HeroFeatureState = HeroAdapter.getInitialState({});

export const InitialAllianceFeatureState: AllianceFeatureState = AllianceAdapter.getInitialState({});
