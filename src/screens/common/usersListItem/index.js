import _ from "lodash";
import moment from "moment";
import React from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { I18n } from "react-redux-i18n";
import { NavigationType } from "../../../constants/navigationTypes";
import { COUNT, DEFAULT_COUNT, EMPTY_RESPONSE, DATE_FORMAT } from "../../../constants/profileConstants";
import { CustomText } from "../text/customText";
import styles from "./styles";

export default class UsersListItem extends React.Component {

  render() {
    const userProfile = this.props.user;
    return (
      <View style={{flexDirection: "row"}} >
        <View style={styles.typeIcon}>
          <FontAwesome5 name="user" style={{ color: "#ffffff" }} size={40} solid />
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
