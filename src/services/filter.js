import _, { reverse, isEqual, get } from "lodash";
import { COUNT, EMPTY_RESPONSE } from "../constants";
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
