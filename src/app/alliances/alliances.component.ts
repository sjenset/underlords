import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { DataService } from '_app/shared/data.service';
import { AlliancesState, selectAlliances, Load, Alliance } from './state';

@Component({
  selector: 'ul-alliances',
  templateUrl: './alliances.component.html',
  styleUrls: ['./alliances.component.scss']
})
export class AlliancesComponent implements OnInit {
  alliances$: Observable<Alliance[]>;
  constructor(private store: Store<AlliancesState>, private dataService: DataService) { }

  ngOnInit() {
    this.alliances$ = this.store.pipe(select(selectAlliances));
    this.store.dispatch(new Load({ alliances: this.dataService.getAlliances() }));
   }
}
