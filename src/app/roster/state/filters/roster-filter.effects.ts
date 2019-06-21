import { Actions, Effect, ofType } from '@ngrx/effects';
import * as RosterFilterActions from '../filters/roster-filter.actions';
import { switchMap, tap } from 'rxjs/operators';
import { DataService } from '@app/shared/data.service';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RosterFilterEffects {
    constructor(
        private actions$: Actions<RosterFilterActions.Actions>,
        private dataService: DataService
        ) {}

    @Effect()
    loadDefaultFilters$ = this.actions$.pipe(
        ofType(RosterFilterActions.LoadFilters.type),
        tap(() => { console.log('loadDefaultFilters effect called'); }),
        switchMap(() => of(RosterFilterActions.LoadFiltersSuccess(this.dataService.getFilters())))
    );
}

