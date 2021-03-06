import { Action } from '@ngrx/store';
import { Hero } from '_app/hero/state/hero.model';


export enum LineupActionTypes {
  AddHero = '[Lineup] Add Hero',
  RemoveHero = '[Lineup] Remove Hero'
}

export class AddHero implements Action {
  readonly type = LineupActionTypes.AddHero;

  constructor(public payload: { hero: Hero }) { }
}

export class RemoveHero implements Action {
  readonly type = LineupActionTypes.RemoveHero;

  constructor(public payload: { hero: Hero }) { }
}

export type LineupActions =
  AddHero |
  RemoveHero;
