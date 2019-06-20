import { AppState } from '@app/state';
import { HeroFeatureState } from '@app/state/app.state';


export interface RosterState extends AppState {
  roster: HeroFeatureState;
}
