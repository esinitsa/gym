import {
  GET_CLIENTS_REQUEST,
  GET_CLIENTS_SUCCESS,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS
} from "./constants";

const initialState = {
  isDataLoading: false,
  clients: null,
  trainers: null,
};

export const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS_REQUEST:
      return {
        ...state,
        isDataLoading: true
      };
    case GET_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.clients,
        isDataLoading: false
      };
      case GET_USER_BY_ID_REQUEST:
      return {
        ...state,
        isDataLoading: true
      };
    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        user: action.user,
        isDataLoading: false
      };
    default:
      return state;
  }
};
