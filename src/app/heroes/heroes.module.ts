import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { heroesReducer } from './state/heroes.reducers';
import { HeroesEffects } from './state/heroes.effects';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('heroes', heroesReducer),
    EffectsModule.forFeature([HeroesEffects]),
    SharedModule
  ]
})
export class HeroesModule { }
