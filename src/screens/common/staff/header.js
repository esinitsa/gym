import React from "react";
import { View } from "react-native";
import { I18n } from "react-redux-i18n";
import { CustomText } from "../text/customText";
import styles from "./styles";

export default class StaffHeader extends React.PureComponent {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerTableView} />
        <View style={styles.fullNameView}>
          <CustomText style={styles.userInfoText} text={I18n.t("table.fullName")} />
        </View>
        <View style={styles.valueView}>
          <CustomText style={styles.userInfoText} text={I18n.t("table.cost")} />
        </View>
        <View style={styles.scheduleHeaderView}>
          <CustomText style={styles.userInfoText} text={I18n.t("table.schedule")} />
        </View>
      </View>
    );
  }
}
