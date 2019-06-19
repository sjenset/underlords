import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeroModels, HeroSelectors, HeroStates } from '@app/hero/state';
import { SortFacets, SortOrders, SortOptions } from '@app/hero/state/hero.selectors';



@Component({
  selector: 'ul-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {
  heroes$: Observable<HeroModels.Hero[]> = this.store.pipe(select(HeroSelectors.selectLineup, this.getSortOptions()));
  private sortFacets: SortFacets[] = [SortFacets.TIER, SortFacets.NAME];
  private sortOrder: SortOrders = SortOrders.ASC;

  constructor(private store: Store<HeroStates.HeroState>) { }

  ngOnInit() {
    this.heroes$ = this.store.pipe(select(HeroSelectors.selectLineup, this.getSortOptions()));
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
    this.heroes$ = this.store.pipe(select(HeroSelectors.selectLineup, this.getSortOptions()));
  }

  private getSortOptions(): SortOptions {
    return {
      facets: this.sortFacets,
      order: this.sortOrder
    };
  }
}
