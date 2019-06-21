import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AllianceComponent } from './alliance/alliance.component';
import { AlliancesComponent } from './alliances/alliances.component';
import { AlliancesModule } from './alliances/alliances.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';
import { LineupComponent } from './lineup/lineup.component';
import { LineupModule } from './lineup/lineup.module';
import { RosterComponent } from './roster/roster.component';
import { RosterModule } from './roster/roster.module';
import { KebabPipe } from './shared/kebab.pipe';
import { SlotArrayPipe } from './shared/slot-array.pipe';


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
