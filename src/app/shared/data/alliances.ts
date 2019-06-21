import { Races } from './races';
import { Roles } from './roles';
import { Alliance } from '_app/alliances/state';

export const Alliances: Alliance[] = [
  {
    active: 0,
    requirements: Roles.ASSASSIN,
    slots: 9,
    bonuses: [
      {
        amountRequired: 3,
        text: 'Assassins gain a 10% chance to Critical Hit for 300% Damage'
      },
      {
        amountRequired: 6,
        text: 'Assassins gain a 20% chance to Critical Hit for 400% Damage'
      },
      {
        amountRequired: 9,
        text: 'Assassins gain a 30% chance to Critical Hit for 500% Damage'
      }
    ]
  },
  {
    active: 0,
    requirements: Races.BLOOD_BOUND,
    slots: 2,
    bonuses: [
      {
        amountRequired: 2,
        text: 'When a Blood-Bound unit dies, all other Blood-Bound units deal +100% Attack Damage for the rest of the battle'
      }
    ]
  },
  {
    active: 0,
    requirements: Races.BRAWNY,
    slots: 2,
    bonuses: [
      {
        amountRequired: 2,
        text: 'All Brawny units have their maximum HP increased by 200'
      },
      {
        amountRequired: 4,
        text: 'All Brawny units have their maximum HP increased by 500'
      }
    ]
  },
  {
    active: 0,
    requirements: Races.DEADEYE,
    slots: 2,
    bonuses: [
      {
        amountRequired: 2,
        text: 'Deadeye units focus their attacks on the lowest-health enemy'
      }
    ]
  },
  {
    active: 0,
    requirements: Races.DEMON,
    slots: 1,
    maxAllowed: 1,
    bonuses: [
      {
        amountRequired: 1,
        text: 'Demon units gain +50% Pure Damage. Active when you have only one type of Demon unit on the board'
      }
    ]
  },
  {
    active: 0,
    requirements: Roles.DEMON_HUNTER,
    slots: 2,
    bonuses: [
      {
        amountRequired: 1,
        text: 'Invalidate your opponent\'s Demon Alliance bonus'
      },
      {
        amountRequired: 2,
        text: 'Invalidate your opponent\'s Demon Alliance bonus. Demon units gain +50% Pure Damage'
      }
    ]
  },
  {
    active: 0,
    requirements: Races.DRAGON,
    slots: 3,
    bonuses: [
      {
        amountRequired: 3,
        text: 'Dragon units start Combat with Full Mana'
      }
    ]
  },
  {
    active: 0,
    requirements: Roles.DRUID,
    slots: 4,
    bonuses: [
      {
        amountRequired: 2,
        text: 'The lowest star ally Druid is upgraded a level'
      },
      {
        amountRequired: 4,
        text: 'The 2 lowest star ally Druids are upgraded a level each'
      }
    ]
  },
  {
    active: 0,
    requirements: Races.ELUSIVE,
    slots: 9,
    bonuses: [
      {
        amountRequired: 3,
        text: 'Elusive units gain +20% Evasion'
      },
      {
        amountRequired: 6,
        text: 'Elusive units gain +45% Evasion'
      },
      {
        amountRequired: 9,
        text: 'Elusive units gain +75% Evasion'
      }
    ]
  },
  {
    active: 0,
    requirements: Races.HEARTLESS,
    slots: 6,
    bonuses: [
      {
        amountRequired: 2,
        text: 'Enemies suffer -5 Armor'
      },
      {
        amountRequired: 4,
        text: 'Enemies suffer -10 Armor'
      },
      {
        amountRequired: 6,
        text: 'Enemies suffer -20 Armor'
      }
    ]
  },
  {
    active: 0,
    requirements: Races.HUMAN,
    slots: 6,
    bonuses: [
      {
        amountRequired: 2,
        text: 'Human units gain a 20% Chance to Silence target for 4 seconds when attacking'
      },
      {
        amountRequired: 4,
        text: 'Human units gain a 44% Chance to Silence target for 4 seconds when attacking'
      },
      {
        amountRequired: 6,
        text: 'Human units gain a 66% Chance to Silence target for 4 seconds when attacking'
      }
    ]
  },
  {
    active: 0,
    requirements: Roles.HUNTER,
    slots: 6,
    bonuses: [
      {
        amountRequired: 3,
        text: 'Hunters have a 15% chance of quickly performing 3 attacks'
      },
      {
        amountRequired: 6,
        text: 'Hunters have a 25% chance of quickly performing 3 attacks'
      }
    ]
  },
  {
    active: 0,
    requirements: Roles.INVENTOR,
    slots: 4,
    bonuses: [
      {
        amountRequired: 2,
        text: 'Inventors gain +15 HP Regeneration'
      },
      {
        amountRequired: 4,
        text: 'Inventors gain +40 HP Regeneration'
      }
    ]
  },
  {
    active: 0,
    requirements: Roles.KNIGHT,
    slots: 6,
    bonuses: [
      {
        amountRequired: 2,
        text: 'Knight units take 25% less physical and magic damage when standing 1 cell away from another Knight'
      },
      {
        amountRequired: 4,
        text: 'Knight units take 35% less physical and magic damage when standing 1 cell away from another Knight'
      },
      {
        amountRequired: 6,
        text: 'Knight units take 50% less physical and magic damage when standing 1 cell away from another Knight'
      }
    ]
  },
  {
    active: 0,
    requirements: Roles.MAGE,
    slots: 6,
    bonuses: [
      {
        amountRequired: 3,
        text: 'Enemies suffer -40% Magic Resistance'
      },
      {
        amountRequired: 6,
        text: 'Enemies suffer -100% Magic Resistance'
      }
    ]
  },
  {
    active: 0,
    requirements: Races.PRIMORDIAL,
    slots: 4,
    bonuses: [
      {
        amountRequired: 2,
        text: 'When hit, Primordial units have a 30% chance to disarm melee attackers for 4 seconds'
      },
      {
        amountRequired: 4,
        text: 'When hit, Allies units have a 30% chance to disarm melee attackers for 4 seconds'
      }
    ]
  },
  {
    active: 0,
    requirements: Races.SAVAGE,
    slots: 6,
    bonuses: [
      {
        amountRequired: 2,
        text: 'Allies gain +10% Attack Damage'
      },
      {
        amountRequired: 4,
        text: 'Allies gain +25% Attack Damage'
      }, {
        amountRequired: 6,
        text: 'Allies gain +45% Attack Damage'
      }
    ]
  },
  {
    active: 0,
    requirements: Races.SCALED,
    slots: 4,
    bonuses: [
      {
        amountRequired: 2,
        text: 'Allies gain +30% Magic Resistance'
      },
      {
        amountRequired: 4,
        text: 'Allies gain +50% Magic Resistance'
      }
    ]
  },
  {
    active: 0,
    requirements: Races.SCRAPPY,
    slots: 6,
    bonuses: [
      {
        amountRequired: 3,
        text: 'A Random Ally is granted +15 Armor and +10 HP Regeneration'
      },
      {
        amountRequired: 6,
        text: 'Allies gain +15 Armor and +10 HP Regeneration'
      }
    ]
  },
  {
    active: 0,
    requirements: Roles.SHAMAN,
    slots: 2,
    bonuses: [
      {
        amountRequired: 2,
        text: 'A Random Enemy is turned into a Frog for 6 seconds at the start of Combat'
      }
    ]
  },
  {
    active: 0,
    requirements: Races.TROLL,
    slots: 4,
    bonuses: [
      {
        amountRequired: 2,
        text: 'Troll units gain +35 Attack Speed'
      },
      {
        amountRequired: 4,
        text: 'Troll units gain +65 Attack Speed and other Allies gain +30 Attack Speed'
      }
    ]
  },
  {
    active: 0,
    requirements: Roles.WARLOCK,
    slots: 6,
    bonuses: [
      {
        amountRequired: 2,
        text: 'Allies gain +15% Lifesteal'
      },
      {
        amountRequired: 4,
        text: 'Allies gain +30% Lifesteal'
      },
      {
        amountRequired: 6,
        text: 'Allies gain +50% Lifesteal'
      }
    ]
  },
  {
    active: 0,
    requirements: Roles.WARRIOR,
    slots: 9,
    bonuses: [
      {
        amountRequired: 3,
        text: 'Warriors gain +10 Armor'
      },
      {
        amountRequired: 6,
        text: 'Warriors gain +15 Armor'
      },
      {
        amountRequired: 9,
        text: 'Warriors gain +25 Armor'
      }
    ]
  }
];
