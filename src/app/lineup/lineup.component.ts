import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeroModels, HeroSelectors, HeroStates } from '@app/hero/state';



@Component({
  selector: 'ul-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {
  heroes$: Observable<HeroModels.Hero[]> = this.store.pipe(select(HeroSelectors.selectLineup));

  constructor(private store: Store<HeroStates.HeroState>) { }

  ngOnInit() {
  }

}
