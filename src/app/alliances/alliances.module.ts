import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { alliancesReducer } from './state/alliances.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AlliancesEffects } from './state/alliances.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('alliances', alliancesReducer),
    EffectsModule.forFeature([AlliancesEffects])
  ]
})
export class AlliancesModule { }
