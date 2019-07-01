import {
  GET_MY_CLIENTS_REQUEST,
  GET_MY_CLIENTS_SUCCESS,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  GET_NOTES_AUTHOR_BY_ID_REQUEST,
  GET_NOTES_AUTHOR_BY_ID_SUCCESS,
  ADD_INTERNAL_RECORD_SUCCESS,
  SUBSCRIPTION_VISIT_REQUEST,
  SUBSCRIPTION_VISIT_SUCCESS,
  ADD_INTERNAL_RECORD_REQUEST,
  MAKE_APPOINTMENT_REQUEST,
  MAKE_APPOINTMENT_SUCCESS,
  GET_USERS_BY_ROLE_REQUEST,
  GET_USERS_BY_ROLE_SUCCESS,
} from "./constants";

const initialState = {
  isDataLoading: false,
  clients: null,
  trainers: null,
  lastRequestType: null,
  lastSuccessType: null
};

export const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_CLIENTS_REQUEST:
      return {
        ...state,
        isDataLoading: true,
        lastRequestType: GET_MY_CLIENTS_REQUEST,
        lastSuccessType: GET_MY_CLIENTS_SUCCESS
      };
    case GET_MY_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.clients,
        isDataLoading: false
      };
    case GET_USERS_BY_ROLE_REQUEST:
      return {
        ...state,
        isDataLoading: true,
        lastRequestType: GET_USERS_BY_ROLE_REQUEST,
        lastSuccessType: GET_USERS_BY_ROLE_SUCCESS
      };
    case GET_USERS_BY_ROLE_SUCCESS:
      return {
        ...state,
        usersByRole: action.usersByRole,
        isDataLoading: false
      };
    case GET_USER_BY_ID_REQUEST:
      return {
        ...state,
        isDataLoading: true,
        lastRequestType: GET_USER_BY_ID_REQUEST,
        lastSuccessType: GET_USER_BY_ID_SUCCESS
      };
    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        user: action.user,
        isDataLoading: false
      };
    case GET_NOTES_AUTHOR_BY_ID_REQUEST:
      return {
        ...state,
        author: action.author,
        lastRequestType: GET_NOTES_AUTHOR_BY_ID_REQUEST,
        lastSuccessType: GET_NOTES_AUTHOR_BY_ID_SUCCESS,
        isDataLoading: true
      };
    case GET_NOTES_AUTHOR_BY_ID_SUCCESS:
      return {
        ...state,
        author: action.author,
        isDataLoading: false
      };
    case SUBSCRIPTION_VISIT_REQUEST:
      return {
        ...state,
        isDataLoading: true,
        lastRequestType: SUBSCRIPTION_VISIT_REQUEST,
        lastSuccessType: SUBSCRIPTION_VISIT_SUCCESS
      };
    case SUBSCRIPTION_VISIT_SUCCESS:
      return {
        ...state,
        user: action.user,
        isDataLoading: false
      };
    case ADD_INTERNAL_RECORD_REQUEST:
      return {
        ...state,
        isDataLoading: true,
        lastRequestType: ADD_INTERNAL_RECORD_REQUEST,
        lastSuccessType: ADD_INTERNAL_RECORD_SUCCESS
      };
    case ADD_INTERNAL_RECORD_SUCCESS:
      return {
        ...state,
        isDataLoading: false
      };
    case MAKE_APPOINTMENT_REQUEST:
      return {
        ...state,
        isDataLoading: true,
        lastRequestType: ADD_INTERNAL_RECORD_REQUEST,
        lastSuccessType: ADD_INTERNAL_RECORD_SUCCESS
      };
    case MAKE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        isDataLoading: false
      };
    default:
      return state;
  }
};
