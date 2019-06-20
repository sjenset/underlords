import { Component, OnInit } from '@angular/core';
import { Hero } from '@app/hero/hero.model';
import { SortFacets, SortOptions, SortOrders } from '@app/state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LineupState, selectHeroes } from './state';


@Component({
  selector: 'ul-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {
  heroes$: Observable<Hero[]> = this.store.pipe(select(selectHeroes, this.getSortOptions()));
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
