import React, { useState } from "react";
import DatePicker from "react-native-datepicker";
import styles from "../styles";

export const renderTimePicker = (index, onTimeChange) => {
  const [time, setTime] = useState("9:00");

  const onChangeTime = newTime => {
    setTime(newTime);
    onTimeChange(index, newTime);
  };

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
      onDateChange={onChangeTime}
    />
  );
};
