/* eslint-disable no-console */
import { api } from "../../api/api";
import {
  GET_STAFF_BOOKED_SESSION_REQUEST,
  GET_STAFF_BOOKED_SESSION_SUCCESS,
  SET_STAFF_SCHEDULE_REQUEST,
  SET_STAFF_SCHEDULE_SUCCESS,
  GET_USER_SCHEDULE_BY_ID_REQUEST,
  GET_USER_SCHEDULE_BY_ID_SUCCESS,
  GET_STAFF_SCHEDULE_REQUEST,
  GET_STAFF_SCHEDULE_SUCCESS
} from "./constants";
import {
  GET_USER_SCHEDULE_BY_ID,
  GET_STAFF_BOOKED_SESSION,
  SET_STAFF_SCHEDULE,
  GET_STAFF_SCHEDULE
} from "../../api/apiConstants";
import { KEYS } from "../../constants/reducerTypeKeys";

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
