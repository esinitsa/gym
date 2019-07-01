import Moment from "moment";
import { extendMoment } from "moment-range";
import { isArray, flattenDeep, last, filter, get} from "lodash";
import {
  DATE_FORMAT,
  EMPTY_RESPONSE,
  CALENDAR_FORMAT,
  ISO_FORMAT,
  TIME_FORMAT,
  MINUTE,
  ADD_MINUTES
} from "../constants";
import { getPreviouslyValidated, bookedSessionsDateFilter } from "./filter";
import { timeConstructor } from "./schedule";
import { getLanguageCode } from "./language";

const moment = extendMoment(Moment);

export const getDateWithFormat = date =>
  moment(date)
    .locale(getLanguageCode())
    .format(DATE_FORMAT);

export const getDateForCalendar = date =>
  moment(date)
    .locale(getLanguageCode())
    .format(CALENDAR_FORMAT);

export const getTime = timestamp =>
  moment(timestamp)
    .locale(getLanguageCode())
    .utcOffset(0, false)
    .format(TIME_FORMAT);

export const userScheduleFilter = (schedule, calendarDate) =>
  filter(schedule, item => getDateForCalendar(item.startAt) === calendarDate);

export const userScheduleLoadItems = (items, schedule, strDate) => {
  userScheduleFilter([...schedule], strDate).map(item => {
    const { duration, startAt, staffRole, staff } = item;
    if (!items) {
      items = [];
    }
    items.push({
      time: getTime(startAt),
      duration: convertMillisecondsToMinutes(duration),
      staff,
      staffRole
    });
  });
  return items;
};

export const staffScheduleLoadItems = (
  items,
  schedule,
  strDate,
  selectedDuration,
  bookedSessions
) => {
  const dayIndex = moment(strDate).day();
  const intervals = get(schedule, ["schedule" , dayIndex ,"intervals"], []);
  const sessions = bookedSessionsDateFilter(bookedSessions, strDate);
  intervals.map(({ from, to }) => {
    const fromTime = moment(from, TIME_FORMAT);
    const toTime = moment(to, TIME_FORMAT).subtract(selectedDuration, ADD_MINUTES);
    let subtractInterval = [moment.range(fromTime, toTime)];
    sessions.map(({ startAt, duration }) => {
      const startTime = moment(startAt).utc().format(TIME_FORMAT);
      const endTime = moment(startTime, TIME_FORMAT).add(convertMillisecondsToMinutes(duration), ADD_MINUTES)
        .format(TIME_FORMAT);
        const subtractRange = moment.range(timeConstructor(startTime), timeConstructor(endTime));
        subtractInterval = subtractInterval.map( interval => interval.subtract(subtractRange));
        subtractInterval = flattenDeep(subtractInterval);
    });
    subtractInterval.map(interval => {
      const acc = Array.from(
        interval.by(MINUTE, { step: selectedDuration })
      );
      if (!items) {
        items = [];
      }
      acc.map(time =>
        items.push({
          startAt: time.format(ISO_FORMAT),
          time: time.format(TIME_FORMAT),
          staff: schedule.user,
          duration: selectedDuration
        })
      );
    });
  });
  return items;
};

export const calendarDateIterator = (date, i) =>
  date.timestamp + i * 24 * 60 * 60 * 1000;

export const getMarkedDates = user => {
  const previouslyValidated = getPreviouslyValidated(user);
  const markedDates = {};
  previouslyValidated.map(
    date => (markedDates[getDateForCalendar(date)] = { marked: true })
  );
  return markedDates;
};

export const lastDateFromArray = dateArray =>
  isArray(dateArray) ? getDateWithFormat(last(dateArray)) : EMPTY_RESPONSE;

export const getCurrentTime = () => {
  const today = new Date();
  return `${today.getHours()}:${today.getMinutes()}`;
};

export const convertMinutesToMilliseconds = time => time * 60000;

export const convertMillisecondsToMinutes = time => time / 60000;

export const getDatePickerFormat = date => moment(date).format(DATE_FORMAT);

export const convertDateToUnix = (date, time) =>
  moment(`${date} ${time}`).unix();

export const convertDateToTimeFormat = date => moment(date).format(TIME_FORMAT);

export const convertDateToISOFormat = (date, time) =>
  moment(`${getDatePickerFormat(date)} ${time}`).format(ISO_FORMAT);
