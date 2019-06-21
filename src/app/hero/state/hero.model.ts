import { Races } from '_shared/data/races';
import { Roles } from '_shared/data/roles';

export interface Hero {
  name: string;
  races: Races[];
  roles: Roles[];
  tier: number;
}
