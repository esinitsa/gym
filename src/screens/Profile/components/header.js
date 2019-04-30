import React from "react";
import { Button, Header, Left, Body, Right } from "native-base";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { Transition } from "react-navigation-fluid-transitions";
import _ from "lodash";
import Icon from "react-native-vector-icons/AntDesign";
import { CustomText } from "../../common/text/customText";
import styles from "../styles";
import { View } from "react-native";
import { NavigationType } from "../../../constants/navigationTypes";

export const renderHeader = props => {
  const { userInfo, currentUser } = props;

  const goToPersonalPanel = () => {
    props.navigation.navigate(NavigationType.PersonalPanel);
  };

  return (
    <Header style={styles.header}>
      <Left style={styles.leftHeader}>
        {/* <Transition appear="flip" disappear="flip" shared="card"> */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Button
              onPress={goToPersonalPanel}
              transparent
              style={styles.profileIconHeader}
            >
              <Icon
                name={"left"}
                color="#007bff"
                size={25}
                solid
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  marginLeft: 10
                }}
              />
            </Button>
          </View>
        {/* </Transition> */}
      </Left>
      <Body>
        <CustomText text={"Профиль"} style={styles.headerBodyText} />
      </Body>
      <Right />
    </Header>
  );
};
