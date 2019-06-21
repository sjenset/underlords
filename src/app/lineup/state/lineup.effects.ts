import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { LineupActionTypes, AddHero, RemoveHero } from './lineup.actions';
import { AddForHero, RemoveForHero } from '@app/alliances/state';

@Injectable()
export class LineupEffects {
  constructor(private actions$: Actions) { }

  @Effect()
  addHero$: Observable<Action> = this.actions$.pipe(
    ofType(LineupActionTypes.AddHero),
    switchMap((action: AddHero) => {
      return of(new AddForHero({ hero: action.payload.hero }));
    })
  );

  @Effect()
  removeHero$: Observable<Action> = this.actions$.pipe(
    ofType(LineupActionTypes.RemoveHero),
    switchMap((action: RemoveHero) => {
      return of(new RemoveForHero({ hero: action.payload.hero }));
    })
  );
}
