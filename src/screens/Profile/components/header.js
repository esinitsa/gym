import { Body, Button, Header, Left, Right } from "native-base";
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { NavigationType } from "../../../constants/navigationTypes";
import { CustomText } from "../../common/text/customText";
import styles from "../styles";

export const renderHeader = props => {

  const goToPersonalPanel = () => {
    props.navigation.navigate(NavigationType.PersonalPanel);
  };

  return (
    <Header style={styles.header}>
      <Left style={styles.leftHeader}>
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
      </Left>
      <Body>
        <CustomText text={"Профиль"} style={styles.headerBodyText} />
      </Body>
      <Right />
    </Header>
  );
};
