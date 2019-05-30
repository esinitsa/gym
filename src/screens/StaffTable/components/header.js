import { Body, Button, Header, Left, Right, Form } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { NavigationType } from "../../../constants/navigationTypes";
import theme from "../../../styles";
import styles from "../styles";
import StaffPicker from "./picker";

export const renderHeader = props => {
  const goToHome = () => props.navigation.navigate(NavigationType.Home);

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
      <Body>
        <Form>
          <StaffPicker getUsersByRole={props.getUsersByRole} />
        </Form>
      </Body>
      <Right />
    </Header>
  );
};
