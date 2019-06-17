import { Races } from './races';
import { Roles } from './roles';

export interface Hero {
  name: string;
  races: Races[];
  roles: Roles[];
  tier: number;
}

export const Heroes = [
  {
    name: 'Mock 1',
    races: [Races.MOCK1],
    roles: [Roles.MOCK1],
    tier: 1
  },
  {
    name: 'Mock 2',
    races: [Races.MOCK2],
    roles: [Roles.MOCK2],
    tier: 2
  }
]
