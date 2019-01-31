import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./constants";

const initialState = {
  isUserDataLoading: false,
  isNoInfoFromSocialNetworkRegistration: false,
  isFromTwitter: false,
  token: null,
  isTokenValid: false,
  dataFromSocialNetwork: null,
  userDetails: null,
  userProfile: null,
  isForcedLogout: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case USER_LOGIN_REQUEST:
          return {
              ...state,
              isUserDataLoading: true
          };
      case USER_LOGIN_SUCCESS:
          return {
              ...state,
              userDetails: action.user,
              isUserDataLoading: false,
              token: action.token,
              isTokenValid: true,
          };
      default:
          return state;
  }
};
