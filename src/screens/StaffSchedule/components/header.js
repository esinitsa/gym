import { Header, View } from "native-base";
import React from "react";
import { Alert } from "react-native";
import { I18n } from "react-redux-i18n";
import theme from "../../../styles";
import { CustomText } from "../../common/text/customText";
import { ButtonIcon } from "../../common/buttons/icon";
import styles from "../styles";

export const renderHeader = props => {
  const {  acceptSchedule, currentUser } = props;

  const acceptScheduleDialog = () => {
    const performSetSchedule = () => {
      acceptSchedule();
    };
    Alert.alert(
      I18n.t("settings.setSchedule.header"),
      I18n.t("settings.setSchedule.description"),
      [
        { text: I18n.t("settings.setSchedule.cancel"), style: "cancel" },
        {
          text: I18n.t("settings.setSchedule.confirm"),
          onPress: performSetSchedule
        }
      ],
      { cancelable: true }
    );
  };

  return (
    <Header style={styles.header} noShadow>
      <View style={styles.rightHeaderView} />
      <View style={styles.headerBody}>
        <CustomText
          text={I18n.t("header.schedule")}
          style={styles.bodyHeaderText}
        />
        <CustomText
          text={`${currentUser.firstName} ${currentUser.lastName}`}
          style={styles.headerUsername}
        />
      </View>
      <ButtonIcon
        type={"Ionicons"}
        event={acceptScheduleDialog}
        icon={"ios-checkmark"}
        color={theme.colors.primary}
        size={theme.size.icons.large}
      />
    </Header>
  );
};
