import React from "react";
import { View } from "react-native";
import { CustomText } from "../text/customText";
import styles from "./styles";

export default class StaffHeader extends React.PureComponent {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerTableView} />
        <View style={styles.fullNameView}>
          <CustomText style={styles.userInfoText} text={"ФИО"} />
        </View>
        <View style={styles.valueView}>
          <CustomText style={styles.userInfoText} text={"Стоимость"} />
        </View>
        <View style={styles.scheduleHeaderView}>
          <CustomText style={styles.userInfoText} text={"Расписание"} />
        </View>
      </View>
    );
  }
}
