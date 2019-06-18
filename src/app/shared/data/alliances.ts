import { Races } from './races';
import { Roles } from './roles';

interface Bonus {
  amountRequired: number;
  maxAllowed?: number;
  bonus: string;
}

export interface Alliance {
  requirements: string;
  slots: number;
  bonuses: Bonus[];
}

export const Alliances: Alliance[] = [
  {
    requirements: Roles.ASSASSIN,
    slots: 9,
    bonuses: [
      {
        amountRequired: 3,
        bonus: 'Assassins gain a 10% chance to Critical Hit for 300% Damage'
      },
      {
        amountRequired: 6,
        bonus: 'Assassins gain a 20% chance to Critical Hit for 400% Damage'
      },
      {
        amountRequired: 9,
        bonus: 'Assassins gain a 30% chance to Critical Hit for 500% Damage'
      }
    ]
  },
  {
    requirements: Races.BLOOD_BOUND,
    slots: 2,
    bonuses: [
      {
        amountRequired: 2,
        bonus: 'When a Blood-Bound unit dies, all other Blood-Bound units deal +100% Attack Damage for the rest of the battle'
      }
    ]
  },
  {
    requirements: Races.BRAWNY,
    slots: 2,
    bonuses: [
      {
        amountRequired: 2,
        bonus: 'All Brawny units have their maximum HP increased by 200'
      },
      {
        amountRequired: 4,
        bonus: 'All Brawny units have their maximum HP increased by 500'
      }
    ]
  },
  {
    requirements: Races.DEADEYE,
    slots: 2,
    bonuses: [
      {
        amountRequired: 2,
        bonus: 'Deadeye units focus their attacks on the lowest-health enemy'
      }
    ]
  },
  {
    requirements: Races.DEMON,
    slots: 1,
    bonuses: [
      {
        amountRequired: 1,
        maxAllowed: 1,
        bonus: 'Demon units gain +50% Pure Damage. Active when you have only one type of Demon unit on the board'
      }
    ]
  },
  {
    requirements: Roles.DEMON_HUNTER,
    slots: 2,
    bonuses: [
      {
        amountRequired: 1,
        bonus: 'Invalidate your opponent\'s Demon Alliance bonus'
      },
      {
        amountRequired: 2,
        bonus: 'Invalidate your opponent\'s Demon Alliance bonus. Demon units gain +50% Pure Damage'
      }
    ]
  },
  {
    requirements: Races.DRAGON,
    slots: 3,
    bonuses: [
      {
        amountRequired: 3,
        bonus: 'Dragon units start Combat with Full Mana'
      }
    ]
  },
  {
    requirements: Roles.DRUID,
    slots: 4,
    bonuses: [
      {
        amountRequired: 2,
        bonus: 'The lowest star ally Druid is upgraded a level'
      },
      {
        amountRequired: 4,
        bonus: 'The 2 lowest star ally Druids are upgraded a level each'
      }
    ]
  },
  {
    requirements: Races.ELUSIVE,
    slots: 9,
    bonuses: [
      {
        amountRequired: 3,
        bonus: 'Elusive units gain +20% Evasion'
      },
      {
        amountRequired: 6,
        bonus: 'Elusive units gain +45% Evasion'
      },
      {
        amountRequired: 9,
        bonus: 'Elusive units gain +75% Evasion'
      }
    ]
  },
  {
    requirements: Races.HEARTLESS,
    slots: 6,
    bonuses: [
      {
        amountRequired: 2,
        bonus: 'Enemies suffer -5 Armor'
      },
      {
        amountRequired: 4,
        bonus: 'Enemies suffer -10 Armor'
      },
      {
        amountRequired: 6,
        bonus: 'Enemies suffer -20 Armor'
      }
    ]
  },
  {
    requirements: Races.HUMAN,
    slots: 6,
    bonuses: [
      {
        amountRequired: 2,
        bonus: 'Human units gain a 20% Chance to Silence target for 4 seconds when attacking'
      },
      {
        amountRequired: 4,
        bonus: 'Human units gain a 44% Chance to Silence target for 4 seconds when attacking'
      },
      {
        amountRequired: 6,
        bonus: 'Human units gain a 66% Chance to Silence target for 4 seconds when attacking'
      }
    ]
  },
  {
    requirements: Roles.HUNTER,
    slots: 6,
    bonuses: [
      {
        amountRequired: 3,
        bonus: 'Hunters have a 15% chance of quickly performing 3 attacks'
      },
      {
        amountRequired: 6,
        bonus: 'Hunters have a 25% chance of quickly performing 3 attacks'
      }
    ]
  },
  {
    requirements: Roles.INVENTOR,
    slots: 4,
    bonuses: [
      {
        amountRequired: 2,
        bonus: 'Inventors gain +15 HP Regeneration'
      },
      {
        amountRequired: 4,
        bonus: 'Inventors gain +40 HP Regeneration'
      }
    ]
  },
  {
    requirements: Roles.MAGE,
    slots: 6,
    bonuses: [
      {
        amountRequired: 3,
        bonus: 'Enemies suffer -40% Magic Resistance'
      },
      {
        amountRequired: 6,
        bonus: 'Enemies suffer -100% Magic Resistance'
      }
    ]
  },
  {
    requirements: Races.PRIMORDIAL,
    slots: 4,
    bonuses: [
      {
        amountRequired: 2,
        bonus: 'When hit, Primordial units have a 30% chance to disarm melee attackers for 4 seconds'
      },
      {
        amountRequired: 4,
        bonus: 'When hit, Allies units have a 30% chance to disarm melee attackers for 4 seconds'
      }
    ]
  },
  {
    requirements: Races.SAVAGE,
    slots: 6,
    bonuses: [
      {
        amountRequired: 2,
        bonus: 'Allies gain +10% Attack Damage'
      },
      {
        amountRequired: 4,
        bonus: 'Allies gain +25% Attack Damage'
      }, {
        amountRequired: 6,
        bonus: 'Allies gain +45% Attack Damage'
      }
    ]
  },
  {
    requirements: Races.SCALED,
    slots: 4,
    bonuses: [
      {
        amountRequired: 2,
        bonus: 'Allies gain +30% Magic Resistance'
      },
      {
        amountRequired: 4,
        bonus: 'Allies gain +50% Magic Resistance'
      }
    ]
  },
  {
    requirements: Races.SCRAPPY,
    slots: 6,
    bonuses: [
      {
        amountRequired: 3,
        bonus: 'A Random Ally is granted +15 Armor and +10 HP Regeneration'
      },
      {
        amountRequired: 6,
        bonus: 'Allies gain +15 Armor and +10 HP Regeneration'
      }
    ]
  },
  {
    requirements: Roles.SHAMAN,
    slots: 2,
    bonuses: [
      {
        amountRequired: 2,
        bonus: 'A Random Enemy is turned into a Frog for 6 seconds at the start of Combat'
      }
    ]
  },
  {
    requirements: Races.TROLL,
    slots: 4,
    bonuses: [
      {
        amountRequired: 2,
        bonus: 'Troll units gain +35 Attack Speed'
      },
      {
        amountRequired: 4,
        bonus: 'Troll units gain +65 Attack Speed and other Allies gain +30 Attack Speed'
      }
    ]
  },
  {
    requirements: Roles.WARLOCK,
    slots: 6,
    bonuses: [
      {
        amountRequired: 2,
        bonus: 'Allies gain +15% Lifesteal'
      },
      {
        amountRequired: 4,
        bonus: 'Allies gain +30% Lifesteal'
      },
      {
        amountRequired: 6,
        bonus: 'Allies gain +50% Lifesteal'
      }
    ]
  },
  {
    requirements: Roles.WARRIOR,
    slots: 9,
    bonuses: [
      {
        amountRequired: 3,
        bonus: 'Warriors gain +10 Armor'
      },
      {
        amountRequired: 6,
        bonus: 'Warriors gain +15 Armor'
      },
      {
        amountRequired: 9,
        bonus: 'Warriors gain +25 Armor'
      }
    ]
  }
];
