import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Hero } from '_app/hero/state/hero.model';
import { Alliance } from './alliances.model';


export enum AlliancesActionTypes {
  Load = '[Alliances] Load',
  AddForHero = '[Alliances] Add for Hero',
  RemoveForHero = '[Alliances] Remove for Hero',
  UpdateAlliance = '[Alliances] Update Alliance',
}

export class Load implements Action {
  readonly type = AlliancesActionTypes.Load;

  constructor(public payload: { alliances: Alliance[] }) { }
}

export class AddForHero implements Action {
  readonly type = AlliancesActionTypes.AddForHero;

  constructor(public payload: { hero: Hero }) { }
}

export class RemoveForHero implements Action {
  readonly type = AlliancesActionTypes.RemoveForHero;

  constructor(public payload: { hero: Hero }) { }
}

export class UpdateAlliance implements Action {
  readonly type = AlliancesActionTypes.UpdateAlliance;

  constructor(public payload: { alliance: Update<Alliance> }) { }
}


export type AlliancesActions =
  Load |
  AddForHero |
  RemoveForHero |
  UpdateAlliance;
