import { Races } from '@shared/data/races';
import { Roles } from '@shared/data/roles';

export interface Hero {
  id: number;
  name: string;
  races: Races[];
  roles: Roles[];
  tier: number;
  inLineup?: boolean;
}
