import { ProfileService } from "../store/ProfileService";
import { IActions } from "../model/actions/IActions";
import { Dispatch } from "react";
import { GLOBAL_ACTIONS } from "../constants/GLOBAL_ACTIONS";

class GlobalActions {
  init = () => async (dispatch: Dispatch<IActions>) => {
    try {
      const username = await ProfileService.getProfile();

      dispatch({
        type: GLOBAL_ACTIONS.INIT,
      });
    } catch (e) {
      dispatch({
        type: GLOBAL_ACTIONS.LOGOUT
      });
    }
  };

  static logout = () => async (dispatch: Dispatch<IActions>) => {
    await ProfileService.logout();
    dispatch({
      type: GLOBAL_ACTIONS.LOGOUT
    });
  };
}

const globalActionsInstance = new GlobalActions();

export { globalActionsInstance as GlobalActions };