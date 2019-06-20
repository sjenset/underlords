export interface Bonus {
  amountRequired: number;
  text: string;
}

export interface Alliance {
  active: number;
  requirements: string;
  slots: number;
  bonuses: Bonus[];
  maxAllowed?: number;
}
