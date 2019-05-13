import _ , { reverse, isEqual } from "lodash";
import { COUNT, EMPTY_RESPONSE } from "../constants";

const excludeRoles = ["USER", "CLIENT","SUPERADMIN"];

export const filter = userRoles => _.filter( userRoles, role => _.indexOf(excludeRoles, role) === -1);

const ADMIN = "ADMIN";

export const checkAdmin = roles => _.indexOf(roles, ADMIN) === -1;

export const checkType = type => type === COUNT;

export const isActive = subscription => _.get(subscription, "active", EMPTY_RESPONSE);

export const reverseArray = ( items, props ) => _.get(items, props) ? reverse(_.get(items,props,[])) : [];

export const isEqualUsers = ( userInfo, currentUser ) => isEqual(userInfo.id, currentUser.id);
