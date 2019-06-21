import Moment from "moment";
import { extendMoment } from "moment-range";
import _ from "lodash";
import {
  DATE_FORMAT,
  EMPTY_RESPONSE,
  CALENDAR_FORMAT,
  ISO_FORMAT,
  TIME_FORMAT,
  MINUTE
} from "../constants";
import { getPreviouslyValidated } from "./filter";
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
  _.filter(schedule, item => getDateForCalendar(item.startAt) === calendarDate);

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

export const staffScheduleLoadItems = (items, schedule, strDate, duration) => {
  const dayIndex = moment(strDate).day();
  const intervals = schedule.schedule[dayIndex].intervals;
  intervals.map(({ from, to }) => {
    const fromTime = moment(from, TIME_FORMAT);
    const toTime = moment(to, TIME_FORMAT);
    const range1 = moment.range(fromTime, toTime);
    let acc = Array.from(range1.by(MINUTE, { step: duration }));
    acc.pop();
    if (!items) {
      items = [];
    }
    acc.map(time =>
      items.push({
        startAt: time.format(ISO_FORMAT),
        time: time.format(TIME_FORMAT),
        staff: schedule.user,
        duration
      })
    );
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
