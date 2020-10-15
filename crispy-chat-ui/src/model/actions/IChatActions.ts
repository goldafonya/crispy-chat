import { IMessage } from "../IMessage";
import { ChatStatus } from "../ChatStatus";

export interface IChatActionsReceiveMessage {
  type: "RECEIVE_MESSAGE",
  payload: Array<IMessage>
}

export interface IChatActionsChangeStatus {
  type: "CHANGE_STATUS_CHAT",
  payload: ChatStatus
}

export type IChatActions =
  IChatActionsReceiveMessage
  | IChatActionsChangeStatus;