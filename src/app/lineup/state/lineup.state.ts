import { AppState } from '@app/state';
import { HeroFeatureState } from '@app/state/app.state';

export interface LineupState extends AppState {
  lineup: HeroFeatureState;
}
