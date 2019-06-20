import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Alliance } from './alliances.model';

export const AllianceAdapter: EntityAdapter<Alliance> = createEntityAdapter<Alliance>({
  selectId: alliance => alliance.requirements
});
