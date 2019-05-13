import { Body, Button, Header, Left, Right } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { I18n } from "react-redux-i18n";
import theme from "../../../styles";
import { CustomText } from "../../common/text/customText";
import { isEqualUsers } from "../../../services/filter";
import { NavigationType } from "../../../constants/navigationTypes";
import styles from "../styles";

export const renderHeader = props => {
  const { userInfo, currentUser } = props;

  const goTo = (screen, params) => props.navigation.navigate(screen, params);

  const goToHome = () => {
    isEqualUsers(userInfo, currentUser)
      ? goTo(NavigationType.Home)
      : goTo(NavigationType.Profile, {
          id: userInfo.id
        });
  };

  return (
    <Header style={styles.header}>
      <Left style={styles.leftHeader}>
        <Button onPress={goToHome} transparent style={styles.profileIconHeader}>
          <Icon
            name={"left"}
            color={theme.colors.primary}
            size={theme.size.icons.small}
            solid
            style={styles.backArrowIcon}
          />
        </Button>
      </Left>
      <Body>
        <CustomText
          text={I18n.t("header.subscriptions")}
          style={styles.bodyHeaderText}
        />
        <CustomText
          text={`${userInfo.firstName} ${userInfo.lastName}`}
          style={styles.headerUsername}
        />
      </Body>
      <Right />
    </Header>
  );
};