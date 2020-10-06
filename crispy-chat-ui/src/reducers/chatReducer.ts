import { IActions } from "../model/actions/IActions";
import { IChat } from "../model/store/IChat";
import { ChatStatus } from "../model/ChatStatus";
import { CHAT_ACTIONS } from "../constants/CHAT_ACTIONS";

const chatStore: IChat = {
  status: ChatStatus.NULL,
  messages: []
};

export const chatReducer = (store = chatStore, action: IActions): IChat => {

  switch (action.type) {
  case CHAT_ACTIONS.CHANGE_STATUS_CHAT:
    return {
      ...store,
      status: action.payload
    };
  case CHAT_ACTIONS.RECEIVE_MESSAGE:
    return {
      ...store,
      messages: [...store.messages, ...action.payload],
    };
  default: {
    return store;
  }
  }
};