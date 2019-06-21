import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SortFacets, SortOptions, SortOrders } from '_app/hero/state';
import { Hero } from '_app/hero/state/hero.model';
import { DataService } from '_app/shared/data.service';
import { LoadHeroes, RosterState, selectHeroes } from './state';

@Component({
  selector: 'ul-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private sortFacets: SortFacets[] = [SortFacets.TIER, SortFacets.NAME];
  private sortOrder: SortOrders = SortOrders.ASC;

  constructor(private store: Store<RosterState>, private dataService: DataService) { }

  ngOnInit() {
    this.heroes$ = this.store.pipe(select(selectHeroes, this.getSortOptions()));
    this.store.dispatch(new LoadHeroes({ heroes: this.dataService.getHeroes() }));
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
