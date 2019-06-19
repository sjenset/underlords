import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '@app/hero/hero.model';
import { RosterStates, RosterSelectors, RosterActions } from './state';
import { DataService } from '@app/shared/data.service';
import { AppSorter } from '@app/state';

@Component({
  selector: 'ul-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private sortFacets: AppSorter.SortFacets[] = [AppSorter.SortFacets.TIER, AppSorter.SortFacets.NAME];
  private sortOrder: AppSorter.SortOrders = AppSorter.SortOrders.ASC;

  constructor(private store: Store<RosterStates.RosterState>, private dataService: DataService) { }

  ngOnInit() {
    this.heroes$ = this.store.pipe(select(RosterSelectors.selectHeroes, this.getSortOptions()));
    this.store.dispatch(new RosterActions.LoadHeroes({ heroes: this.dataService.getHeroes() }));
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
    this.heroes$ = this.store.pipe(select(RosterSelectors.selectHeroes, this.getSortOptions()));
  }

  private getSortOptions(): AppSorter.SortOptions {
    return {
      facets: this.sortFacets,
      order: this.sortOrder
    };
  }
}
