import moment from "moment";
import { head, last } from "lodash";
import { TIME_FORMAT, HOURS } from "../constants";

export const validateSchedule = schedule => {
  let isValid = true;
  schedule.map(item => {
    if (item.intervals.length === 2) {
      const firstInterval = head(item.intervals);
      const lastInterval = last(item.intervals);
      if (
        isBetween(firstInterval, lastInterval.from) ||
        isBetween(firstInterval.from, firstInterval.to, lastInterval.to)
      ) {
        isValid = false;
      }
    }
  });
  return isValid;
};

export const compareTimeFromPickers = ({ from, to }) =>
  timeToMomentFormat(to).diff(timeToMomentFormat(from)) > 0 ? true : false;

export const isBetween = ({ from, to }, comparableTime) =>
  timeToMomentFormat(comparableTime).isBetween(from, to);

export const timeToMomentFormat = time =>
  moment(time, TIME_FORMAT).utcOffset(0, false);

export const incrementFromTime = time => moment(time).add(1, HOURS);

export const incrementToTime = time => moment(time).add(2, HOURS);
