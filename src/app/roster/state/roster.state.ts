import { AppState } from '@app/state';
import { HeroFeatureState } from '@app/state/app.state';
import { RosterFilterFeatureState } from './filters';


export interface RosterState extends AppState, RosterFilterFeatureState {
  roster: HeroFeatureState;
  rosterFilters: RosterFilterFeatureState;
}
