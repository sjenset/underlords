import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Hero } from '@app/hero/state/hero.model';
import { HeroSelectors, HeroStates } from '@app/hero/state';
import { SortFacets, SortOptions, SortOrders } from '@app/hero/state/hero.selectors';


@Component({
  selector: 'ul-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private sortFacets: SortFacets[] = [SortFacets.TIER, SortFacets.NAME];
  private sortOrder: SortOrders = SortOrders.ASC;

  constructor(private store: Store<HeroStates.HeroState>) { }

  ngOnInit() {
    this.heroes$ = this.store.pipe(select(HeroSelectors.selectRoster, this.getSortOptions()));
  }

  setSortFacets(sortFacets: SortFacets[]): void {
    this.sortFacets = sortFacets;
    this.sort();
  }

  setSortOrder(sortOrder: SortOrders): void {
    this.sortOrder = sortOrder;
    this.sort();
  }

  private sort() {
    this.heroes$ = this.store.pipe(select(HeroSelectors.selectRoster, this.getSortOptions()));
  }

  private getSortOptions(): SortOptions {
    return {
      facets: this.sortFacets,
      order: this.sortOrder
    };
  }
}
