import { View } from "native-base";
import React, { useState } from "react";
import DatePicker from "react-native-datepicker";
import { I18n } from "react-redux-i18n";
import {
  INTERVAL,
  TIME_FORMAT,
  DATE_TIME_PICKER_MODES
} from "../../../constants/";
import { timeToMomentFormat } from "../../../services/schedule";
import { ButtonIcon } from "../../common/buttons/icon";
import theme from "../../../styles";
import styles from "../styles";

export const TimePickers = ({
  dayIndex,
  intervals,
  onChangeTime,
  addPickerLine,
  removePickerLine
}) => {
  const [isExpanded, setExpanded] = useState(false);

  const changeToTime = index => time => {
    const onChangeToTime = onChangeTime(INTERVAL.to);
    onChangeToTime(dayIndex, index, timeToMomentFormat(time));
  };

  const changeFromTime = index => time => {
    const onChangeFromTime = onChangeTime(INTERVAL.from);
    onChangeFromTime(dayIndex, index, timeToMomentFormat(time));
  };

  const addInterval = () => {
    addPickerLine(dayIndex);
    setExpanded(true);
  };

  const removeInterval = () => {
    removePickerLine(dayIndex);
    setExpanded(false);
  };

  const renderAddButton = () => {
    return (
      intervals.length < 2 && (
        <ButtonIcon
          event={addInterval}
          type={"Ionicons"}
          icon={"ios-add-circle-outline"}
          color={theme.colors.primary}
          size={theme.size.icons.small}
        />
      )
    );
  };

  const renderRemoveButton = index => {
    return (
      isExpanded &&
      index === intervals.length - 1 && (
        <ButtonIcon
          event={removeInterval}
          type={"Ionicons"}
          icon={"ios-close-circle-outline"}
          color={theme.colors.primary}
          size={theme.size.icons.small}
        />
      )
    );
  };

  const renderSchedulePickers = ({ from, to }, index) => {
    return (
      <View style={styles.pickerContent}>
        <DatePicker
          style={styles.dateContainer}
          mode={DATE_TIME_PICKER_MODES.TIME}
          date={from}
          format={TIME_FORMAT}
          placeholder={I18n.t("picker.placeholders.selectTime")}
          confirmBtnText={I18n.t("picker.settings.confirm")}
          cancelBtnText={I18n.t("picker.settings.cancel")}
          showIcon={false}
          customStyles={{
            dateInput: styles.dateContainer
          }}
          onDateChange={changeFromTime(index)}
        />
        <DatePicker
          style={styles.dateContainer}
          mode={DATE_TIME_PICKER_MODES.TIME}
          date={to}
          format={TIME_FORMAT}
          placeholder={I18n.t("picker.placeholders.selectTime")}
          confirmBtnText={I18n.t("picker.settings.confirm")}
          cancelBtnText={I18n.t("picker.settings.cancel")}
          showIcon={false}
          customStyles={{
            dateInput: styles.dateContainer
          }}
          onDateChange={changeToTime(index)}
        />
        <View style={styles.pickerToggle}>
          {renderAddButton()}
          {renderRemoveButton(index)}
        </View>
      </View>
    );
  };

  return (
    <View>
      {intervals.map((interval, index) =>
        renderSchedulePickers(interval, index)
      )}
    </View>
  );
};
