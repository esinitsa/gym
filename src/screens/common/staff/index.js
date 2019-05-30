import React from "react";
import { View, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import theme from "../../../styles";
import { CustomText } from "../text/customText";
import { NavigationType } from "../../../constants/navigationTypes";
import styles from "./styles";
import { I18n } from "react-redux-i18n";

export default class StaffItem extends React.PureComponent {

  goTo = (screen, params) => this.props.navigation.navigate(screen, params);

  goToAppointment = () => this.goTo(NavigationType.Appointment);

  makeAppointment = () => {
    const { staff, user } = this.props;
    this.props.makeAppointment({
      targetUserId: user.id,
      targetStaffId: staff.id,
      duration: 3300
    });
  };

  render() {
    const { staff } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.typeIcon}>
          <FontAwesome5
            name="user"
            style={styles.userIcon}
            size={theme.size.icons.medium}
            solid
          />
        </View>
        <View style={styles.fullNameView}>
          <CustomText
            style={styles.nameText}
            text={`${staff.firstName} ${staff.lastName}`}
          />
        </View>
        <View style={styles.valueView}>
          <CustomText style={styles.userInfoText} text={"50$"} />
        </View>
        <View style={styles.scheduleView}>
          <TouchableOpacity onPress={this.goToAppointment}>
            <CustomText
              text={I18n.t("profile.makeAppointment")}
              style={styles.activeAppointmentText}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
