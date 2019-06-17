import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { HeroesState, HeroesActions, HeroesSelectors } from '@app/heroes/state';
import { Observable } from 'rxjs';
import { Hero } from '@shared/data/heroes';


@Component({
  selector: 'ul-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]> = this.store.pipe(select(HeroesSelectors.getHeroes));

  constructor(private store: Store<HeroesState.State>) { }

  ngOnInit() {
    this.store.dispatch(new HeroesActions.GetHeroes());
  }
}
