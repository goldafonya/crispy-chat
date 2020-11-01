import { ProfileService } from "../store/ProfileService";
import { globalAction } from "../reducers/globalReducer";
import { Dispatch } from "redux";

class GlobalActions {
  init = () => async (dispatch: Dispatch) => {
    try {
      await ProfileService.getProfile();

      dispatch(globalAction.init());
    } catch (e) {
      dispatch(globalAction.logout());
    }
  };

  logout = () => async (dispatch: Dispatch) => {
    await ProfileService.logout();
    dispatch(globalAction.logout());
  };

  auth = (login: string, password: string) => async (dispatch: Dispatch) => {

    const response: string = await ProfileService.login(login, password);

    console.log("response", response);

    this.init()(dispatch);
  };
}

const globalActionsInstance = new GlobalActions();

export { globalActionsInstance as GlobalActions };