import { AppState, InitialAllianceFeatureState, AllianceFeatureState } from '@app/state/app.state';
import { AlliancesActions, AlliancesActionTypes } from './alliances.actions';
import { AllianceAdapter } from './alliances.adapter';

export function alliancesReducer(state: AllianceFeatureState = InitialAllianceFeatureState, action: AlliancesActions): AppState {
  switch (action.type) {
    case AlliancesActionTypes.Load:
      return AllianceAdapter.addAll(action.payload.alliances, state);
    case AlliancesActionTypes.UpdateAlliance:
      return AllianceAdapter.updateOne(action.payload.alliance, state);
    default: {
      return state;
    }
  }
}
