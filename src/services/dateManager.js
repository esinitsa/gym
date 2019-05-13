import moment from "moment";
import _ from "lodash";
import { DATE_FORMAT, EMPTY_RESPONSE } from "../constants";

export const getDateWithFormat = date => moment(date).locale("ru").format(DATE_FORMAT);

export const lastDateFromArray = dateArray => _.isArray(dateArray)
          ? getDateWithFormat(_.last(dateArray))
          : EMPTY_RESPONSE;
