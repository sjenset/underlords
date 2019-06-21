import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { take, tap } from 'rxjs/operators';

import { AlliancesActionTypes, UpdateAlliance, AddForHero } from './alliances.actions';
import { AllianceFeatureState } from '@app/state';
import { getByHero } from './alliances.selectors';
import { Alliance } from '.';

@Injectable()
export class AlliancesEffects {
  constructor(private actions$: Actions, private store: Store<AllianceFeatureState>) { }

  @Effect({ dispatch: false })
  updateForHero = this.actions$.pipe(
    ofType(AlliancesActionTypes.AddForHero),
    tap((action: AddForHero) => {
      this.store.pipe(
        take(1),
        select(getByHero, action.payload.hero)
      ).subscribe(alliances => {
        alliances.forEach((alliance: Alliance) => {
          const update: Update<Alliance> = {
            id: alliance.requirements,
            changes: {
              active: alliance.active + 1
            }
          };
          this.store.dispatch(new UpdateAlliance({ alliance: update }));
        });
      });
    })
  );

  @Effect({ dispatch: false })
  removeForHero = this.actions$.pipe(
    ofType(AlliancesActionTypes.RemoveForHero),
    tap((action: AddForHero) => {
      this.store.pipe(
        take(1),
        select(getByHero, action.payload.hero)
      ).subscribe(alliances => {
        alliances.forEach((alliance: Alliance) => {
          const update: Update<Alliance> = {
            id: alliance.requirements,
            changes: {
              active: Math.max(alliance.active - 1, 0)
            }
          };
          this.store.dispatch(new UpdateAlliance({ alliance: update }));
        });
      });
    })
  );
}
