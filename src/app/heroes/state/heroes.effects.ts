import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { HeroesActions } from '.';
import { DataService } from '@shared/data.service';

@Injectable()
export class HeroesEffects {
  constructor(private dataService: DataService, private actions$: Actions) { }

  @Effect()
  getHeroes$: Observable<Action> = this.actions$.pipe(
    ofType(HeroesActions.HeroesActionTypes.GetHeroes),
    switchMap(() => {
      const heroes = this.dataService.getHeroes();
      return of(new HeroesActions.GetHeroesSuccess(heroes));
    })
  );
}
