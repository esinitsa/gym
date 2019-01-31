import api from "../../api/api";
import {
  USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS
} from "./constants";
import { REGISTER_REQUEST_STRING } from "../../api/apiConstants";

const signUpUserRequest = () => ({ type: USER_SIGNUP_REQUEST });
const signUpUserSuccess = ({ user }) => ({ type: USER_SIGNUP_SUCCESS, user, });

export const signUpUser = (email, password, firstName, lastName, locale) => (dispatch) => {
  dispatch(signUpUserRequest());
  return api.post(REGISTER_REQUEST_STRING, { email, password, firstName, lastName, locale })
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log("here");
          return dispatch(signUpUserSuccess(data));
      })
      .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
      });
};
