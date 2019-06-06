import { Button, Container, View } from "native-base";
import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { userLogOut } from "../../components/login/actions";
import { getCurrentUser } from "../../components/personal/actions";
import { BASIC_SCHEDULE } from "../../constants";
import { DAYS_OF_WEEK, DAY_LOCALIZATION } from "../../constants/calendar";
import theme from "../../styles";
import { CustomText } from "../common/text/customText";
import { renderHeader } from "./components/header";
import { TimePickers } from "./components/TimePickers";
import styles from "./styles";

const StaffSchedule = props => {
  const initState = (item, index) => ({
    dayOfWeek: DAYS_OF_WEEK[index],
    intervals: [BASIC_SCHEDULE]
  });

  const [schedule, setSchedule] = useState([...Array(7)].map(initState));

  useEffect(() => props.getUserInfo(), []);

  const onChangeTime = key => (dayIndex, intervalIndex, time) => {
    schedule[dayIndex].intervals[intervalIndex] = {
      ...schedule[dayIndex].intervals[intervalIndex],
      [key]: time
    };
    setSchedule([...schedule]);
  };

  const addedNewPickerLine = dayIndex => {
    schedule[dayIndex].intervals.push(BASIC_SCHEDULE);
    setSchedule([...schedule]);
  };

  const renderSchedulePickers = (dayOfWeek, dayIndex) => {
    return (
      <View style={styles.pickerContent}>
        <CustomText text={I18n.t(DAY_LOCALIZATION[dayOfWeek])} />
        <TimePickers
          dayIndex={dayIndex}
          intervals={schedule[dayIndex].intervals}
          onChangeTime={onChangeTime}
        />
        <Button
          onPress={() => addedNewPickerLine(dayIndex)}
          style={styles.addNewPickerIcon}
        >
          <CustomText text={"Click"} />
        </Button>
      </View>
    );
  };

  const renderHeaderMemo = useMemo(() => renderHeader(props), [props]);

  return (
    <Container>
      {renderHeaderMemo}
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
