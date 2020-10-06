import { Dispatch } from "react";
import { IActions } from "../model/actions/IActions";
import { CHAT_ACTIONS } from "../constants/CHAT_ACTIONS";
import { ChatStatus } from "../model/ChatStatus";

export class ChatActions {
  static connection = () => (dispatch: Dispatch<IActions>) => {

    dispatch({
      type: CHAT_ACTIONS.CHANGE_STATUS_CHAT,
      payload: ChatStatus.CONNECTION
    });

    setTimeout(() => {
      dispatch({
        type: CHAT_ACTIONS.CHANGE_STATUS_CHAT,
        payload: ChatStatus.OPEN
      });
    }, 1000);
  };

  static sendMsg = (msg: string) => (dispatch: Dispatch<IActions>) => {

    dispatch({
      type: CHAT_ACTIONS.RECEIVE_MESSAGE,
      payload: [{text: msg}]
    });
  };
}