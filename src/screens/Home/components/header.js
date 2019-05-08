import _ from "lodash";
import { Button, Header, Left, Right } from "native-base";
import React from "react";
import { Alert } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { I18n } from "react-redux-i18n";
import { NavigationType } from "../../../constants/navigationTypes";
import { EMPTY_RESPONSE } from "../../../constants/profileConstants";
import theme from "../../../styles";
import { CustomText } from "../../common/text/customText";
import styles from "../styles";

export const renderHeader = props => {
  const onLogOut = () => {
    const performLogout = () => {
      props.onLogOut();
      goToLogin();
    };
    Alert.alert(
      I18n.t("settings.logout.header"),
      I18n.t("settings.logout.description"),
      [
        { text: I18n.t("settings.logout.cancel"), style: "cancel" },
        { text: I18n.t("settings.logout.confirm"), onPress: performLogout }
      ],
      { cancelable: true }
    );
  };

  const goToLogin = () => props.navigation.navigate(NavigationType.Login);

  const { userProfile } = props.user;

  return (
    <Header style={styles.header}>
    <Left style={styles.leftHeader}>
      <CustomText
        text={`${_.get(userProfile, "firstName", EMPTY_RESPONSE)} ${_.get(
          userProfile,
          "lastName",
          EMPTY_RESPONSE
        )}`}
        style={styles.leftHeaderText}
      />
    </Left>
    <Right>
      <Button
        onPress={onLogOut}
        transparent
        style={styles.rightHeader}
      >
        <FontAwesome5
          name={"sign-out-alt"}
          color={theme.colors.primary}
          size={theme.size.icons.small}
          solid
        />
      </Button>
    </Right>
  </Header>
  );
};
