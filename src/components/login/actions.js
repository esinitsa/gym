/* eslint-disable no-console */
import {
  USER_LOGIN_REQUEST
} from "./constants";

const loginUserRequest = () => ({ type: USER_LOGIN_REQUEST });

export const loginUser = (login, password) => (dispatch) => {
  dispatch(loginUserRequest());
  console.log(login);
  console.log(password);
};
