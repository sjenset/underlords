import { AppState } from '@app/state';
import { FeatureState } from '@app/state/app.state';


export interface RosterState extends AppState {
  roster: FeatureState;
}
