import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Hero } from '@app/hero/state/hero.model';
import { selectHeroes, LineupState } from './state';
import { SortFacets, SortOrders, SortOptions } from '@app/hero/state';

@Component({
  selector: 'ul-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private sortFacets: SortFacets[] = [SortFacets.TIER, SortFacets.NAME];
  private sortOrder: SortOrders = SortOrders.ASC;

  constructor(private store: Store<LineupState>) { }

  ngOnInit() {
    this.heroes$ = this.store.pipe(select(selectHeroes, this.getSortOptions()));
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
    this.heroes$ = this.store.pipe(select(selectHeroes, this.getSortOptions()));
  }

  private getSortOptions(): SortOptions {
    return {
      facets: this.sortFacets,
      order: this.sortOrder
    };
  }
}
