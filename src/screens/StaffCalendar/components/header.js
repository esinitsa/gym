import { Body, Button, Header, Left, Right } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { I18n } from "react-redux-i18n";
import { NavigationType } from "../../../constants/navigationTypes";
import { CustomText } from "../../common/text/customText";
import theme from "../../../styles";
import styles from "../styles";

export const renderHeader = props => {
  const { currentUser } = props;

  const goTo = (screen, params) => props.navigation.navigate(screen, params);

  const goToHome = () => goTo(NavigationType.Home);

  return (
    <Header style={styles.header} noShadow>
      <Left style={styles.leftHeader}>
        <Button onPress={goToHome} transparent>
          <Icon
            name={"left"}
            color={theme.colors.primary}
            size={theme.size.icons.small}
            solid
            style={styles.backArrowIcon}
          />
        </Button>
      </Left>
      <Body style={styles.headerBody}>
        <CustomText
          text={I18n.t("header.calendar")}
          style={styles.bodyHeaderText}
        />
        <CustomText
          text={`${currentUser.firstName} ${currentUser.lastName}`}
          style={styles.headerUsername}
        />
      </Body>
      <Right />
    </Header>
  );
};
