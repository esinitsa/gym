import { View } from "native-base";
import React from "react";
import { renderTimePicker } from "./timePicker";

export const pickers = (dayIndex, intervals , onChangeFromTime, onChangeToTime) => {
  const changeToTime = (index, time) => {
    onChangeToTime(dayIndex, index, time);
  };

  const changeFromTime = (index, time) => {
    onChangeFromTime(dayIndex, index, time);
  };

  const renderSchedulePickers = index => {
    return (
      <View style={{ flexDirection: "row" }}>
        {renderTimePicker(index, changeFromTime)}
        {renderTimePicker(index, changeToTime)}
      </View>
    );
  };

  return (
    <View>
      {intervals.map((interval, index) => renderSchedulePickers(index))}
    </View>
  );
};
