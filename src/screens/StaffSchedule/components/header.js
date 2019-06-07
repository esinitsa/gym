import { Button, Header, Left, Right, Body } from "native-base";
import React from "react";
import { Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { I18n } from "react-redux-i18n";
import { showToast } from "../../../services/UIActions";
import { validateSchedule } from "../../../services/schedule";
import theme from "../../../styles";
import { CustomText } from "../../common/text/customText";
import styles from "../styles";

export const renderHeader = props => {
  const { schedule, setStaffSchedule, currentUser } = props;
  const acceptSchedule = () => {
    const performSetSchedule = () => {
      validateSchedule(schedule)
        ? setStaffSchedule({
            targetUserId: currentUser.id,
            schedule
          })
        : showToast(I18n.t("exceptions.crossingTime"));
    };
    Alert.alert(
      I18n.t("settings.setSchedule.header"),
      I18n.t("settings.setSchedule.description"),
      [
        { text: I18n.t("settings.setSchedule.cancel"), style: "cancel"  },
        { text: I18n.t("settings.setSchedule.confirm"), onPress: performSetSchedule}
      ],
      { cancelable: true }
    );
  };

  return (
    <Header style={styles.header}>
      <Left />
      <Body>
        <CustomText
          text={I18n.t("header.schedule")}
          style={styles.leftHeaderText}
        />
      </Body>
      <Right>
        <Button onPress={acceptSchedule} transparent style={styles.rightHeader}>
          <Icon
            name={"ios-checkmark"}
            color={theme.colors.primary}
            size={theme.size.icons.large}
            solid
          />
        </Button>
      </Right>
    </Header>
  );
};
