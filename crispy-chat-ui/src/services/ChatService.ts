import Stomp, { Client, Message } from "stompjs";
import SockJS from "sockjs-client";
import { Nullable } from "../model/utils/Nullable";
import { http } from "./http";
import { URLs } from "../constants/URLs";

class ChatService {
  private socket: Nullable<WebSocket> = null;
  stompClient: Nullable<Client> = null;

  connect = (onConnect: () => void, onMessage: (msg: Message) => void, onDisconnect: () => void): void => {
    this.socket = new SockJS(URLs.websocket);
    const stompClient = Stomp.over(this.socket);
    this.stompClient = stompClient;
    stompClient.heartbeat.outgoing = 20;
    stompClient.heartbeat.incoming = 10;

    stompClient.connect({},
      (frame) => {
        console.log("connect, frame", frame);
        onConnect && onConnect();
        stompClient.subscribe("/topic/messages/general", (messageOutput) => {
          onMessage && onMessage(messageOutput);
        });
      },
      (frame) => {
        console.log("disconnect, frame", frame);
        onDisconnect();
      },
    );
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