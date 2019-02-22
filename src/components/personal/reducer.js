import {
  GET_CLIENTS_REQUEST,
  GET_CLIENTS_SUCCESS
} from "./constants";

const initialState = {
  isDataLoading: false,
  clientDetails: null,
  isTokenValid: false,
  token: null
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
    default:
      return state;
  }
};
