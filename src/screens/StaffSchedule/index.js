import { Container, View } from "native-base";
import { head } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import {
  getCurrentUser,
  setStaffSchedule
} from "../../components/personal/actions";
import { BASIC_SCHEDULE } from "../../constants";
import { DAYS_OF_WEEK, DAY_LOCALIZATION } from "../../constants/calendar";
import {
  compareTimeFromPickers,
  incrementFromTime,
  incrementToTime,
} from "../../services/schedule";
import { showToast } from "../../services/UIActions";
import theme from "../../styles";
import { CustomText } from "../common/text/customText";
import { renderHeader } from "./components/header";
import { TimePickers } from "./components/TimePickers";
import { validateSchedule } from "../../services/schedule";
import styles from "./styles";

const StaffSchedule = props => {
  const initState = (item, index) => ({
    dayOfWeek: DAYS_OF_WEEK[index],
    intervals: [BASIC_SCHEDULE]
  });

  const [schedule, setSchedule] = useState([...Array(7)].map(initState));

  useEffect(() => props.getUserInfo(), []);

  const onChangeTime = key => (dayIndex, intervalIndex, time) => {
    const newInterval = {
      ...schedule[dayIndex].intervals[intervalIndex],
      [key]: time
    };
    if (compareTimeFromPickers(newInterval)) {
      schedule[dayIndex].intervals[intervalIndex] = newInterval;
      setSchedule([...schedule]);
    } else {
      showToast(I18n.t("exceptions.invalidTime"));
    }
  };

  const addPickerLine = dayIndex => {
    setSchedule(prevSchedule => {
      const lastToTime = head(prevSchedule[dayIndex].intervals).to;
      schedule[dayIndex].intervals.push({
        from: incrementFromTime(lastToTime),
        to: incrementToTime(lastToTime)
      });
      return [...schedule];
    });
  };

  const removePickerLine = dayIndex => {
    schedule[dayIndex].intervals.pop();
    setSchedule([...schedule]);
  };

  const [errorStatus, setErrorStatus] = useState(Array(7).fill(false));
  const acceptSchedule = () => {
    const newErrorStatus = validateSchedule(schedule, errorStatus);
    setErrorStatus([...newErrorStatus]);
    errorStatus.includes(true)
      ? showToast(I18n.t("exceptions.crossingTime"))
      : props.setStaffSchedule({
          targetUserId: props.currentUser.id,
          schedule
        });
  };

  const renderSchedulePickers = (dayOfWeek, dayIndex) => {
    return (
      <View style={styles.content}>
        <CustomText text={I18n.t(DAY_LOCALIZATION[dayOfWeek])} style={styles.dayTitle} />
        <TimePickers
          dayIndex={dayIndex}
          intervals={schedule[dayIndex].intervals}
          onChangeTime={onChangeTime}
          addPickerLine={addPickerLine}
          removePickerLine={removePickerLine}
        />
        {errorStatus[dayIndex] && (
          <CustomText
            text={"ERROR"}
            style={styles.dayTitle}
          />
        )}
      </View>
    );
  };

  const RenderHeaderMemo = () =>
    useMemo(() => renderHeader({ ...props, acceptSchedule }), [props, schedule]);

  return (
    <Container>
      <RenderHeaderMemo/>
      <StatusBar backgroundColor={theme.colors.light} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {DAYS_OF_WEEK.map((day, index) => renderSchedulePickers(day, index))}
      </SafeAreaView>
    </Container>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.userProfile,
  userInfo: state.personal.user
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getCurrentUser()),
  setStaffSchedule: staffScheduleBody => dispatch(setStaffSchedule(staffScheduleBody)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffSchedule);
