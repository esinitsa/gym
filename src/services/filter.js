import _, { reverse, isEqual, get, last } from "lodash";
import { COUNT, EMPTY_RESPONSE } from "../constants";
import moment from "moment";
import { CALENDAR_FORMAT, DAY } from "../constants";
import { STAFF_ROLES } from "../constants/userTypes";
import { NavigationType } from "../constants/navigationTypes";

const excludeRoles = ["USER", "CLIENT", "SUPERADMIN"];

export const filter = userRoles =>
  _.filter(userRoles, role => _.indexOf(excludeRoles, role) === -1);

const ADMIN = "ADMIN";

export const checkAdmin = roles => _.indexOf(roles, ADMIN) === -1;

export const checkType = type => type === COUNT;

export const isActive = subscription =>
  get(subscription, "active", EMPTY_RESPONSE);

export const reverseArray = (items, props) => {
  const item = get(items, props);
  return _.isNil(item) ? [] : reverse([item]);
};

export const isEqualUsers = (userInfo, currentUser) =>
  isEqual(userInfo.id, currentUser.id);

export const checkUserRole = ({ roles }) => {
  if (roles.includes("ADMIN")) {
    return NavigationType.AdminPanel;
  } else if (roles.some(role => STAFF_ROLES.includes(role))) {
    return NavigationType.StaffSchedule;
  } else {
    return NavigationType.Home;
  }
};

export const getLastActiveSubscription = user => {
  const subscriptions = get(user, "subscriptions");
  return subscriptions ? last(subscriptions) : [];
};

export const getPreviouslyValidated = user => {
  const lastActiveSubscription = getLastActiveSubscription(user);
  return get(lastActiveSubscription, "previouslyValidated", []);
};

export const bookedSessionsDateFilter = (bookedSession, strDate) =>
  _.filter(bookedSession, ({ startAt }) => {
    const date = moment(startAt).format(CALENDAR_FORMAT);
    return moment(date).isSame(moment(strDate, CALENDAR_FORMAT), DAY);
  });
