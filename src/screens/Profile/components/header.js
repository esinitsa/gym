import { Body, Button, Header, Left, Right } from "native-base";
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { NavigationType } from "../../../constants/navigationTypes";
import { I18n } from "react-redux-i18n";
import { CustomText } from "../../common/text/customText";
import styles from "../styles";
import theme from "../../../styles";

export const renderHeader = props => {
  const goToPersonalPanel = () => {
    props.navigation.navigate(NavigationType.PersonalPanel);
  };

  return (
    <Header style={styles.header}>
      <Left style={styles.leftHeader}>
        <View style={styles.headerView}>
          <Button
            onPress={goToPersonalPanel}
            transparent
            style={styles.profileIconHeader}
          >
            <Icon
              name={"left"}
              color={theme.colors.actionComponent}
              size={25}
              solid
              style={styles.backArrowIcon}
            />
          </Button>
        </View>
      </Left>
      <Body>
        <CustomText text={I18n.t("header.profile")} style={styles.headerBodyText} />
      </Body>
      <Right />
    </Header>
  );
};
