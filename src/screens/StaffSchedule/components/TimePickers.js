import { View } from "native-base";
import React from "react";
import styles from "../styles";
import DatePicker from "react-native-datepicker";

export const TimePickers = ({
  dayIndex,
  intervals,
  onChangeTime,
}) => {
  const changeToTime = index => time => {
    const func = onChangeTime("to");
    func(dayIndex, index, time);
  };

  const changeFromTime = index => time => {
    const func = onChangeTime("from");
    func(dayIndex, index, time);
  };

  const renderSchedulePickers = ({ from, to }, index) => {
    return (
      <View style={styles.pickerContent}>
        <DatePicker
          style={styles.dateContainer}
          mode={"time"}
          date={from}
          format={"HH:mm"}
          placeholder={"select time"}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          customStyles={{
            dateInput: styles.dateInput
          }}
          onDateChange={changeFromTime(index)}
        />
        <DatePicker
          style={styles.dateContainer}
          mode={"time"}
          date={to}
          format={"HH:mm"}
          placeholder={"select time"}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          customStyles={{
            dateInput: styles.dateInput
          }}
          onDateChange={changeToTime(index)}
        />
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
