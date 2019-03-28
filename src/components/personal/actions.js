/* eslint-disable no-console */
import { api } from "../../api/api";
import {
  GET_MY_CLIENTS_REQUEST,
  GET_MY_CLIENTS_SUCCESS,
  GET_ALL_CLIENTS_REQUEST,
  GET_ALL_CLIENTS_SUCCESS,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  SUBSCRIPTION_VISIT_REQUEST,
  SUBSCRIPTION_VISIT_SUCCESS
} from "./constants";
import {
  GET_MY_CLIENTS_REQUEST_STRING,
  GET_ALL_CLIENTS_REQUEST_STRING,
  GET_USER_BY_ID_REQUEST_STRING,
  PROCESS_SUBSCRIPTION_VISIT,
  ADD_INTERNAL_RECORD
} from "../../api/apiConstants";

const getMyClientsRequest = () => ({ type: GET_MY_CLIENTS_REQUEST });
const getMyClientsSuccess = clients => ({ type: GET_MY_CLIENTS_SUCCESS, clients });

const getAllClientsRequest = () => ({ type: GET_ALL_CLIENTS_REQUEST });
const getAllClientsSuccess = clients => ({ type: GET_ALL_CLIENTS_SUCCESS, clients });

const getUserRequest = () => ({ type: GET_USER_BY_ID_REQUEST });
const getUserSuccess = user => ({ type: GET_USER_BY_ID_SUCCESS, user });

const subscriptionVisitRequest = () => ({ type: SUBSCRIPTION_VISIT_REQUEST });
const subscriptionVisitSuccess = user => ({
  type: SUBSCRIPTION_VISIT_SUCCESS,
  user
});

const addInternalRecordRequest = () => ({ type: SUBSCRIPTION_VISIT_REQUEST });
const addInternalRecordSuccess = internalRecord => ({
  type: SUBSCRIPTION_VISIT_SUCCESS,
  internalRecord
});


export const getMyClients = () => dispatch => {
  dispatch(getMyClientsRequest());
  return api
    .get(GET_MY_CLIENTS_REQUEST_STRING)
    .then(data => {
      dispatch(getMyClientsSuccess(data));
      return data;
    })
    .catch(error => {
      throw error;
    });
};

export const getAllClients = () => dispatch => {
  dispatch(getAllClientsRequest());
  return api
    .get(GET_ALL_CLIENTS_REQUEST_STRING)
    .then(data => {
      dispatch(getAllClientsSuccess(data));
      return data;
    })
    .catch( error => {
    /*   dispatch({
        type: "FAIL",
        func: getAllClients()
      }); */
      throw error;
    });
};

export const processSubscriptionVisit = subscriptionId => dispatch => {
  dispatch(subscriptionVisitRequest());
  return api
    .post(PROCESS_SUBSCRIPTION_VISIT, { subscriptionId })
    .then(data => {
      dispatch(subscriptionVisitSuccess(data));
      return data;
    })
    .catch(error => console.log(error));
};

export const addInternalRecord = internalRecord => dispatch => {
  dispatch(addInternalRecordRequest());
  return api
    .post(ADD_INTERNAL_RECORD, internalRecord)
    .then(data => {
      dispatch(addInternalRecordSuccess(data));
      return data;
    })
    .catch(error => console.log(error));
};

export const getUserById = id => dispatch => {
  dispatch(getUserRequest());
  return api
    .get(GET_USER_BY_ID_REQUEST_STRING, {
      params: {
        id: id
      }
    })
    .then(data => {
      dispatch(getUserSuccess(data));
      return data;
    })
    .catch(error => console.log(error));
};

