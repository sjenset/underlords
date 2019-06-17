import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { HeroesState, HeroesSelectors, HeroesActions } from '@app/heroes/state';
import { Hero } from '../shared/data/heroes';

@Component({
  selector: 'ul-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;
  inLineup: boolean;

  constructor(private store: Store<HeroesState.State>) { }

  ngOnInit() {
    this.store.pipe(select(HeroesSelectors.isInLineup, this.hero)).subscribe(isInLineup => {
      console.log(`Is ${this.hero.name} in the lineup?: ${isInLineup}`);
      this.inLineup = isInLineup;
    });
  }

  onHeroClicked(): void {
    this.store.dispatch(new HeroesActions.ModifiyLineup({hero: this.hero, removeFromLineup: this.inLineup}));
  }
}
