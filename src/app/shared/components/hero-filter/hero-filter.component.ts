import { Component, OnInit } from '@angular/core';
import { UpdateTiersSelected } from '@app/roster/state/filters/roster-filter.actions';
import { Store } from '@ngrx/store';
import { HeroFeatureState } from '@app/state';

@Component({
  selector: 'ul-hero-filter',
  templateUrl: './hero-filter.component.html',
  styleUrls: ['./hero-filter.component.css']
})
export class HeroFilterComponent implements OnInit {

  tiers: boolean[] = Array(5).fill(false);

  constructor(private store: Store<HeroFeatureState>) { }

  ngOnInit() {
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
  
  getTiersMappedToFilterValues() {
    const res = [];
    this.tiers.forEach((shouldFilter, idx) => { if (shouldFilter) { res.push(`${idx + 1}`); } } );
    return res;
  }

}
