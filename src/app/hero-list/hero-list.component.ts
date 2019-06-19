import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { Hero } from '@app/hero/hero.model';
import { AppSorter } from '@app/state';
import { SortOrders, SortFacets } from '@app/state/app.sorter';

@Component({
  selector: 'ul-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Observable<Hero[]>;
  @Input() dimSelected: boolean;
  @Output() sortFacetsChanged: EventEmitter<AppSorter.SortFacets[]> = new EventEmitter<AppSorter.SortFacets[]>();
  @Output() sortOrderChanged: EventEmitter<AppSorter.SortOrders> = new EventEmitter<AppSorter.SortOrders>();

  constructor() { }

  ngOnInit() { }

  sortBy(sortBy: SortFacets): void {
    switch (sortBy) {
      case AppSorter.SortFacets.RACE:
        this.sortFacetsChanged.emit([AppSorter.SortFacets.RACE, AppSorter.SortFacets.TIER, AppSorter.SortFacets.NAME]);
        break;
      case AppSorter.SortFacets.ROLE:
        this.sortFacetsChanged.emit([AppSorter.SortFacets.ROLE, AppSorter.SortFacets.TIER, AppSorter.SortFacets.NAME]);
        break;
      case AppSorter.SortFacets.NAME:
        this.sortFacetsChanged.emit([AppSorter.SortFacets.NAME]);
        break;
      default:
        this.sortFacetsChanged.emit([AppSorter.SortFacets.TIER, AppSorter.SortFacets.NAME]);
    }
  }

  sortOrder(sortOrder: SortOrders): void {
    this.sortOrderChanged.emit(sortOrder);
  }
}
