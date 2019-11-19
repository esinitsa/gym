import { Body, Button, Header, Left, Right } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { I18n } from "react-redux-i18n";
import { CustomText } from "../../../common/text/customText";
import theme from "../../../../styles";
import styles from "../styles";

export const renderHeader = props => {
  const { userInfo } = props;
  return (
    <Header style={styles.header} noShadow>
      <Left style={styles.leftHeader}>
        <Button transparent>
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
          text={`${userInfo.firstName} ${userInfo.lastName}`}
          style={styles.headerUsername}
        />
      </Body>
      <Right />
    </Header>
  );
};
