import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { heroesReducer } from './state/heroes.reducers';
import { HeroesEffects } from './state/heroes.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('heroes', heroesReducer),
    EffectsModule.forFeature([HeroesEffects])
  ]
})
export class HeroesModule { }
