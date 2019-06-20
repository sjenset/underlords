import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { Hero } from '@app/hero/hero.model';
import { SortFacets, SortOrders } from '@app/state';

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

  constructor() { }

  ngOnInit() { }

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
