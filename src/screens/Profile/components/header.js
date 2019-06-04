import { Body, Button, Header, Left, Right } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { I18n } from "react-redux-i18n";
import { NavigationType } from "../../../constants/navigationTypes";
import theme from "../../../styles";
import { CustomText } from "../../common/text/customText";
import styles from "../styles";

export const renderHeader = props => {
  const goToAdminPanel = () => {
    props.navigation.navigate(NavigationType.AdminPanel);
  };

  return (
    <Header style={styles.header} noShadow>
      <Left style={styles.leftHeader}>
        <Button onPress={goToAdminPanel} transparent>
          <Icon
            name={"left"}
            color={theme.colors.primary}
            size={theme.size.icons.small}
            solid
            style={styles.backArrowIcon}
          />
        </Button>
      </Left>
      <Body style={styles.bodyHeader}>
        <CustomText
          text={I18n.t("header.profile")}
          style={styles.headerBodyText}
        />
      </Body>
      <Right />
    </Header>
  );
};
