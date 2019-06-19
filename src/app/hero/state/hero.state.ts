import { EntityState } from '@ngrx/entity';

import { AppState } from '@app/state';
import { HeroAdapter } from './hero.adapter';
import { HeroModels } from '.';

export interface HeroState extends EntityState<HeroModels.Hero> {
  // additional entities state properties
}

export interface State extends AppState.State {
  heroes: HeroState;
}

export const InitialHeroState: HeroState = HeroAdapter.getInitialState({
  // additional entity state properties
});
