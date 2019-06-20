import { Injectable } from '@angular/core';
import { Heroes } from './data/heroes';
import { Hero } from '@app/hero/state/hero.model';
import { Alliances } from './data/alliances';
import { Alliance } from '@app/alliances/state';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  public getHeroes(): Hero[] {
    return Heroes;
  }

  public getAlliances(): Alliance[] {
    return Alliances;
  }
}
