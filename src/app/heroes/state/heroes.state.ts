import { AppState } from '@app/state';

import { Hero } from '@shared/data/heroes';

export interface HeroesState {
    heroes: Hero[];
    lineup: Hero[];
    error?: string;
}

export const initialState: HeroesState = {
    heroes: [],
    lineup: []
}


export interface State extends AppState.State {
    heroes: HeroesState;
}
