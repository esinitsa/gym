import { api } from "../../api/api";
import {
  GET_CLIENTS_REQUEST
} from "./constants";
import { GET_CLIENTS_REQUEST_STRING } from "../../api/apiConstants";


const getClientsRequest = () => ({ type: GET_CLIENTS_REQUEST });
// const getClientsSuccess = ({ clients }) => ({ type: GET_CLIENTS_SUCCESS, clients, });

export const getClients = () => (dispatch) => {
  dispatch(getClientsRequest());
  return api.get(GET_CLIENTS_REQUEST_STRING)
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
        /*   authorizeApi(data.token);
          dispatch(getClientsSuccess(data));
        return getToken(data.token, dispatch); */
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        throw error;
      });
};
