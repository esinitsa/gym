import { Body, Button, Header, Left, Right, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { I18n } from "react-redux-i18n";
import theme from "../../../../styles";
import { CustomText } from "../../../common/text/customText";
import styles from "../styles";

export const renderHeader = props => {
  const {
    userInfo,
    subscriptions: { stepExtendCard }
  } = props;
  return (
    <Header style={[styles.header, { position: "absolute" }]} noShadow>
      <Left>
        <TouchableOpacity transparent style={styles.leftHeader}>
          <Icon
            name={"left"}
            color={theme.colors.primary}
            size={theme.size.icons.small}
            solid
            style={styles.backArrowIcon}
          />
        </TouchableOpacity>
      </Left>
      <Body>
        <View style={styles.headerBody}>
          <CustomText
            text={I18n.t("header.subscriptions")}
            style={styles.bodyHeaderText}
          />
          <CustomText
            text={`${userInfo.firstName} ${userInfo.lastName}`}
            style={styles.headerUsername}
          />
        </View>
      </Body>
      <Right style={{ flex: 1 }} />
    </Header>
  );
};
