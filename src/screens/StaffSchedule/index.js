import { last } from "lodash";
import { Container, View } from "native-base";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { I18n } from "react-redux-i18n";
import { connect } from "react-redux";
import { userLogOut } from "../../components/login/actions";
import { getCurrentUser } from "../../components/personal/actions";
import { DAYS_OF_WEEK, DAY_LOCALIZATION } from "../../constants/calendar";
import theme from "../../styles";
import { CustomText } from "../common/text/customText";
import { renderHeader } from "./components/header";
import { renderTimePicker } from "./components/timePicker";
import { pickers } from "./components/pickers";
import styles from "./styles";

class StaffSchedule extends React.PureComponent {
  state = {
    schedule: [...new Array(7)].map((item, index) => {
      return {
        dayOfWeek: DAYS_OF_WEEK[index],
        intervals: [
          {
            from: "9:00",
            to: "18:00"
          }
        ]
      };
    })
  };

  componentDidMount() {
    this.props.getUserInfo();
  }

  onChangeToTime = (dayIndex, intervalIndex, time) => {
    this.state.schedule[dayIndex].intervals[intervalIndex].to = time;
    this.setState({
      schedule: [...this.state.schedule]
    });
  };

  onChangeFromTime = (dayIndex, intervalIndex, time) => {
    this.state.schedule[dayIndex].intervals[intervalIndex].from = time;
    this.setState({
      schedule: [...this.state.schedule]
    });
  };

  renderSchedulePickers = (dayOfWeek ,dayIndex) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <CustomText text={I18n.t(DAY_LOCALIZATION[dayOfWeek])} />
        {pickers(dayIndex, this.state.schedule[dayIndex].intervals, this.onChangeFromTime, this.onChangeToTime)}
      </View>
    );
  };

  render() {
    return (
      <Container>
        {renderHeader(this.props)}
        <StatusBar
          backgroundColor={theme.colors.light}
          barStyle="dark-content"
        />
        <SafeAreaView style={styles.container}>
          {DAYS_OF_WEEK.map((day, index) =>
            this.renderSchedulePickers(day, index)
          )}
        </SafeAreaView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  userInfo: state.personal.user
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getCurrentUser()),
  onLogOut: () => dispatch(userLogOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffSchedule);
