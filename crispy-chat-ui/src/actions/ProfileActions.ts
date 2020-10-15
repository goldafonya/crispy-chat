import { ProfileService } from "../store/ProfileService";
import { GlobalActions } from "./GlobalActions";
import { Dispatch } from "redux";

export class ProfileActions {

  static auth = (login: string, password: string) => async (dispatch: Dispatch) => {

    const response: string = await ProfileService.login(login, password);

    console.log("response", response);

    GlobalActions.init()(dispatch);
  };
}