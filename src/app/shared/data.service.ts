import { Injectable } from '@angular/core';
import { Heroes } from './data/heroes';
import { Hero } from '@app/hero/hero.model';
import { DefaultFilters } from './data/filters';
import { FilterValue } from '@app/roster/state/filters';

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
}
