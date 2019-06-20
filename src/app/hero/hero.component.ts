import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Hero } from './state/hero.model';
import { HeroFeatureState } from '@app/state';
import { isInLineup, RemoveHero, AddHero } from '@app/lineup/state';

@Component({
  selector: 'ul-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;
  @Input() dimWhenSelected: boolean;
  inLineup: boolean;

  constructor(private store: Store<HeroFeatureState>) { }

  ngOnInit() {
    this.store.pipe(select(isInLineup, this.hero.name)).subscribe(inLineup => this.inLineup = inLineup);
  }

  onHeroClicked(): void {
    if (this.inLineup) {
      this.store.dispatch(new RemoveHero({ hero: this.hero }));

      return;
    }
    this.store.dispatch(new AddHero({ hero: this.hero }));
  }
}
