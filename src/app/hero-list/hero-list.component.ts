import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { Hero } from '@app/hero/hero.model';
import { SortFacets, SortOrders, FeatureState } from '@app/state';
import { select, Store } from '@ngrx/store';
import { selectTotal, filterHeroes2 } from '@app/roster/state';
import { FilterValue } from '@app/roster/state/filters';
import { RosterFilterUpdateAction, UpdateTiersSelected, LoadFilters } from '@app/roster/state/filters/roster-filter.actions';

@Component({
  selector: 'ul-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Observable<Hero[]>;
  @Input() dimSelected: boolean;
  @Output() sortFacetsChanged: EventEmitter<SortFacets[]> = new EventEmitter<SortFacets[]>();
  @Output() sortOrderChanged: EventEmitter<SortOrders> = new EventEmitter<SortOrders>();

  tiers: boolean[] = Array(5).fill(false);

  public get tierFilters(): FilterValue {
    return { filterType: 'tier', values: this.tiers };
  }

  constructor(private store: Store<FeatureState>) { }

  ngOnInit() {
    this.testFiltering();
    this.loadDefaultFilters();
  }

  test(val) {
    console.log(val);
    console.log(this.tiers);
  }

  loadDefaultFilters(): void {
    this.store.dispatch(LoadFilters());
  }

  // updateTierFilters(): void {
  //   this.store.dispatch(new RosterFilterUpdateAction({ filter: {
  //     id: 'tier',
  //     changes: { values: this.tiers }
  //   } }));
  // }

  updateTierFilters(): void {
    this.store.dispatch(UpdateTiersSelected({
      tiers: {
        id: 'tiers',
        changes: {
          values: this.tiers
        }
      }
    }));
  }

  updateTierFilters2(): void {

    this.store.dispatch(UpdateTiersSelected({
      tiers: {
        id: 'tier',
        changes: {
          values: this.getTiersMappedToFilterValues()
        }
      }
    }));
  }

  private getTiersMappedToFilterValues(): string[] {
    const res = [];
    this.tiers.forEach((shouldFilter, idx) => { if (shouldFilter) { res.push(`${idx + 1}`); } } );
    return res;
  }

//#region testing

  private testFiltering(): void {
    const filters: FilterValue[] = [
      { filterType: 'tier', values: this.tiers },
    ];
    const filteredItems$ = this.store.pipe(select(filterHeroes2, filters));
    // filteredItems$.subscribe(console.log);
    this.store.pipe(select(selectTotal))
      .subscribe(res => { console.log(`Total heroes: ${res}`); });

    filteredItems$
    .subscribe(res => { console.log(res); });
  }

  public toggleTierFilter(tier: string) {
    this.store.dispatch(new RosterFilterUpdateAction({ filter: {
      id: 'tier',
      changes: { values: [] }
    } }));
  }

//#endregion

  sortBy(sortBy: SortFacets): void {
    switch (sortBy) {
      case SortFacets.RACE:
        this.sortFacetsChanged.emit([SortFacets.RACE, SortFacets.TIER, SortFacets.NAME]);
        break;
      case SortFacets.ROLE:
        this.sortFacetsChanged.emit([SortFacets.ROLE, SortFacets.TIER, SortFacets.NAME]);
        break;
      case SortFacets.NAME:
        this.sortFacetsChanged.emit([SortFacets.NAME]);
        break;
      default:
        this.sortFacetsChanged.emit([SortFacets.TIER, SortFacets.NAME]);
    }
  }

  sortOrder(sortOrder: SortOrders): void {
    this.sortOrderChanged.emit(sortOrder);
  }
}
