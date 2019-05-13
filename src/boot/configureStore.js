import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import reducer from "../reducers";
import logger from "redux-logger";

const enhancer = compose(
  applyMiddleware(thunk),
  applyMiddleware(logger)
);

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
