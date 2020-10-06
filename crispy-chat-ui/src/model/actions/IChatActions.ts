import { CHAT_ACTIONS } from "../../constants/CHAT_ACTIONS";
import { IMessage } from "../IMessage";
import { ChatStatus } from "../ChatStatus";

interface IChatActionsReceiveMessage {
  type: CHAT_ACTIONS.RECEIVE_MESSAGE,
  payload: Array<IMessage>
}

interface IChatActionsChangeStatus {
  type: CHAT_ACTIONS.CHANGE_STATUS_CHAT,
  payload: ChatStatus
}

export type IChatActions =
  IChatActionsReceiveMessage
  | IChatActionsChangeStatus;