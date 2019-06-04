import React from "react";
import DatePicker from "react-native-datepicker";
import styles from "../styles";

export const renderTimePicker = (time , index, onTimeChange) => {
  return (
    <DatePicker
      style={styles.dateContainer}
      mode={"time"}
      date={time}
      format={"HH:mm"}
      placeholder={"select time"}
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      showIcon={false}
      customStyles={{
        dateInput: styles.dateInput
      }}
      onDateChange={changeTime => onTimeChange(changeTime, index)}
    />
  );
};
