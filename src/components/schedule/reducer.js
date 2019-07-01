import {
  GET_STAFF_BOOKED_SESSION_REQUEST,
  GET_STAFF_BOOKED_SESSION_SUCCESS,
  GET_USER_SCHEDULE_BY_ID_REQUEST,
  GET_USER_SCHEDULE_BY_ID_SUCCESS,
  SET_STAFF_SCHEDULE_REQUEST,
  SET_STAFF_SCHEDULE_SUCCESS,
  GET_STAFF_SCHEDULE_REQUEST,
  GET_STAFF_SCHEDULE_SUCCESS
} from "./constants";

const initialState = {
  isDataLoading: false,
  staffSchedule: null,
  userSchedule: null,
  lastRequestType: null,
  lastSuccessType: null
};

export const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SCHEDULE_BY_ID_REQUEST:
      return {
        ...state,
        lastRequestType: GET_USER_SCHEDULE_BY_ID_REQUEST,
        lastSuccessType: GET_USER_SCHEDULE_BY_ID_SUCCESS,
        isDataLoading: true
      };
    case GET_USER_SCHEDULE_BY_ID_SUCCESS:
      return {
        ...state,
        userSchedule: action.userSchedule,
        isDataLoading: false
      };
    case GET_STAFF_BOOKED_SESSION_REQUEST:
      return {
        ...state,
        lastRequestType: GET_STAFF_BOOKED_SESSION_REQUEST,
        lastSuccessType: GET_STAFF_BOOKED_SESSION_SUCCESS,
        isDataLoading: true
      };
    case GET_STAFF_BOOKED_SESSION_SUCCESS:
      return {
        ...state,
        userSchedule: action.userSchedule,
        isDataLoading: false
      };
    case GET_STAFF_SCHEDULE_REQUEST:
      return {
        ...state,
        lastRequestType: GET_STAFF_SCHEDULE_REQUEST,
        lastSuccessType: GET_STAFF_SCHEDULE_SUCCESS,
        isDataLoading: true
      };
    case GET_STAFF_SCHEDULE_SUCCESS:
      return {
        ...state,
        staffSchedule: action.staffSchedule,
        isDataLoading: false
      };
    case SET_STAFF_SCHEDULE_REQUEST:
      return {
        ...state,
        isDataLoading: true,
        lastRequestType: SET_STAFF_SCHEDULE_REQUEST,
        lastSuccessType: SET_STAFF_SCHEDULE_SUCCESS
      };
    case SET_STAFF_SCHEDULE_SUCCESS:
      return {
        ...state,
        isDataLoading: false
      };
    default:
      return state;
  }
};
