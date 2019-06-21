import { AppState } from '@app/state';
import { FeatureState } from '@app/state/app.state';
import { RosterFilterFeatureState } from './filters';


export interface RosterState extends AppState, RosterFilterFeatureState {
  roster: FeatureState;
  rosterFilters: RosterFilterFeatureState;
}
