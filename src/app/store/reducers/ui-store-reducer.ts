import * as _ from 'lodash';
import {INITIAL_UI_STATE, UiState} from '../ui-state';
export function uiStateReducer(state: UiState = INITIAL_UI_STATE, action) {
  switch (action.type) {

    case 'ERROR_OCCURRED_ACTION': {
      const newState: UiState = _.clone(state);
      newState.errorMessage = action.payload;
      return newState;
    }

    case 'CLEAR_MESSAGE_ACTION': {
      const newState: UiState = _.clone(state);
      newState.errorMessage = '';
      return newState;
    }

    case 'SYSTEM_INFO_LOADED_ACTION': {
      const newState: UiState = _.clone(state);
      const newSystemInfo = _.clone(newState.systemInfo);
      newSystemInfo.rootUrl = action.payload.rootUrl;
      newSystemInfo.currentVersion = action.payload.currentVersion;
      newSystemInfo.loaded = true;
      newState.systemInfo = newSystemInfo;
      return newState;
    }

    case 'CURRENT_DASHBOARD_CHANGE_ACTION': {
      const newState: UiState = _.clone(state);
      newState.currentDashboard = action.payload;
      return newState;
    }

    default:
      return state;
  }
}