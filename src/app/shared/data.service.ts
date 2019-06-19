import { Injectable } from '@angular/core';
import { Heroes } from './data/heroes';
import { HeroModels } from '@app/hero/state';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  public getHeroes(): HeroModels.Hero[] {
    return Heroes;
  }
}
