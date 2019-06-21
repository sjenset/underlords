import { AppState } from '_app/state';
import { AllianceFeatureState } from '_app/state/app.state';

export interface AlliancesState extends AppState {
  races: AllianceFeatureState;
  roles: AllianceFeatureState;
}
