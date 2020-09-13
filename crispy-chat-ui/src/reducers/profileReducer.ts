import { PROFILE_ACTIONS } from "../constants/PROFILE_ACTIONS";
import { IActions } from "../model/actions/IActions";
import { IProfile } from "../model/store/IProfile";

const profileStore: IProfile = {
  count: 0
};

export const profileReducer = (store = profileStore, action: IActions) => {

  switch (action.type) {
  case PROFILE_ACTIONS.INCREMENT:
    return {
      count: store.count + 1
    };
  case PROFILE_ACTIONS.DECREMENT:
    return {
      count: store.count - 1
    };
  default: {
    return store;
  }
  }
};