import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { HeroModels } from '.';

export const HeroAdapter: EntityAdapter<HeroModels.Hero> = createEntityAdapter<HeroModels.Hero>({
  selectId: hero => hero.name
});
