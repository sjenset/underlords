import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Hero } from '@app/hero/hero.model';
import { LineupStates, LineupSelectors } from './state';
import { AppSorter } from '@app/state';

@Component({
  selector: 'ul-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {
  heroes$: Observable<Hero[]> = this.store.pipe(select(LineupSelectors.selectHeroes, this.getSortOptions()));
  private sortFacets: AppSorter.SortFacets[] = [AppSorter.SortFacets.TIER, AppSorter.SortFacets.NAME];
  private sortOrder: AppSorter.SortOrders = AppSorter.SortOrders.ASC;

  constructor(private store: Store<LineupStates.LineupState>) { }

  ngOnInit() {
    this.heroes$ = this.store.pipe(select(LineupSelectors.selectHeroes, this.getSortOptions()));
  }

  setSortFacets(sortFacets: AppSorter.SortFacets[]): void {
    this.sortFacets = sortFacets;
    this.sort();
  }

  setSortOrder(sortOrder: AppSorter.SortOrders): void {
    this.sortOrder = sortOrder;
    this.sort();
  }

  private sort() {
    this.heroes$ = this.store.pipe(select(LineupSelectors.selectHeroes, this.getSortOptions()));
  }

  private getSortOptions(): AppSorter.SortOptions {
    return {
      facets: this.sortFacets,
      order: this.sortOrder
    };
  }
}
