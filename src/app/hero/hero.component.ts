import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AddHero, isInLineup, RemoveHero } from '@app/lineup/state';
import { FeatureState } from '@app/state';
import { select, Store } from '@ngrx/store';
import { Hero } from './hero.model';



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

  constructor(private store: Store<FeatureState>) { }

  ngOnInit() {
    this.store.pipe(select(isInLineup, this.hero.name)).subscribe(inLineup => this.inLineup = inLineup);
  }

  onHeroClicked(): void {
    if (this.inLineup) {
      this.store.dispatch(new RemoveHero({ name: this.hero.name }));

      return;
    }
    this.store.dispatch(new AddHero({ hero: this.hero }));
  }
}
