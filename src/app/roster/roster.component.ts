import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Hero } from '@app/hero/state/hero.model';
import { HeroSelectors, HeroStates, HeroActions } from '@app/hero/state';
import { DataService } from '@app/shared/data.service';


@Component({
  selector: 'ul-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  heroes$: Observable<Hero[]> = this.store.pipe(select(HeroSelectors.selectAll));

  constructor(private store: Store<HeroStates.HeroState>, private dataService: DataService) { }

  ngOnInit() {
    this.store.dispatch(new HeroActions.LoadHeroes({heroes: this.dataService.getHeroes()}));
  }
}
