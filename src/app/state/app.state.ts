import { EntityState } from '@ngrx/entity';

import { AppAdapter } from './app.adapter';
import { Hero } from '@app/hero/hero.model';

// tslint:disable-next-line:no-empty-interface
export interface AppState {}

export const InitialAppState: AppState = {};

export interface FeatureState extends EntityState<Hero> {
  // additional entities state properties
}

export const InitialFeatureState: FeatureState = AppAdapter.getInitialState({
  // additional entity state properties
});
