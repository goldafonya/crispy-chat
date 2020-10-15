import { IGlobal } from "../model/store/IGlobal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const globalStore: IGlobal = {
  auth: null
};

const globalSlice = createSlice({
  name: "global",
  initialState: globalStore,
  reducers: {
    init(store, action: PayloadAction<undefined>) {
      return {
        ...store,
        auth: true
      };
    },
    logout(store, action: PayloadAction<undefined>) {
      return {
        ...store,
        auth: false
      };
    }
  }
});

const {actions, reducer} = globalSlice;

export {
  globalSlice,
  actions as globalAction,
  reducer as globalReducer
};