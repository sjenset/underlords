import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { RosterReducer } from './state/roster.reducer';
import { _RosterFilterReducer } from './state/filters/roster-filter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RosterFilterEffects } from './state/filters/roster-filter.effects';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('roster', RosterReducer),
    StoreModule.forFeature('rosterFilters', _RosterFilterReducer),
    EffectsModule.forFeature([RosterFilterEffects]),
    SharedModule
  ]
})
export class RosterModule { }
