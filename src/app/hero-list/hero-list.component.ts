import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { Hero } from '@shared/data/heroes';


@Component({
  selector: 'ul-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Observable<Hero[]>;
  @Input() dimSelected: boolean;
  sortBy = 'tier';
  subSortBy = 'name';

  constructor() { }

  ngOnInit() { }
}
