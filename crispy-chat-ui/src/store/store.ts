import { createStore, applyMiddleware } from "redux";
import { reducer } from "../reducers/combineReducers";
import thunk from "redux-thunk";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  const {createLogger} = require("redux-logger");
  const logger = createLogger({
    diff: true
  });

  middlewares.push(logger);
}

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);

export { store };
