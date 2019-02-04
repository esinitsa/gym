import { api, authorizeApi } from "../../api/api";
import {
  USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,
} from "./constants";
import { REGISTER_REQUEST_STRING, LOGIN_REQUEST_STRING } from "../../api/apiConstants";

const signUpUserRequest = () => ({ type: USER_SIGNUP_REQUEST });
const signUpUserSuccess = ({ user }) => ({ type: USER_SIGNUP_SUCCESS, user, });

const loginUserRequest = () => ({ type: USER_LOGIN_REQUEST });
const loginUserSuccess = (token,  user ) => ({ type: USER_LOGIN_SUCCESS, user, token: token });

export const signUpUser = (email, password, firstName, lastName, locale) => (dispatch) => {
  dispatch(signUpUserRequest());
  return api.post(REGISTER_REQUEST_STRING, { email, password, firstName, lastName, locale })
      .then((data) => {
          return dispatch(signUpUserSuccess(data));
      })
      .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
      });
};

const getToken = (token, dispatch) => {
  return api.get("api/profile", {
  }).then( (userData) => {
    dispatch(loginUserSuccess(token, userData));
  }).catch( (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
}

export const loginUser = (login, password) => (dispatch) => {
  dispatch(loginUserRequest());
  return api.get(LOGIN_REQUEST_STRING, {
    auth: {
    username: login,
    password: password,
    }})
      .then((data) => {
          authorizeApi(data.token);
          getToken(data.token, dispatch);          
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
};
