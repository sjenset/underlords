import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { HeroesState, HeroesActions, HeroesSelectors } from '@app/heroes/state';
import { Observable } from 'rxjs';
import { Hero } from '@shared/data/heroes';


@Component({
  selector: 'ul-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  heroes$: Observable<Hero[]> = this.store.pipe(select(HeroesSelectors.getHeroes));

  constructor(private store: Store<HeroesState.State>) { }

  ngOnInit() {
    this.store.dispatch(new HeroesActions.GetHeroes());
  }
}
