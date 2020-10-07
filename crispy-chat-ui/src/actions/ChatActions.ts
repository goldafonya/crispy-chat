import { Dispatch } from "react";
import { IActions } from "../model/actions/IActions";
import { CHAT_ACTIONS } from "../constants/CHAT_ACTIONS";
import { ChatStatus } from "../model/ChatStatus";
import { chatService } from "../services/ChatService";
import { Message } from "stompjs";
import { IMessage } from "../model/IMessage";

export class ChatActions {
  static connection = () => async (dispatch: Dispatch<IActions>) => {

    dispatch({
      type: CHAT_ACTIONS.CHANGE_STATUS_CHAT,
      payload: ChatStatus.CONNECTION
    });

    const msgsPromise = chatService.history();

    chatService.connect(
      async () => {
        const msgs: IMessage[] = await msgsPromise;

        dispatch({
          type: CHAT_ACTIONS.RECEIVE_MESSAGE,
          payload: msgs
        });

        dispatch({
          type: CHAT_ACTIONS.CHANGE_STATUS_CHAT,
          payload: ChatStatus.OPEN
        });
      },
      (msg: Message) => {
        dispatch({
          type: CHAT_ACTIONS.RECEIVE_MESSAGE,
          payload: [JSON.parse(msg.body) as IMessage]
        });
      }
    );
  };

  static sendMsg = (msg: string) => (dispatch: Dispatch<IActions>) => {
    chatService.send(msg);
  };
}