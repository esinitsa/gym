import { timeToMomentFormat } from "../services/schedule";

export const DEFAULT_COUNT = "0";
export const COUNT = "COUNT";
export const TERM = "TERM";
export const DATE_FORMAT = "DD MMM YYYY";
export const ISO_FORMAT = "YYYY-MM-DDTHH:mm:ss.SSS[Z]";
export const CALENDAR_FORMAT = "YYYY-MM-DD";
export const TIME_FORMAT = "HH:mm";
export const HOURS = "hours";
export const INTERVAL = {
  to: "to",
  from: "from"
};
export const EMPTY_RESPONSE = "";
export const APPOINTMENT_DURATIONS = [60, 90, 120, 150, 180];
export const BASIC_SCHEDULE = {
  from: timeToMomentFormat("9:00"),
  to: timeToMomentFormat("18:00")
};
export const PICKER_TYPES = {
  ["ROLE"]: "ROLE",
  ["STAFF"]: "STAFF",
  ["DURATION"]: "DURATION"
};
export const DATE_TIME_PICKER_MODES = {
  ["DATE"]: "date",
  ["TIME"]: "time",
  ["DATE_TIME"]: "dateTime"
};
