import { Injectable } from '@angular/core';
import { Heroes } from './data/heroes';
import { HeroModels } from '@app/hero/state';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private currentId = 1;

  constructor() { }

  public getHeroes(): HeroModels.Hero[] {
    const heroes = [];
    Heroes.forEach(hero => {
      heroes.push(Object.assign({}, hero, { id: this.currentId++ }));
    });
    return heroes;
  }
}
