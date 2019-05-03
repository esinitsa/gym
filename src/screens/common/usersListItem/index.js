import _ from "lodash";
import React from "react";
import {  View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {   EMPTY_RESPONSE } from "../../../constants/profileConstants";
import { CustomText } from "../text/customText";
import styles from "./styles";

export default class UsersListItem extends React.PureComponent {

  render() {
    const userProfile = this.props.user;
    return (
      <View style={styles.container} >
        <View style={styles.typeIcon}>
          <FontAwesome5 name="user" style={styles.userIcon} size={40} solid />
        </View>
        <View >
          <CustomText
            style={styles.userInfoText}
            text={`${_.get(userProfile, "firstName", EMPTY_RESPONSE)} `
              + `${_.get(userProfile, "lastName", EMPTY_RESPONSE)}`}
          />
          <CustomText style={styles.emailText} text={_.get(userProfile, "email", EMPTY_RESPONSE)} />
        </View>
      </View>
    );
  }
}
