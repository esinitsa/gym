import { api } from "../../api/api";
import {
  GET_CLIENTS_REQUEST,
  GET_CLIENTS_SUCCESS
} from "./constants";
import { GET_CLIENTS_REQUEST_STRING } from "../../api/apiConstants";


const getClientsRequest = () => ({ type: GET_CLIENTS_REQUEST });
const getClientsSuccess = clients  => ({ type: GET_CLIENTS_SUCCESS, clients, });

export const getClients = () => dispatch => {
  dispatch(getClientsRequest());
  return api.get(GET_CLIENTS_REQUEST_STRING)
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
        dispatch(getClientsSuccess(data));
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        throw error;
      });
};
