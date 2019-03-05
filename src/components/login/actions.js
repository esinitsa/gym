import { api, authorizeApi } from "../../api/api";
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  TOKEN_VALID,
  TOKEN_INVALID,
  TOKEN_VERIFY_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
} from "./constants";
import {
  REGISTER_REQUEST_STRING,
  LOGIN_REQUEST_STRING,
  GET_PROFILE_REQUEST_STRING,
  CHECK_EMAIL_REQUEST_STRING,
  CHECK_ACTIVE_REQUEST_STRING
} from "../../api/apiConstants";


const signUpUserRequest = () => ({ type: USER_SIGNUP_REQUEST });
const signUpUserSuccess = user => ({ type: USER_SIGNUP_SUCCESS, user, });

const loginUserRequest = () => ({ type: USER_LOGIN_REQUEST });
const loginUserSuccess = (token,  user ) => ({ type: USER_LOGIN_SUCCESS, user, token: token });

const userLogOutRequest = () => ({ type: USER_LOGOUT_REQUEST });
const userLogOutSuccess = () => ({ type: USER_LOGOUT_SUCCESS });

const tokenIsValid = () => ({ type: TOKEN_VALID });
const tokenIsInvalid = () => ({ type: TOKEN_INVALID });
const tokenVerifyRequest = () => ({ type: TOKEN_VERIFY_REQUEST });

const signUpUserValidData = (email, password, firstName, lastName, locale, dispatch) => {
  return  api.post(REGISTER_REQUEST_STRING, { email, password, firstName, lastName, locale })
  .then( data => {
      return dispatch(signUpUserSuccess(data));
  })
  .catch( error => {
      throw error;
  });
};

export const signUpUser = (email, password, firstName, lastName, locale) => dispatch => {
  dispatch(signUpUserRequest());
  return api.post(CHECK_EMAIL_REQUEST_STRING , { email }).then( () =>
        signUpUserValidData(email, password, firstName, lastName, locale, dispatch)
        ).catch( error => {
    throw error;
  });
};

const getToken = (token, dispatch) => {
  return api.get(GET_PROFILE_REQUEST_STRING, {
  }).then( userData => {
    return dispatch(loginUserSuccess(token, userData));
  }).catch( error => {
    // eslint-disable-next-line no-console
    console.log(error);
    throw error;
  });
};

const loginActiveUser = (login, password, dispatch) => {
  return api.get(LOGIN_REQUEST_STRING, {
    auth: {
    username: login,
    password: password,
    }})
      .then( data => {
        authorizeApi(data.token);
        return getToken(data.token, dispatch);
      })
      .catch( error => {
        // eslint-disable-next-line no-console
        console.log(error);
        throw error;
      });
    };

export const loginUser = (login, password) => dispatch => {
  dispatch(loginUserRequest());
  return api.post(CHECK_ACTIVE_REQUEST_STRING , { email: login }).then( () =>
  loginActiveUser(login, password, dispatch)
  ).catch( error => {
  throw error;}
  );
};


export const validateToken = token => dispatch => {
  dispatch(tokenVerifyRequest());
  if (true) { // call API to validate token there, assuming the token is valid as for now
      dispatch(tokenIsValid());
      authorizeApi(token);
  } else {
      dispatch(tokenIsInvalid());
      // retrieve new token
      authorizeApi(/* new token */);
  }
};

export const userLogOut = () => (dispatch) => {
  dispatch(userLogOutRequest());
  authorizeApi();
  dispatch(userLogOutSuccess());
};
