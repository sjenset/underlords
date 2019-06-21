import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AddHero, isInLineup, RemoveHero } from '_app/lineup/state';
import { HeroFeatureState } from '_app/state';
import { Hero } from './state/hero.model';




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
