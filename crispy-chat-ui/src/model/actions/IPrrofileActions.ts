import { PROFILE_ACTIONS } from "../../constants/PROFILE_ACTIONS";
import { IProfile } from "../store/IProfile";

interface IProfileActionIncrement {
  type: PROFILE_ACTIONS.INCREMENT
}

interface IProfileActionDecrement {
  type: PROFILE_ACTIONS.DECREMENT
}

interface IProfileActionProfile {
  type: PROFILE_ACTIONS.SET_PROFILE,
  payload: IProfile["login"]
}

export type IProfileActions = IProfileActionIncrement | IProfileActionDecrement | IProfileActionProfile;