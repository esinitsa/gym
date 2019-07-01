import { Container, Card, View, Left, Right } from "native-base";
import React from "react";
import { StatusBar, TouchableOpacity, Alert } from "react-native";
import { get } from "lodash";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { makeAppointment } from "../../components/personal/actions";
import {
  getStaffSchedule,
  getStaffBookedSession
} from "../../components/schedule/actions";
import {
  staffScheduleLoadItems,
  convertMinutesToMilliseconds
} from "../../services/dateManager";
import CustomCalendar from "../common/calendar";
import { renderHeader } from "./components/header";
import { EMPTY_OBJECT } from "../../constants";
import { CustomText } from "../common/text/customText";
import theme from "../../styles";
import styles from "./styles";

class StaffCalendar extends React.PureComponent {
  componentDidMount() {
    const { navigation, getBookedSession, getStaffScheduleById } = this.props;
    const staff = navigation.getParam("staff");
    getStaffScheduleById(staff.id);
    getBookedSession(staff.id);
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
    const makeAnAppointment = this.acceptMakeAppointment(
      startAt,
      convertMinutesToMilliseconds(duration),
      staff
    );
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
    const { navigation } = this.props;
    const staff = navigation.getParam("staff");
    const duration = navigation.getParam("duration");
    return (
      <Container>
        {renderHeader(this.props)}
        <StatusBar
          backgroundColor={theme.colors.light}
          barStyle="dark-content"
        />
        <CustomCalendar
          schedule={get(this.props, "staffSchedule", [])}
          bookedSessions={get(this.props, "schedule", [])}
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
  schedule: state.schedule.userSchedule,
  staffSchedule: state.schedule.staffSchedule
});

const mapDispatchToProps = dispatch => ({
  getStaffScheduleById: id => dispatch(getStaffSchedule(id)),
  getBookedSession: staffId => dispatch(getStaffBookedSession(staffId)),
  makeAppointment: appointmentBody => dispatch(makeAppointment(appointmentBody))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffCalendar);
