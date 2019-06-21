import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Hero } from './hero.model';


export const HeroAdapter: EntityAdapter<Hero> = createEntityAdapter<Hero>({
  selectId: hero => hero.name
});
