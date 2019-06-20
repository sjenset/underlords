import { AppState } from '@app/state';
import { FeatureState } from '@app/state/app.state';

export interface LineupState extends AppState {
  lineup: FeatureState;
}

