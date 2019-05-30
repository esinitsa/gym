import { Button, Header, Left, Right } from "native-base";
import React from "react";
import { Alert } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { I18n } from "react-redux-i18n";
import { NavigationType } from "../../../constants/navigationTypes";
import theme from "../../../styles";
import { CustomText } from "../../common/text/customText";
import styles from "../styles";

export const renderHeader = (props, changeQRState) => {
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

  return (
    <Header style={styles.header} noShadow>
      <Left style={styles.leftHeader}>
        <CustomText
          style={styles.leftHeaderText}
          text={I18n.t("types.Admin")}
        />
      </Left>
      <Right>
        <Button
          onPress={changeQRState}
          transparent
          style={styles.qrScanRightHeader}
        >
          <MaterialIcons
            name={"qrcode-scan"}
            color={theme.colors.primary}
            size={theme.size.icons.small}
            solid
          />
        </Button>
        <Button
          onPress={onLogOut}
          transparent
          style={styles.signOutRightHeader}
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
