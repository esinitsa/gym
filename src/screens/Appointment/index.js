import { Container, View, Left, Right } from "native-base";
import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { get } from "lodash";
import {
  getCurrentUser,
  getUserById,
  getUsersByRole,
  makeAppointment
} from "../../components/personal/actions";
import {
  APPOINTMENT_DURATIONS,
  PICKER_TYPES,
} from "../../constants";
import { STAFF_ROLES } from "../../constants/userTypes";
import {
  convertDateToISOFormat,
  convertMinutesToMilliseconds
} from "../../services/dateManager";
import theme from "../../styles";
import { CustomText } from "../common/text/customText";
import { renderHeader } from "./components/header";
import { renderPicker } from "./components/picker";
import styles from "./styles";
import { NavigationType } from "../../constants/navigationTypes";

class Appointment extends React.PureComponent {
  state = {
    selectedRole: 0,
    selectedStaff: 0,
    selectedDuration: 0
  };

  componentDidMount() {
    this.props.getUsersByRole(STAFF_ROLES[this.state.selectedRole]);
  }

  goTo = this.props.navigation.navigate;

  goToStaffCalender = () =>
    this.goTo(NavigationType.StaffCalendar, {
      staff: this.props.staff[this.state.selectedStaff],
      duration: APPOINTMENT_DURATIONS[this.state.selectedDuration],
      role: STAFF_ROLES[this.state.selectedRole]
    });

  makeAppointment = () => {
    const { currentUser, staff } = this.props;
    const { selectedStaff, selectedDuration, date, time } = this.state;
    this.props.makeAppointment({
      targetUserId: currentUser.id,
      targetStaffId: staff[selectedStaff].id,
      targetStaffRole: STAFF_ROLES[this.state.selectedRole],
      startAt: convertDateToISOFormat(date, time),
      duration: convertMinutesToMilliseconds(
        APPOINTMENT_DURATIONS[selectedDuration]
      )
    });
  };

  onValueChangeRole = value => {
    this.setState(
      {
        selectedRole: value
      },
      () => this.props.getUsersByRole(STAFF_ROLES[this.state.selectedRole])
    );
  };

  onValueChangeStaff = value => this.setState({ selectedStaff: value });

  onValueChangeDuration = value => this.setState({ selectedDuration: value });

  onChangeDate = date => this.setState({ date });

  onChangeTime = time => this.setState({ time });

  renderLabelWithPicker = (labelText, pickerInfo) => {
    return (
      <View style={styles.labelWithPickerView}>
        <Left style={styles.leftView}>
          <CustomText text={labelText} style={styles.label} />
        </Left>
        <Right style={styles.rightView}>
          <View style={styles.pickerFrame}>{renderPicker(pickerInfo)}</View>
        </Right>
      </View>
    );
  };

  render() {
    const { selectedRole, selectedStaff, selectedDuration } = this.state;
    return (
      <Container>
        {renderHeader(this.props)}
        <StatusBar
          backgroundColor={theme.colors.light}
          barStyle="dark-content"
        />
        <View style={styles.content}>
          {this.renderLabelWithPicker(I18n.t("labels.role"), {
            selectedValue: selectedRole,
            onValueChange: this.onValueChangeRole,
            pickerData: STAFF_ROLES,
            type: PICKER_TYPES.ROLE
          })}
          {this.renderLabelWithPicker(I18n.t("labels.userName"), {
            selectedValue: selectedStaff,
            onValueChange: this.onValueChangeStaff,
            pickerData: get(this.props, "staff", []),
            type: PICKER_TYPES.STAFF
          })}
          {this.renderLabelWithPicker(I18n.t("labels.duration"), {
            selectedValue: selectedDuration,
            onValueChange: this.onValueChangeDuration,
            pickerData: APPOINTMENT_DURATIONS,
            type: PICKER_TYPES.DURATION
          })}
          <TouchableOpacity
            style={styles.button}
            onPress={this.goToStaffCalender}
          >
            <CustomText
              style={styles.buttonText}
              text={I18n.t("profile.viewSchedule")}
            />
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.user.userProfile,
  userInfo: state.personal.user,
  staff: state.personal.usersByRole
});

const mapDispatchToProps = dispatch => ({
  makeAppointment: appointmentBody =>
    dispatch(makeAppointment(appointmentBody)),
  getUserById: id => dispatch(getUserById(id)),
  getUsersByRole: role => dispatch(getUsersByRole(role)),
  getUserInfo: () => dispatch(getCurrentUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointment);
