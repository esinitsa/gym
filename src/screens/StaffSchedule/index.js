import { last } from "lodash";
import { Container, View } from "native-base";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { connect } from "react-redux";
import { userLogOut } from "../../components/login/actions";
import { getCurrentUser } from "../../components/personal/actions";
import theme from "../../styles";
import { CustomText } from "../common/text/customText";
import { renderHeader } from "./components/header";
import { renderTimePicker } from "./components/timePicker";
import styles from "./styles";

class StaffSchedule extends React.PureComponent {
  state = {
    schedule: [...new Array(7)].map(() => {
      return {
        dayOfWeek: "",
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

  onChangeToTime = (time, index) => {
    const lastInterval = last(this.state.schedule[index].intervals);
    lastInterval.to = time;
    this.setState({
      schedule: [...this.state.schedule]
    });
  };

  onChangeFromTime = (time, index) => {
    const lastInterval = last(this.state.schedule[index].intervals);
    lastInterval.from = time;
    this.setState({
      schedule: [...this.state.schedule]
    });
  };

  renderSchedulePickers = (dayOfWeek, index) => {
    const { from, to } = last(this.state.schedule[index].intervals);
    return (
      <View style={{ flexDirection: "row" }}>
        <CustomText text={dayOfWeek} />
        {renderTimePicker(from, index, this.onChangeFromTime)}
        {renderTimePicker(to, index, this.onChangeToTime)}
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
          {this.renderSchedulePickers("Monday", 0)}
          {this.renderSchedulePickers("Tuesday", 1)}
          {this.renderSchedulePickers("Wednesday", 2)}
          {this.renderSchedulePickers("Thursday", 3)}
          {this.renderSchedulePickers("Friday", 4)}
          {this.renderSchedulePickers("Saturday", 5)}
          {this.renderSchedulePickers("Sunday", 6)}
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
