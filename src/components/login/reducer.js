import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "./constants";

const initialState = {
  isUserDataLoading: false,
  clientDetails: null,
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
              userDetails: action.user,
              isUserDataLoading: false,
          };
      default:
          return state;
  }
};
