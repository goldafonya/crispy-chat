import { ChatStatus } from "../ChatStatus";
import { IMessage } from "../IMessage";

export interface IChat {
  status: ChatStatus;
  messages: Array<IMessage>;
}