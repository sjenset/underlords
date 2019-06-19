import { Injectable } from '@angular/core';
import { Heroes } from './data/heroes';
import { Hero } from '@app/hero/hero.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  public getHeroes(): Hero[] {
    return Heroes;
  }
}
