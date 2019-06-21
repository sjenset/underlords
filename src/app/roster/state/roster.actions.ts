import { Action } from '@ngrx/store';

import { Hero } from '_app/hero/state/hero.model';

export enum RosterActionTypes {
  LoadHeroes = '[Roster] Load Heroes'
}

export class LoadHeroes implements Action {
  readonly type = RosterActionTypes.LoadHeroes;

  constructor(public payload: { heroes: Hero[] }) { }
}

export type RosterActions = LoadHeroes;
