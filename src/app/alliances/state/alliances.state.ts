import { AppState } from '@app/state';
import { AllianceFeatureState } from '@app/state/app.state';

export interface AlliancesState extends AppState {
  races: AllianceFeatureState;
  roles: AllianceFeatureState;
}
