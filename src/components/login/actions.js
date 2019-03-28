import { api, authorizeApi } from "../../api/api";
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
} from "./constants";
import {
  REGISTER_REQUEST_STRING,
  TOKEN_REQUEST_STRING,
  GET_PROFILE_REQUEST_STRING,
  CHECK_EMAIL_REQUEST_STRING,
  CHECK_ACTIVE_REQUEST_STRING
} from "../../api/apiConstants";


const signUpUserRequest = () => ({ type: USER_SIGNUP_REQUEST });
const signUpUserSuccess = user => ({ type: USER_SIGNUP_SUCCESS, user });

const loginUserRequest = () => ({ type: USER_LOGIN_REQUEST });
const loginUserSuccess = (token, auth, user) => ({
  type: USER_LOGIN_SUCCESS,
  user,
  auth,
  token: token
});

const userLogOutRequest = () => ({ type: USER_LOGOUT_REQUEST });
const userLogOutSuccess = () => ({ type: USER_LOGOUT_SUCCESS });

const refreshTokenRequest = () => ({ type: REFRESH_TOKEN_REQUEST });
const refreshTokenSuccess = () => ({ type: REFRESH_TOKEN_SUCCESS });

const signUpUserValidData = (user, dispatch) => {
  return api
    .post(REGISTER_REQUEST_STRING, user)
    .then(data => {
      return dispatch(signUpUserSuccess(data));
    })
    .catch(error => {
      throw error;
    });
};

export const signUpUser = user => dispatch => {
  dispatch(signUpUserRequest());
  return api
    .post(CHECK_EMAIL_REQUEST_STRING, { email :user.email })
    .then(() =>
      signUpUserValidData(
        user,
        dispatch
      )
    )
    .catch(error => {
      throw error;
    });
};

const loginActiveUser = (token, auth, dispatch) => {
  return api
    .get(GET_PROFILE_REQUEST_STRING, {})
    .then(userData => {
      return dispatch(loginUserSuccess(token, auth , userData));
    })
    .catch(error => {
      throw error;
    });
};

const getToken = (email, password, dispatch) => {
    const BASIC_AUTH = {
      username: email,
      password: password
    };
  return api
    .get(TOKEN_REQUEST_STRING, {auth : BASIC_AUTH})
    .then(data => {
      authorizeApi(data.token);
      return loginActiveUser(data.token, BASIC_AUTH , dispatch);
    })
    .catch(error => {
      throw error;
    });
};

export const loginUser = (email, password) => dispatch => {
  dispatch(loginUserRequest());
  return api
    .post(CHECK_ACTIVE_REQUEST_STRING, { email })
    .then(() => getToken(email, password, dispatch))
    .catch(error => {
      throw error;
    });
};

export const refreshToken = auth => dispatch => {
  dispatch(refreshTokenRequest());
  return api
  .get(TOKEN_REQUEST_STRING, { auth })
  .then( data => {
    authorizeApi(data.token);
    dispatch(refreshTokenSuccess(data.token));
  })
  .catch( error => {
    console.log(error);
  });
};

export const userLogOut = () => dispatch => {
  dispatch(userLogOutRequest());
  authorizeApi();
  dispatch(userLogOutSuccess());
};
