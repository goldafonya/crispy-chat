import { ChatStatus } from "../model/ChatStatus";
import { chatService } from "../services/ChatService";
import { Message } from "stompjs";
import { IMessage } from "../model/IMessage";
import { chatActions } from "../reducers/chatReducer";
import { Dispatch } from "redux";

export class ChatActions {
  static connection = () => async (dispatch: Dispatch) => {

    dispatch(chatActions.changeStatusChat(ChatStatus.CONNECTION));

    const msgsPromise = chatService.history();

    chatService.connect(
      async () => {
        const msgs: IMessage[] = await msgsPromise;

        dispatch(chatActions.receiveMessage(msgs));

        dispatch(chatActions.changeStatusChat(ChatStatus.OPEN));
      },
      (msg: Message) => {
        dispatch(chatActions.receiveMessage([JSON.parse(msg.body) as IMessage]));
      },
      () => {
        console.log("onDisconnect");
        dispatch(chatActions.changeStatusChat(ChatStatus.CLOSED));
      },
    );
  };

  static sendMsg = (msg: string) => (dispatch: Dispatch) => {
    chatService.send(msg);
  };
}