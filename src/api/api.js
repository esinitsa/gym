import axios from "axios";
import { BASE_URL } from "./../constants/index";
import { FORCE_LOGOUT } from "./../constants/stateConstants";
import { store } from "../boot/configureStore";
import { refreshToken } from "../components/login/actions";
import { KEYS } from "../constants/reducerTypeKeys";

const api = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  withCredentials: true,
  timeout: 15000
});

api.interceptors.response.use(
  response => {
    if (response.data && response.data.code && response.data.code >= 300) {
      return Promise.reject(
        response.data.messages ? response.data.messages : "incorrect response"
      );
    } else if (
      response.data &&
      response.data.statusCode &&
      response.data.statusCode === 409
    ) {
      return Promise.reject(
        response.data.messages ? response.data.messages : "Already exists"
      );
    } else if (
      response.data &&
      response.data.statusString &&
      response.data.statusString === "NOT_FOUND"
    ) {
      return Promise.reject(
        response.data.messages
          ? response.data.messages
          : "Please active account"
      );
    }
    return response.data;
  },
  error => {
    if (error && error.response && error.response.status === 401) {
      const lastSuccessType = store.getState().personal.lastSuccessType;
      return store
        .dispatch(refreshToken(store.getState().user.auth))
        .then(() => {
          store.dispatch({
            type: store.getState().personal.lastRequestType
          });
          axios.request(error.config).then(response => {
            Promise.resolve(store.dispatch({
              type: lastSuccessType,
              [KEYS[lastSuccessType]] : response.data
            }));
          });
        })
        .catch(() => Promise.reject(FORCE_LOGOUT));
    }
    return Promise.reject(error);
  }
);

const authorizeApi = (token = null) => {
  api.defaults.headers.common["FCB-Api-Token"] = token ? token : null;
};

export { api, authorizeApi };
