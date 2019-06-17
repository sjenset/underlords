import { Races } from './races';
import { Roles } from './roles';

export interface Hero {
  name: string;
  races: Races[];
  roles: Roles[];
  tier: number;
}

export const Heroes: Array<Hero> = [
  {
    name: 'Anti-mage',
    races: [Races.ELUSIVE],
    roles: [Roles.DEMON_HUNTER],
    tier: 1
  },
  {
    name: 'Axe',
    races: [Races.BRAWNY],
    roles: [Roles.WARRIOR],
    tier: 1
  },
  {
    name: 'Batrider',
    races: [Races.TROLL],
    roles: [Roles.KNIGHT],
    tier: 1
  },
  {
    name: 'Bloodseeker',
    races: [Races.HUMAN],
    roles: [Roles.ASSASSIN],
    tier: 1
  },
  {
    name: 'Bounty Hunter',
    races: [Races.SCRAPPY],
    roles: [Roles.ASSASSIN],
    tier: 1
  },
  {
    name: 'Clockwerk',
    races: [Races.SCRAPPY],
    roles: [Roles.INVENTOR],
    tier: 1
  },
  {
    name: 'Drow Ranger',
    races: [Races.HEARTLESS],
    roles: [Roles.HUNTER],
    tier: 1
  },
  {
    name: 'Enchantress',
    races: [Races.SAVAGE],
    roles: [Roles.DRUID],
    tier: 1
  },
  {
    name: 'Ogre Magi',
    races: [Races.BLOOD_BOUND],
    roles: [Roles.MAGE],
    tier: 1
  },
  {
    name: 'Shadow Shaman',
    races: [Races.TROLL],
    roles: [Roles.SHAMAN],
    tier: 1
  },
  {
    name: 'Tinker',
    races: [Races.SCRAPPY],
    roles: [Roles.INVENTOR],
    tier: 1
  },
  {
    name: 'Tiny',
    races: [Races.PRIMORDIAL],
    roles: [Roles.WARRIOR],
    tier: 1
  },
  {
    name: 'Tusk',
    races: [Races.SAVAGE],
    roles: [Roles.WARRIOR],
    tier: 1
  },
  {
    name: 'Warlock',
    races: [Races.BLOOD_BOUND],
    roles: [Roles.WARLOCK],
    tier: 1
  },
  {
    name: 'Beastmaster',
    races: [Races.BRAWNY],
    roles: [Roles.HUNTER],
    tier: 2
  },
  {
    name: 'Chaos Knight',
    races: [Races.DEMON],
    roles: [Roles.KNIGHT],
    tier: 2
  },
  {
    name: 'Crystal Maiden',
    races: [Races.HUMAN],
    roles: [Roles.MAGE],
    tier: 2
  },
  {
    name: 'Juggernaut',
    races: [Races.BRAWNY],
    roles: [Roles.WARRIOR],
    tier: 2
  },
  {
    name: 'Luna',
    races: [Races.ELUSIVE],
    roles: [Roles.KNIGHT],
    tier: 2
  },
  {
    name: 'Morphling',
    races: [Races.PRIMORDIAL],
    roles: [Roles.ASSASSIN],
    tier: 2
  },
  {
    name: 'Nature\'s Prophet',
    races: [Races.ELUSIVE],
    roles: [Roles.DRUID],
    tier: 2
  },
  {
    name: 'Puck',
    races: [Races.ELUSIVE, Races.DRAGON],
    roles: [Roles.MAGE],
    tier: 2
  },
  {
    name: 'Pudge',
    races: [Races.HEARTLESS],
    roles: [Roles.WARRIOR],
    tier: 2
  },
  {
    name: 'Queen of Pain',
    races: [Races.DEMON],
    roles: [Roles.ASSASSIN],
    tier: 2
  },
  {
    name: 'Slardar',
    races: [Races.SCALED],
    roles: [Roles.WARRIOR],
    tier: 2
  },
  {
    name: 'Timbersaw',
    races: [Races.SCRAPPY],
    roles: [Roles.INVENTOR],
    tier: 2
  },
  {
    name: 'Treant Protector',
    races: [Races.ELUSIVE],
    roles: [Roles.DRUID],
    tier: 2
  },
  {
    name: 'Witchdoctor',
    races: [Races.TROLL],
    roles: [Roles.WARLOCK],
    tier: 2
  },
  {
    name: 'Abaddon',
    races: [Races.HEARTLESS],
    roles: [Roles.KNIGHT],
    tier: 3
  },
  {
    name: 'Arc Warden',
    races: [Races.PRIMORDIAL],
    roles: [Roles.SHAMAN],
    tier: 3
  },
  {
    name: 'Lina',
    races: [Races.HUMAN],
    roles: [Roles.MAGE],
    tier: 3
  },
  {
    name: 'Lycan',
    races: [Races.HUMAN, Races.SAVAGE],
    roles: [Roles.WARRIOR],
    tier: 3
  },
  {
    name: 'Omniknight',
    races: [Races.HUMAN],
    roles: [Roles.KNIGHT],
    tier: 3
  },
  {
    name: 'Phantom Assassin',
    races: [Races.ELUSIVE],
    roles: [Roles.ASSASSIN],
    tier: 3
  },
  {
    name: 'Razor',
    races: [Races.PRIMORDIAL],
    roles: [Roles.MAGE],
    tier: 3
  },
  {
    name: 'Sandking',
    races: [Races.SAVAGE],
    roles: [Roles.ASSASSIN],
    tier: 3
  },
  {
    name: 'Shadow Fiend',
    races: [Races.DEMON],
    roles: [Roles.WARLOCK],
    tier: 3
  },
  {
    name: 'Slark',
    races: [Races.SCALED],
    roles: [Roles.ASSASSIN],
    tier: 3
  },
  {
    name: 'Sniper',
    races: [Races.DEADEYE],
    roles: [Roles.HUNTER],
    tier: 3
  },
  {
    name: 'Terrorblade',
    races: [Races.DEMON],
    roles: [Roles.DEMON_HUNTER],
    tier: 3
  },
  {
    name: 'Venomancer',
    races: [Races.SAVAGE],
    roles: [Roles.WARLOCK],
    tier: 3
  },
  {
    name: 'Viper',
    races: [Races.DRAGON],
    roles: [Roles.ASSASSIN],
    tier: 3
  },
  {
    name: 'Wind Ranger',
    races: [Races.ELUSIVE],
    roles: [Roles.HUNTER],
    tier: 3
  },
  {
    name: 'Alchemist',
    races: [Races.SCRAPPY],
    roles: [Roles.WARLOCK],
    tier: 4
  },
  {
    name: 'Disruptor',
    races: [Races.BRAWNY],
    roles: [Roles.SHAMAN],
    tier: 4
  },
  {
    name: 'Doom',
    races: [Races.DEMON],
    roles: [Roles.WARRIOR],
    tier: 4
  },
  {
    name: 'Dragon Knight',
    races: [Races.HUMAN, Races.DRAGON],
    roles: [Roles.KNIGHT],
    tier: 4
  },
  {
    name: 'Keeper of the Light',
    races: [Races.HUMAN],
    roles: [Roles.MAGE],
    tier: 4
  },
  {
    name: 'Kunka',
    races: [Races.HUMAN],
    roles: [Roles.WARRIOR],
    tier: 4
  },
  {
    name: 'Lone Druid',
    races: [Races.SAVAGE],
    roles: [Roles.DRUID],
    tier: 4
  },
  {
    name: 'Medusa',
    races: [Races.SCALED],
    roles: [Roles.HUNTER],
    tier: 4
  },
  {
    name: 'Mirana',
    races: [Races.ELUSIVE],
    roles: [Roles.HUNTER],
    tier: 4
  },
  {
    name: 'Necrophos',
    races: [Races.HEARTLESS],
    roles: [Roles.WARLOCK],
    tier: 4
  },
  {
    name: 'Templar Assassin',
    races: [Races.ELUSIVE],
    roles: [Roles.ASSASSIN],
    tier: 4
  },
  {
    name: 'Troll Warlord',
    races: [Races.TROLL],
    roles: [Roles.WARRIOR],
    tier: 4
  },
  {
    name: 'Enigma',
    races: [Races.PRIMORDIAL],
    roles: [Roles.WARLOCK],
    tier: 5
  },
  {
    name: 'Gyrocopter',
    races: [Races.DEADEYE],
    roles: [Roles.INVENTOR],
    tier: 5
  },
  {
    name: 'Lich',
    races: [Races.HEARTLESS],
    roles: [Roles.MAGE],
    tier: 5
  },
  {
    name: 'Techies',
    races: [Races.SCRAPPY],
    roles: [Roles.INVENTOR],
    tier: 5
  },
  {
    name: 'Tidehunter',
    races: [Races.SCALED],
    roles: [Roles.HUNTER],
    tier: 5
  }
];
