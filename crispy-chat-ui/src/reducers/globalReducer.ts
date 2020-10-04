import { IActions } from "../model/actions/IActions";
import { IGlobal } from "../model/store/IGlobal";
import { GLOBAL_ACTIONS } from "../constants/GLOBAL_ACTIONS";

const globalStore: IGlobal = {
  auth: null
};

export const globalReducer = (store = globalStore, action: IActions): IGlobal => {

  switch (action.type) {
  case GLOBAL_ACTIONS.INIT:
    return {
      ...store,
      auth: true
    };

  case GLOBAL_ACTIONS.LOGOUT:
    return {
      ...store,
      auth: false
    };
  default: {
    return store;
  }
  }
};