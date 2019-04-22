import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS
} from "./constants";

const initialState = {
  isUserDataLoading: false,
  clientDetails: null,
  token: null,
  userProfile: null,
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
        auth: action.auth,
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
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        isUserDataLoading: true,
        isTokenValid: false
      };
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        isUserDataLoading: false,
        isTokenValid: true
      };
    }
    default:
      return state;
  }
};
