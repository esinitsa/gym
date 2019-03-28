import {
  GET_MY_CLIENTS_REQUEST,
  GET_MY_CLIENTS_SUCCESS,
  GET_ALL_CLIENTS_REQUEST,
  GET_ALL_CLIENTS_SUCCESS,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  SUBSCRIPTION_VISIT_REQUEST,
  SUBSCRIPTION_VISIT_SUCCESS,
} from "./constants";

const initialState = {
  isDataLoading: false,
  clients: null,
  trainers: null,
};

export const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_CLIENTS_REQUEST:
      return {
        ...state,
        isDataLoading: true
      };
    case GET_MY_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.clients,
        isDataLoading: false
      };
    case GET_ALL_CLIENTS_REQUEST:
      return {
        ...state,
        isDataLoading: true
      };
    case GET_ALL_CLIENTS_SUCCESS:
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
    case SUBSCRIPTION_VISIT_REQUEST:
      return {
        ...state,
        isDataLoading: true
      };
    case SUBSCRIPTION_VISIT_SUCCESS:
      return {
        ...state,
        user: action.user,
        isDataLoading: false
      };
    case "FAIL":
      return {
        ...state,
        isDataLoading: false,
        lastRequest: action.func
      };
    default:
      return state;
  }
};
