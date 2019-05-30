import { Picker } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import theme from "../../../styles";
import { renderPickerItem } from "./pickerItem";
import styles from "../styles";

export const renderPicker = ({ selectedValue, onValueChange, pickerData, type }) => {
  return (
    <Picker
      note
      mode="dropdown"
      style={styles.pickerContainer}
      textStyle={styles.pickerText}
      selectedValue={selectedValue}
      itemTextStyle={styles.pickerItemText}
      headerTitleStyle={styles.bodyHeaderText}
      headerBackButtonTextStyle={styles.pickerBackHeader}
      iosIcon={
        <Icon
          name={"down"}
          color={theme.colors.primary}
          solid
          style={styles.dropDownArrow}
        />
      }
      onValueChange={onValueChange}
    >
      {pickerData.map((item, index) => renderPickerItem(item, index, type))}
    </Picker>
  );
};
