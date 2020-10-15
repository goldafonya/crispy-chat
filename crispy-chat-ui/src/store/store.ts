import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { profileSlice } from "../reducers/profileReducer";
import { globalSlice } from "../reducers/globalReducer";
import { chatSlice } from "../reducers/chatReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const middlewares: any = [];
if (process.env.NODE_ENV === "development") {
  const {createLogger} = require("redux-logger");
  const logger = createLogger({
    diff: true,
  });

  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    global: globalSlice.reducer,
    chat: chatSlice.reducer,
  },
  middleware: [...getDefaultMiddleware(), ...middlewares],
});

export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;