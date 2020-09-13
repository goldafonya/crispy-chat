import { createStore, applyMiddleware } from "redux";
import { reducer } from "../reducers/combineReducers";
import { createLogger } from "redux-logger";

const logger = createLogger({
  diff: true
});

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

export { store };
