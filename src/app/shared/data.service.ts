import { Injectable } from '@angular/core';
import { Heroes } from './data/heroes';
import { DefaultFilters } from './data/filters';
import { FilterValue } from '_app/roster/state/filters';
import { Hero } from '_app/hero/state/hero.model';
import { Alliances } from './data/alliances';
import { Alliance } from '_app/alliances/state';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  public getHeroes(): Hero[] {
    return Heroes;
  }

  public getFilters(): FilterValue[] {
    return DefaultFilters;
  }

  public getAlliances(): Alliance[] {
    return Alliances;
  }
}
