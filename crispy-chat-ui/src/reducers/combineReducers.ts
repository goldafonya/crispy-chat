import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { IStore } from "../model/store/IStore";

export const reducer = combineReducers<IStore>({ profile: profileReducer });