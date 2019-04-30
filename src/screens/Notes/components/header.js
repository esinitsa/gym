import _ from "lodash";
import { Body, Button, Header, Left, Right } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { NavigationType } from "../../../constants/navigationTypes";
import { CustomText } from "../../common/text/customText";
import styles from "../styles";

export const renderHeader = props => {
  const goToHome = () => {
    _.get(props.userInfo, "id", 0) === _.get(props.currentUser, "id", 1)
      ? props.navigation.navigate(NavigationType.Home)
      : props.navigation.navigate(NavigationType.Profile, {
        id: props.userInfo.id
      });
  };

  const { userInfo } = props;

  return (
    <Header style={styles.header}>
      <Left>
        <Button onPress={goToHome} transparent style={styles.profileIconHeader}>
          <Icon
            name={"left"}
            color="#007bff"
            size={25}
            solid
            style={{
              justifyContent: "center",
              alignSelf: "center"
            }}
          />
        </Button>
      </Left>
      <Body style={styles.bodyHeader}>
        <CustomText text={"Заметки"} style={styles.bodyHeaderText} />
        <CustomText
          text={`${userInfo.firstName} ${userInfo.lastName}`}
          style={{ fontSize: 14, color: "grey" }}
        />
      </Body>
      <Right />
    </Header>
  );
};
