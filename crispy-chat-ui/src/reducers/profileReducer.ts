import { PROFILE_ACTIONS } from "../constants/PROFILE_ACTIONS";
import { IActions } from "../model/actions/IActions";
import { IProfile } from "../model/store/IProfile";

const profileStore: IProfile = {
  count: 0,
  login: null
};

export const profileReducer = (store = profileStore, action: IActions): IProfile => {

  switch (action.type) {
  case PROFILE_ACTIONS.SET_PROFILE:
    return {
      ...store,
      login: action.payload
    };
  case PROFILE_ACTIONS.INCREMENT:
    return {
      ...store,
      count: store.count + 1,
    };
  case PROFILE_ACTIONS.DECREMENT:
    return {
      ...store,
      count: store.count - 1,
    };
  default: {
    return store;
  }
  }
};