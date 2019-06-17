import { Injectable } from '@angular/core';

import { Heroes, Hero } from './data/heroes';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getHeroes(): Hero[] {
    return Heroes;
  }
}
