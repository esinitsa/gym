import { Picker } from "native-base";
import { I18n } from "react-redux-i18n";
import { ROLES } from "../../../constants/userTypes";
import React from "react";

export const renderPickerItem = (item, index, type) => {
  let label = `${item}`;

  switch (type) {
    case "ROLE":
      label = I18n.t(`${ROLES[item]}`);
      break;
    case "STAFF":
      label = `${item.firstName} ${item.lastName}`;
      break;
    case "DURATION":
      label = `${item} минут`;
      break;
  }

  return <Picker.Item label={label} value={index} key={`${item}${index}`} />;
};
