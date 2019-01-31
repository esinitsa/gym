import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";
import logger from "redux-logger";

const enhancer = compose(
  applyMiddleware(thunk),
  applyMiddleware(logger)
);

export const store = createStore(reducer, enhancer);
