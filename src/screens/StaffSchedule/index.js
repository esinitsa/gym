import { Container, View, Button } from "native-base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { userLogOut } from "../../components/login/actions";
import { getCurrentUser } from "../../components/personal/actions";
import { DAYS_OF_WEEK, DAY_LOCALIZATION } from "../../constants/calendar";
import theme from "../../styles";
import { CustomText } from "../common/text/customText";
import { renderHeader } from "./components/header";
import { pickers } from "./components/pickers";
import styles from "./styles";

const StaffSchedule = props => {
  const [schedule, setSchedule] = useState(
    [...new Array(7)].map((item, index) => {
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
  );

  useEffect(() => props.getUserInfo(), []);

  const onChangeToTime = (dayIndex, intervalIndex, time) => {
    schedule[dayIndex].intervals[intervalIndex].to = time;
    setSchedule([...schedule]);
  };

  const onChangeFromTime = (dayIndex, intervalIndex, time) => {
    schedule[dayIndex].intervals[intervalIndex].from = time;
    setSchedule([...schedule]);
  };

  const addedNewPickerLine = dayIndex => {
    schedule[dayIndex].intervals.push({
      from: "00:00",
      to: "00:00"
    });
    setSchedule([...schedule]);
  };

  const renderSchedulePickers = (dayOfWeek, dayIndex) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <CustomText text={I18n.t(DAY_LOCALIZATION[dayOfWeek])} />
        {pickers(
          dayIndex,
          schedule[dayIndex].intervals,
          onChangeFromTime,
          onChangeToTime
        )}
        <Button onPress={() => addedNewPickerLine(dayIndex)} style={{height: 50, width: 50}}>
          <CustomText text={"Click"} />
        </Button>
      </View>
    );
  };

  return (
    <Container>
      {renderHeader(props)}
      <StatusBar backgroundColor={theme.colors.light} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {DAYS_OF_WEEK.map((day, index) => renderSchedulePickers(day, index))}
      </SafeAreaView>
    </Container>
  );
};

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
