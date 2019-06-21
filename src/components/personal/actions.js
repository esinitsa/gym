/* eslint-disable no-console */
import { api } from "../../api/api";
import {
  GET_MY_CLIENTS_REQUEST,
  GET_MY_CLIENTS_SUCCESS,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  GET_USERS_BY_ROLE_REQUEST,
  GET_USERS_BY_ROLE_SUCCESS,
  SUBSCRIPTION_VISIT_REQUEST,
  SUBSCRIPTION_VISIT_SUCCESS,
  ADD_INTERNAL_RECORD_REQUEST,
  ADD_INTERNAL_RECORD_SUCCESS,
  GET_NOTES_AUTHOR_BY_ID_REQUEST,
  GET_NOTES_AUTHOR_BY_ID_SUCCESS,
  GET_STAFF_BOOKED_SESSION_REQUEST,
  GET_STAFF_BOOKED_SESSION_SUCCESS,
  SET_STAFF_SCHEDULE_REQUEST,
  SET_STAFF_SCHEDULE_SUCCESS,
  GET_USER_SCHEDULE_BY_ID_REQUEST,
  GET_USER_SCHEDULE_BY_ID_SUCCESS,
  GET_STAFF_SCHEDULE_REQUEST,
  GET_STAFF_SCHEDULE_SUCCESS,
  MAKE_APPOINTMENT_REQUEST,
  MAKE_APPOINTMENT_SUCCESS
} from "./constants";
import {
  GET_MY_CLIENTS_REQUEST_STRING,
  GET_USER_BY_ID_REQUEST_STRING,
  PROCESS_SUBSCRIPTION_VISIT,
  MAKE_APPOINTMENT,
  GET_USERS_BY_ROLE,
  GET_USER_SCHEDULE_BY_ID,
  GET_STAFF_BOOKED_SESSION,
  ADD_INTERNAL_RECORD,
  SET_STAFF_SCHEDULE,
  GET_STAFF_SCHEDULE
} from "../../api/apiConstants";
import { KEYS } from "../../constants/reducerTypeKeys";

const getMyClientsRequest = () => ({ type: GET_MY_CLIENTS_REQUEST });
const getMyClientsSuccess = clients => ({
  type: GET_MY_CLIENTS_SUCCESS,
  [KEYS[GET_MY_CLIENTS_SUCCESS]]: clients
});

const getUsersByRoleRequest = () => ({ type: GET_USERS_BY_ROLE_REQUEST });
const getUsersByRoleSuccess = usersByRole => ({
  type: GET_USERS_BY_ROLE_SUCCESS,
  [KEYS[GET_USERS_BY_ROLE_SUCCESS]]: usersByRole
});

const getUserScheduleByIdRequest = () => ({
  type: GET_USER_SCHEDULE_BY_ID_REQUEST
});
const getUserScheduleByIdSuccess = userSchedule => ({
  type: GET_USER_SCHEDULE_BY_ID_SUCCESS,
  [KEYS[GET_USER_SCHEDULE_BY_ID_SUCCESS]]: userSchedule
});

const setStaffScheduleRequest = () => ({
  type: SET_STAFF_SCHEDULE_REQUEST
});
const setStaffScheduleSuccess = () => ({
  type: SET_STAFF_SCHEDULE_SUCCESS
});

const getStaffBookedSessionRequest = () => ({
  type: GET_STAFF_BOOKED_SESSION_REQUEST
});
const getStaffBookedSessionSuccess = userSchedule => ({
  type: GET_STAFF_BOOKED_SESSION_SUCCESS,
  [KEYS[GET_STAFF_BOOKED_SESSION_SUCCESS]]: userSchedule
});

const getStaffScheduleRequest = () => ({
  type: GET_STAFF_SCHEDULE_REQUEST
});
const getStaffScheduleSuccess = staffSchedule => ({
  type: GET_STAFF_SCHEDULE_SUCCESS,
  [KEYS[GET_STAFF_SCHEDULE_SUCCESS]]: staffSchedule
});

