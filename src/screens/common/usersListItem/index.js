import { get } from "lodash";
import React from "react";
import {  View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { EMPTY_RESPONSE } from "../../../constants/profileConstants";
import theme from "../../../styles";
import { CustomText } from "../text/customText";
import styles from "./styles";

export default class UsersListItem extends React.PureComponent {

  render() {
    const userProfile = this.props.user;
    return (
      <View style={styles.container} >
        <View style={styles.typeIcon}>
          <FontAwesome5 name="user" style={styles.userIcon} size={theme.size.icons.medium} solid />
        </View>
        <View >
          <CustomText
            style={styles.userInfoText}
            text={`${get(userProfile, "firstName", EMPTY_RESPONSE)} `
              + `${get(userProfile, "lastName", EMPTY_RESPONSE)}`}
          />
          <CustomText style={styles.emailText} text={get(userProfile, "email", EMPTY_RESPONSE)} />
        </View>
      </View>
    );
  }
}
