import { Action } from '@ngrx/store';

import { Hero } from '@shared/data/heroes';

export enum HeroesActionTypes {
  GetHeroes = '[Heroes] GetHeroes initialized',
  GetHeroesSuccess = '[Heroes] GetHeroes succeeded',
  GetHeroesFail = '[Heroes] GetHeroes failed',
  ModifiyLineup = '[Heroes] ModifiyLineup initialized'
}

export class GetHeroes implements Action {
  readonly type = HeroesActionTypes.GetHeroes;
}

export class GetHeroesSuccess implements Action {
  readonly type = HeroesActionTypes.GetHeroesSuccess;

  constructor(public payload: Hero[]) { }
}

export class GetHeroesFail implements Action {
  readonly type = HeroesActionTypes.GetHeroesFail;

  constructor(public payload: string) { }
}

export class ModifiyLineup implements Action {
  readonly type = HeroesActionTypes.ModifiyLineup;

  constructor(public payload: { hero: Hero, removeFromLineup: boolean }) { }
}


export type HeroesActions =
  GetHeroes |
  GetHeroesSuccess |
  GetHeroesFail |
  ModifiyLineup;
