import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HeroReducer } from './state/lineup.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LineupEffects } from './state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('lineup', HeroReducer),
    EffectsModule.forFeature([LineupEffects])
  ]
})
export class LineupModule { }
