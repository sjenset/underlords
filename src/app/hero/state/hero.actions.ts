import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { HeroModels } from '.';

export enum HeroActionTypes {
  LoadHeroes = '[Hero] Load Heroes',
  UpdateHero = '[Hero] Update Hero'
}

export class LoadHeroes implements Action {
  readonly type = HeroActionTypes.LoadHeroes;

  constructor(public payload: { heroes: HeroModels.Hero[] }) { }
}

export class UpdateHero implements Action {
  readonly type = HeroActionTypes.UpdateHero;

  constructor(public payload: { hero: Update<HeroModels.Hero> }) { }
}

export type HeroActions =
  LoadHeroes |
  UpdateHero;
