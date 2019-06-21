import { AppState } from '_app/state';
import { HeroFeatureState } from '_app/state/app.state';

export interface LineupState extends AppState {
  lineup: HeroFeatureState;
}
