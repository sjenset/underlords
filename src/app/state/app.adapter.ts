import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Hero } from '@app/hero/hero.model';

export const AppAdapter: EntityAdapter<Hero> = createEntityAdapter<Hero>({
  selectId: hero => hero.name
});
