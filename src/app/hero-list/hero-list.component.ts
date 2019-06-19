import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { HeroModels } from '@app/hero/state';

@Component({
  selector: 'ul-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Observable<HeroModels.Hero[]>;
  @Input() dimSelected: boolean;
  sortBy = 'tier';

  constructor() { }

  ngOnInit() { }

  sortByTier() {
  }

  sortByName() {
  }
}
