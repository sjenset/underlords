import { AppState } from '@app/state';
import { FeatureState } from '@app/state/app.state';
import { RosterFilterState, RosterFilterFeatureState } from './filters';


export interface RosterState extends AppState, RosterFilterState {
  roster: FeatureState;
  rosterFilters: RosterFilterFeatureState;
}
