import { Component, OnInit } from '@angular/core';
import { AppState } from './state';
import { Store } from '@ngrx/store';
import { HeroActions } from './hero/state';
import { DataService } from './shared/data.service';

@Component({
  selector: 'ul-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState.State>, private dataService: DataService) { }

  ngOnInit() {
    this.store.dispatch(new HeroActions.LoadHeroes({ heroes: this.dataService.getHeroes() }));
  }
}
