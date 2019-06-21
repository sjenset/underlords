import { AppState } from '_app/state';
import { HeroFeatureState } from '_app/state/app.state';
import { RosterFilterFeatureState } from './filters';


export interface RosterState extends AppState, RosterFilterFeatureState {
  roster: HeroFeatureState;
  rosterFilters: RosterFilterFeatureState;
}
