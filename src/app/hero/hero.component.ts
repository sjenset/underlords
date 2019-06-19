import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { HeroStates, HeroModels, HeroActions } from './state';

@Component({
  selector: 'ul-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {
  @Input() hero: HeroModels.Hero;
  @Input() dimWhenSelected: boolean;

  constructor(private store: Store<HeroStates.HeroState>) { }

  ngOnInit() { }

  onHeroClicked(): void {
    this.store.dispatch(new HeroActions.UpdateHero({
      hero: {
        id: this.hero.name,
        changes: {
          inLineup: !this.hero.inLineup
        }
      }
    }));
  }
}
