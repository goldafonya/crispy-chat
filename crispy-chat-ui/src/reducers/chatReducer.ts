import { IChat } from "../model/store/IChat";
import { ChatStatus } from "../model/ChatStatus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "../model/IMessage";

const chatStore: IChat = {
  status: ChatStatus.NULL,
  messages: []
};

const chatSlice = createSlice({
  name: "chat",
  initialState: chatStore,
  reducers: {
    changeStatusChat(store, action: PayloadAction<ChatStatus>) {
      return {
        ...store,
        status: action.payload
      };
    },
    receiveMessage(store, action: PayloadAction<Array<IMessage>>) {
      return {
        ...store,
        messages: [...store.messages, ...action.payload],
      };
    }
  },
});
const {actions, reducer} = chatSlice;
export {
  chatSlice,
  actions as chatActions,
  reducer as chatReducer
};