import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AddForHero, RemoveForHero } from '_app/alliances/state';
import { AddHero, LineupActionTypes, RemoveHero } from './lineup.actions';


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
