import { Container, Card, View, Left, Right } from "native-base";
import React from "react";
import { StatusBar, TouchableOpacity, Alert } from "react-native";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import {
  getStaffSchedule,
  getUserScheduleById,
  makeAppointment
} from "../../components/personal/actions";
import { staffScheduleLoadItems } from "../../services/dateManager";
import CustomCalendar from "../common/calendar";
import { renderHeader } from "./components/header";
import { EMPTY_OBJECT } from "../../constants";
import { CustomText } from "../common/text/customText";
import theme from "../../styles";
import styles from "./styles";

class StaffCalendar extends React.PureComponent {
  componentDidMount() {
    const staff = this.props.navigation.getParam("staff");
    this.props.getStaffSchedule(staff.id);
    this.props.getUserScheduleById(this.props.currentUser.id);
  }

  acceptMakeAppointment = (startAt, duration, staff) => () => {
    const performMakeAppointment = () => {
      const { currentUser, navigation } = this.props;
      const targetStaffRole = navigation.getParam("role");
      this.props.makeAppointment({
        targetUserId: currentUser.id,
        targetStaffId: staff.id,
        targetStaffRole,
        startAt,
        duration
      });
    };
    Alert.alert(
      I18n.t("makeAppointment.header"),
      I18n.t("makeAppointment.description"),
      [
        {
          text: I18n.t("makeAppointment.cancel"),
          style: "cancel"
        },
        {
          text: I18n.t("makeAppointment.confirm"),
          onPress: performMakeAppointment
        }
      ],
      { cancelable: true }
    );
  };

  renderItem = ({ time, staff, startAt, duration }) => {
    const { firstName, lastName } = staff;
    const makeAnAppointment = this.acceptMakeAppointment(startAt, duration, staff);
    return (
      <TouchableOpacity onPress={makeAnAppointment}>
        <Card style={styles.card}>
          <Left style={styles.leftView}>
            <CustomText
              text={`${firstName} ${lastName}`}
              style={styles.fullName}
            />
          </Left>
          <Right style={styles.rightView}>
            <View style={styles.rightContentView}>
              <CustomText text={time} style={styles.timeText} />
            </View>
          </Right>
        </Card>
      </TouchableOpacity>
    );
  };

  renderInfoView = (label, textValue) => {
    return (
      <View style={styles.infoView}>
        <CustomText text={label} style={styles.infoViewLabelText} />
        <CustomText text={textValue} style={styles.infoViewValueText} />
      </View>
    );
  };

  renderEmptyDate = () => {
    return (
      <Card style={styles.card}>
        <View style={styles.emptyItem}>
          <CustomText
            style={styles.emptyItemText}
            text={I18n.t("profile.emptyCalendarRecords")}
          />
        </View>
      </Card>
    );
  };

  render() {
    const { staffSchedule } = this.props;
    const staff = this.props.navigation.getParam("staff");
    const duration = this.props.navigation.getParam("duration");
    return (
      <Container>
        {renderHeader(this.props)}
        <StatusBar
          backgroundColor={theme.colors.light}
          barStyle="dark-content"
        />
        <CustomCalendar
          schedule={staffSchedule}
          scheduleLoadItems={staffScheduleLoadItems}
          renderItem={this.renderItem}
          renderEmptyDate={this.renderEmptyDate}
          markedDates={EMPTY_OBJECT}
          user={staff}
          duration={duration}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.userProfile,
  userInfo: state.personal.user,
  schedule: state.personal.userSchedule,
  staffSchedule: state.personal.staffSchedule
});

const mapDispatchToProps = dispatch => ({
  getStaffSchedule: id => dispatch(getStaffSchedule(id)),
  getUserScheduleById: id => dispatch(getUserScheduleById(id)),
  makeAppointment: appointmentBody => dispatch(makeAppointment(appointmentBody))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffCalendar);
