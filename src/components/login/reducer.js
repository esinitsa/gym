import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS
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
    // eslint-disable-next-line no-console
    console.log(state);
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
    default:
      return state;
  }
};
