import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '@app/hero/hero.model';
import { DataService } from '@app/shared/data.service';
import { SortFacets, SortOrders, SortOptions } from '@app/state';
import { RosterState, selectHeroes, LoadHeroes } from './state';

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
