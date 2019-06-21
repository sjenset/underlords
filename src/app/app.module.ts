import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { KebabPipe } from './shared/kebab.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';
import { LineupComponent } from './lineup/lineup.component';
import { RosterComponent } from './roster/roster.component';
import { RosterModule } from './roster/roster.module';
import { LineupModule } from './lineup/lineup.module';

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    LineupComponent,
    HeroListComponent,
    HeroComponent,
    KebabPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Underlords Store DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    RosterModule,
    LineupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
