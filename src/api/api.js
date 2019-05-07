import axios from "axios";
import { I18n } from "react-redux-i18n";
import { store } from "../boot/configureStore";
import { refreshToken } from "../components/login/actions";
import { KEYS } from "../constants/reducerTypeKeys";
import { BASE_URL } from "./../constants/index";
import { FORCE_LOGOUT } from "./../constants/stateConstants";
import {
  CONFLICT_STATUS_CODE,
  MULTIPLE_CHOICES_STATUS_CODE,
  NOT_FOUND,
  UNAUTHORIZED_STATUS_CODE
} from "./apiConstants";

const api = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  withCredentials: true,
  timeout: 15000
});

api.interceptors.response.use(
  response => {
    if (
      response.data &&
      response.data.code &&
      response.data.code >= MULTIPLE_CHOICES_STATUS_CODE
    ) {
      return Promise.reject(
        response.data.messages
          ? response.data.messages
          : I18n.t("api.incorrectResponse")
      );
    } else if (
      response.data &&
      response.data.statusCode &&
      response.data.statusCode === CONFLICT_STATUS_CODE
    ) {
      return Promise.reject(
        response.data.messages
          ? response.data.messages
          : I18n.t("api.alreadyExists")
      );
    } else if (
      response.data &&
      response.data.statusString &&
      response.data.statusString === NOT_FOUND
    ) {
      return Promise.reject(
        response.data.messages
          ? response.data.messages
          : I18n.t("api.emailNotExist")
      );
    }
    return response.data;
  },
  error => {
    if (
      error &&
      error.response &&
      error.response.status === UNAUTHORIZED_STATUS_CODE
    ) {
      const state = store.getState();
      const lastSuccessType = state.personal.lastSuccessType;
      if (!state.user.auth) {
        return Promise.reject(I18n.t("api.invalidEmailOrPassword"));
      }
      return store
        .dispatch(refreshToken(state.user.auth))
        .then(() => {
          store.dispatch({
            type: state.personal.lastRequestType
          });
          axios.request(error.config).then(response => {
            Promise.resolve(
              store.dispatch({
                type: lastSuccessType,
                [KEYS[lastSuccessType]]: response.data
              })
            );
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
