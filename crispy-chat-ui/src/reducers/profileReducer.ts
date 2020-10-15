import { IProfile } from "../model/store/IProfile";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const profileStore: IProfile = {
  login: null
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profileStore,
  reducers: {
    setProfile(store, action: PayloadAction<IProfile["login"]>) {
      return {
        ...store,
        login: action.payload
      };
    }
  }
});

const {actions, reducer} = profileSlice;

export {
  actions as profileAction,
  reducer as profileReducer,
  profileSlice
};