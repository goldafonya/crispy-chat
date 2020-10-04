import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { IStore } from "../model/store/IStore";
import { globalReducer } from "./globalReducer";

export const reducer = combineReducers<IStore>({profile: profileReducer, global: globalReducer});