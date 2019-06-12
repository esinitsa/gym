import moment from "moment";
import { head, last } from "lodash";
import { TIME_FORMAT, HOURS } from "../constants";

export const validateSchedule = schedule => {
  let isValid = true;
  schedule.map(item => {
    if (item.intervals.length === 2) {
      const firstInterval = head(item.intervals);
      const lastInterval = last(item.intervals);
      if (crossingIntervals(firstInterval, lastInterval)) {
        isValid = false;
      }
    }
  });
  return isValid;
};

export const compareTimeFromPickers = ({ from, to }) =>
  timeConstructor(to).diff(timeConstructor(from)) > 0 ? true : false;

export const crossingIntervals = (firstInterval, lastInterval) =>
  isBetween(firstInterval, lastInterval.from) ||
  isBetween(firstInterval, lastInterval.to) ||
  isBetween(lastInterval, firstInterval.from) ||
  isBetween(lastInterval, firstInterval.to);

export const isBetween = ({ from, to }, comparableTime) =>
  timeConstructor(comparableTime).isBetween(
    timeConstructor(from),
    timeConstructor(to)
  );

export const timeToMomentFormat = time =>
  timeConstructor(time).format(TIME_FORMAT);

export const timeConstructor = time => moment(time, TIME_FORMAT);

export const incrementFromTime = time =>
  timeConstructor(time)
    .add(1, HOURS)
    .format(TIME_FORMAT);

export const incrementToTime = time =>
  timeConstructor(time)
    .add(2, HOURS)
    .format(TIME_FORMAT);