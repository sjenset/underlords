import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Hero } from '@shared/data/heroes';
import { HeroesSelectors, HeroesState } from '@app/heroes/state';

@Component({
  selector: 'ul-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {
  heroes$: Observable<Hero[]> = this.store.pipe(select(HeroesSelectors.getLineup));

  constructor(private store: Store<HeroesState.State>) { }

  ngOnInit() {
  }

}
