import { api } from "../../api/api";
import {
  GET_CLIENTS_REQUEST,
  GET_CLIENTS_SUCCESS,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
} from "./constants";
import { GET_CLIENTS_REQUEST_STRING, GET_USER_BY_ID_REQUEST_STRING} from "../../api/apiConstants";


const getClientsRequest = () => ({ type: GET_CLIENTS_REQUEST });
const getClientsSuccess = clients  => ({ type: GET_CLIENTS_SUCCESS, clients, });

const getUserRequest = () => ({ type: GET_USER_BY_ID_REQUEST });
const getUserSuccess = user  => ({ type: GET_USER_BY_ID_SUCCESS, user, });

export const getClients = () => dispatch => {
  dispatch(getClientsRequest());
  return api.get(GET_CLIENTS_REQUEST_STRING)
      .then((data) => {
        dispatch(getClientsSuccess(data));
        return data;
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        throw error;
      });
};


export const getUserById = id => dispatch => {
  dispatch(getUserRequest());
  return api.get(GET_USER_BY_ID_REQUEST_STRING, {
      params: {
        id: id,
      }
    })
      .then((data) => {
        dispatch(getUserSuccess(data));
        return data;
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
};

