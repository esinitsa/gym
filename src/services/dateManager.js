import moment from "moment";
import _ from "lodash";
import {
  DATE_FORMAT,
  EMPTY_RESPONSE,
  CALENDAR_FORMAT,
  ISO_FORMAT,
  TIME_FORMAT
} from "../constants";

export const getDateWithFormat = date =>
  moment(date)
    .locale("ru")
    .format(DATE_FORMAT);

export const getDateForCalendar = date =>
  moment(date)
    .locale("ru")
    .format(CALENDAR_FORMAT);

export const getTime = timestamp =>
  moment(timestamp)
    .locale("ru")
    .utcOffset(0, false)
    .format(TIME_FORMAT);

export const userScheduleFilter = (schedule, calendarDate) =>
  _.filter(schedule, item => getDateForCalendar(item.startAt) === calendarDate);

export const calendarDateIterator = (date, i) => date.timestamp + i * 24 * 60 * 60 * 1000;

export const getMarkedDates = previouslyValidated => {
  const markedDates = {};
  previouslyValidated.map(
    date => (markedDates[getDateForCalendar(date)] = { marked: true })
  );
  return markedDates;
};

export const lastDateFromArray = dateArray =>
  _.isArray(dateArray) ? getDateWithFormat(_.last(dateArray)) : EMPTY_RESPONSE;

export const getCurrentTime = () => {
  const today = new Date();
  return `${today.getHours()}:${today.getMinutes()}`;
};

export const convertMinutesToMilliseconds = time => time * 60000;

export const convertMillisecondsToMinutes = time => time / 60000;

export const getDatePickerFormat = date => moment(date).format(DATE_FORMAT);

export const convertDateToUnix = (date, time) =>
  moment(`${date} ${time}`).unix();

export const convertDateToISOFormat = (date, time) =>
  moment(`${getDatePickerFormat(date)} ${time}`).format(ISO_FORMAT);
