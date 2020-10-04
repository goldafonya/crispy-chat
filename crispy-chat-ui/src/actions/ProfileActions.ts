import { Dispatch } from "react";
import { IActions } from "../model/actions/IActions";
import { ProfileService } from "../store/ProfileService";
import { GlobalActions } from "./GlobalActions";

export class ProfileActions {

  static auth = (login: string, password: string) => async (dispatch: Dispatch<IActions>) => {

    const response: string = await ProfileService.login(login, password);

    console.log("response", response);

    GlobalActions.init()(dispatch);
  };
}