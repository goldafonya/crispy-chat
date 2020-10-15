import { ProfileService } from "../store/ProfileService";
import { globalAction } from "../reducers/globalReducer";
import { Dispatch } from "redux";

class GlobalActions {
  init = () => async (dispatch: Dispatch) => {
    try {
      const username = await ProfileService.getProfile();

      dispatch(globalAction.init());
    } catch (e) {
      dispatch(globalAction.logout());
    }
  };

  static logout = () => async (dispatch: Dispatch) => {
    await ProfileService.logout();
    dispatch(globalAction.logout());
  };
}

const globalActionsInstance = new GlobalActions();

export { globalActionsInstance as GlobalActions };