const getUserRequest = () => ({ type: GET_USER_BY_ID_REQUEST });
const getUserSuccess = user => ({
  type: GET_USER_BY_ID_SUCCESS,
  [KEYS[GET_USER_BY_ID_SUCCESS]]: user
});

const subscriptionVisitRequest = () => ({ type: SUBSCRIPTION_VISIT_REQUEST });
const subscriptionVisitSuccess = ({ user }) => ({
  type: SUBSCRIPTION_VISIT_SUCCESS,
  [KEYS[SUBSCRIPTION_VISIT_SUCCESS]]: user
});

const addInternalRecordRequest = () => ({ type: ADD_INTERNAL_RECORD_REQUEST });
const addInternalRecordSuccess = () => ({ type: ADD_INTERNAL_RECORD_SUCCESS });

const makeAppointmentRequest = () => ({ type: MAKE_APPOINTMENT_REQUEST });
const makeAppointmentSuccess = () => ({ type: MAKE_APPOINTMENT_SUCCESS });

const getNotesAuthorRequest = () => ({ type: GET_NOTES_AUTHOR_BY_ID_REQUEST });
const getNotesAuthorSuccess = author => ({
  type: GET_NOTES_AUTHOR_BY_ID_SUCCESS,
  [KEYS[GET_NOTES_AUTHOR_BY_ID_SUCCESS]]: author
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

export const getUsersByRole = role => dispatch => {
  dispatch(getUsersByRoleRequest());
  api
    .get(GET_USERS_BY_ROLE, {
      params: {
        role
      }
    })
    .then(data => dispatch(getUsersByRoleSuccess(data)))
    .catch(error => console.log(error));
};

export const getUserScheduleById = userId => dispatch => {
  dispatch(getUserScheduleByIdRequest());
  api
    .get(GET_USER_SCHEDULE_BY_ID, {
      params: {
        userId
      }
    })
    .then(data => dispatch(getUserScheduleByIdSuccess(data)))
    .catch(error => console.log(error));
};

export const getStaffBookedSession = staffId => dispatch => {
  dispatch(getStaffBookedSessionRequest());
  api
    .get(GET_STAFF_BOOKED_SESSION, {
      params: {
        staffId
      }
    })
    .then(data => dispatch(getStaffBookedSessionSuccess(data)))
    .catch(error => console.log(error));
};

export const getStaffSchedule = staffId => dispatch => {
  dispatch(getStaffScheduleRequest());
  api
    .get(GET_STAFF_SCHEDULE, {
      params: {
        staffId
      }
    })
    .then(data => dispatch(getStaffScheduleSuccess(data)))
    .catch(error => console.log(error));
};

export const setStaffSchedule = staffScheduleBody => dispatch => {
  dispatch(setStaffScheduleRequest());
  return api
    .post(SET_STAFF_SCHEDULE, staffScheduleBody)
    .then(data => dispatch(setStaffScheduleSuccess()))
    .catch(error => console.log(error));
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
      dispatch(addInternalRecordSuccess());
      return data;
    })
    .catch(error => console.log(error));
};

export const makeAppointment = appointmentBody => dispatch => {
  dispatch(makeAppointmentRequest());
  return api
    .post(MAKE_APPOINTMENT, appointmentBody)
    .then(data => dispatch(makeAppointmentSuccess()))
    .catch(error => console.log(error));
};

export const getCurrentUser = () => (dispatch, getState) => {
  const id = getState().user.userProfile.id;
  dispatch(getUserById(id));
};

export const getUserById = id => dispatch => {
  dispatch(getUserRequest());
  return api
    .get(GET_USER_BY_ID_REQUEST_STRING, {
      params: {
        id
      }
    })
    .then(data => {
      dispatch(getUserSuccess(data));
      return data;
    })
    .catch(error => console.log(error));
};

export const getNotesAuthorById = id => dispatch => {
  dispatch(getNotesAuthorRequest());
  return api
    .get(GET_USER_BY_ID_REQUEST_STRING, {
      params: {
        id
      }
    })
    .then(data => {
      dispatch(getNotesAuthorSuccess(data));
      return data;
    })
    .catch(error => console.log(error));
};
