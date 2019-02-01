import axios from "axios";
import { BASE_URL } from "./../constants/index";
import { FORCE_LOGOUT } from "./../constants/stateConstants";

const api = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  withCredentials: true,
  timeout: 15000,
});



api.interceptors.response.use(
  (response) => {
      if (response.data && response.data.code && response.data.code >= 300) {
          return Promise.reject(response.data.messages ?
              response.data.messages : "incorrect response");
      }
      // eslint-disable-next-line no-console
      console.log(response.data);
      return response.data;
  },
  (error) => {
      if (error && error.response && error.response.status === 401) {
          return Promise.reject(FORCE_LOGOUT);
      }
      // eslint-disable-next-line no-console
      console.log(error);
      return Promise.reject(error);
  });

  const authorizeApi = (token = null) => {
    api.defaults.headers.common.Authorization = token ? "Bearer " + token : null;
};

  export { api, authorizeApi };
