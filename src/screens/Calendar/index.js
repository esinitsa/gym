import { Container, Card, View, Left, Right } from "native-base";
import React from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { ROLES } from "../../constants/userTypes";
import { I18n } from "react-redux-i18n";
import { getUserScheduleById } from "../../components/schedule/actions";
import OnBoardingCalendar from "../OnBoarding/Calendar";
import CustomCalendar from "../common/calendar";
import { renderHeader } from "./components/header";
import { calendarGoToHome } from "../../components/onBoarding/actions";
import {
  userScheduleLoadItems,
  getMarkedDates
} from "../../services/dateManager";
import { CustomText } from "../common/text/customText";
import theme from "../../styles";
import styles from "./styles";

class Calendar extends React.PureComponent {
  componentDidMount() {
    this.props.getUserScheduleById(this.props.currentUser.id);
  }

  renderItem = ({ time, staff, staffRole, duration }) => {
    const { firstName, lastName } = staff;
    return (
      <Card style={styles.card}>
        <View style={styles.calendarItemContainer}>
          <View style={styles.listItem}>
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
          </View>
          {this.renderInfoView(
            I18n.t("labelCalendar.role"),
            I18n.t(ROLES[staffRole])
          )}
          {this.renderInfoView(I18n.t("labelCalendar.duration"), duration)}
        </View>
      </Card>
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
    const { schedule, navigation } = this.props;
    const user = navigation.getParam("user");
    return (
      <Container>
        {renderHeader(this.props)}
        <StatusBar
          backgroundColor={theme.colors.light}
          barStyle='dark-content'
        />
        <CustomCalendar
          markedDates={getMarkedDates(user)}
          schedule={schedule}
          scheduleLoadItems={userScheduleLoadItems}
          renderItem={this.renderItem}
          renderEmptyDate={this.renderEmptyDate}
        />

        <OnBoardingCalendar navigation={navigation} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.userProfile,
  userInfo: state.personal.user,
  schedule: state.schedule.userSchedule,
  calendar: state.onBoarding.calendar
});

const mapDispatchToProps = dispatch => ({
  getUserScheduleById: id => dispatch(getUserScheduleById(id)),
  onBoardingGoToHome: () => dispatch(calendarGoToHome())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
