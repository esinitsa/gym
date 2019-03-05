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

const initialState = {
  isUserDataLoading: false,
  clientDetails: null,
  isTokenValid: false,
  token: null,
  userProfile: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        isUserDataLoading: true
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        userProfile: action.user,
        isUserDataLoading: false
      };
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isUserDataLoading: true
      };
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        userProfile: action.user,
        isUserDataLoading: false,
        token: action.token,
        isTokenValid: true
      };
    }
    case USER_LOGOUT_REQUEST:
    return {
        ...state,
        isUserDataLoading: true
    };
    case USER_LOGOUT_SUCCESS:
        return initialState;
    case TOKEN_VALID:
      return {
        ...state,
        isUserDataLoading: false,
        isTokenValid: true
      };
    case TOKEN_INVALID:
      return {
        ...state,
        isUserDataLoading: false,
        isTokenValid: false
      };
    case TOKEN_VERIFY_REQUEST:
      return {
        ...state,
        isUserDataLoading: true
      };
    default:
      return state;
  }
};
