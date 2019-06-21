import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { KebabPipe } from './shared/kebab.pipe';
import { SlotArrayPipe } from './shared/slot-array.pipe';
import { RosterComponent } from './roster/roster.component';
import { LineupComponent } from './lineup/lineup.component';
import { AlliancesComponent } from './alliances/alliances.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';
import { RosterModule } from './roster/roster.module';
import { LineupModule } from './lineup/lineup.module';
import { AlliancesModule } from './alliances/alliances.module';
import { AllianceComponent } from './alliance/alliance.component';

@NgModule({
  declarations: [
    AppComponent,
    KebabPipe,
    SlotArrayPipe,
    RosterComponent,
    LineupComponent,
    AlliancesComponent,
    HeroListComponent,
    HeroComponent,
    AllianceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Underlords Store DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    RosterModule,
    LineupModule,
    AlliancesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
