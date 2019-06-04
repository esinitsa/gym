import React from "react";
import DatePicker from "react-native-datepicker";
import styles from "../styles";

export const renderDateTimePicker = (mode, dateTime, onDateTimeChange) => {
  return (
    <DatePicker
      style={styles.dateContainer}
      date={dateTime}
      mode={mode}
      placeholder={`select ${mode}`}
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: styles.dateIcon,
        dateInput: styles.dateInput
      }}
      onDateChange={onDateTimeChange}
    />
  );
};
