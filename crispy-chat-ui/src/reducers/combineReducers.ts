import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { IStore } from "../model/store/IStore";
import { globalReducer } from "./globalReducer";
import { chatReducer } from "./chatReducer";

export const reducer = combineReducers<IStore>({
  chat: chatReducer,
  profile: profileReducer,
  global: globalReducer
});