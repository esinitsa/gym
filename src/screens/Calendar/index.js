import { get, last } from "lodash";
import { Container } from "native-base";
import React from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import {
  getUserScheduleById
} from "../../components/personal/actions";
import CustomCalendar from "../common/calendar";
import { renderHeader } from "./components/header";
import theme from "../../styles";

class Calendar extends React.PureComponent {
  componentDidMount() {
    this.props.getUserScheduleById(this.props.currentUser.id);
  }

  render() {
    const { schedule, currentUser, navigation } = this.props;
    const user = navigation.getParam("user");
    const lastActiveSubscription = last(get(user, "subscriptions"));
    return (
      <Container>
        {renderHeader(this.props)}
        <StatusBar
          backgroundColor={theme.colors.light}
          barStyle="dark-content"
        />
        <CustomCalendar
          previouslyValidated={get(
            lastActiveSubscription,
            "previouslyValidated",
            []
          )}
          schedule={schedule}
          user={currentUser}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.userProfile,
  userInfo: state.personal.user,
  schedule: state.personal.userSchedule
});

const mapDispatchToProps = dispatch => ({
  getUserScheduleById: id => dispatch(getUserScheduleById(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
