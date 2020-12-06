import Stomp, { Client, Message } from "stompjs";
import SockJS from "sockjs-client";
import { Nullable } from "../model/utils/Nullable";
import { http } from "./http";
import { URLs } from "../constants/URLs";

class ChatService {
  private socket: Nullable<WebSocket> = null;
  stompClient: Nullable<Client> = null;

  connect = (sucCb?: () => void, subCb?: (msg: Message) => void): void => {
    this.socket = new SockJS(URLs.websocket);
    this.stompClient = Stomp.over(this.socket);

    this.stompClient.connect({}, (frame) => {
      sucCb && sucCb();
      this.stompClient!.subscribe("/topic/messages", (messageOutput) => {
        subCb && subCb(messageOutput);
      });
    });
  };

  send = (msg: string) => {
    this.stompClient!.send("/channel/chat/general", {},
      JSON.stringify({"message": msg}));
  };

  history = async () => {
    const response = await http.get(URLs.getMessages);

    return response.data;
  };

}

const chatServiceInstance = new ChatService();

export { chatServiceInstance as chatService };