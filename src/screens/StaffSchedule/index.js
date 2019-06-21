import { Container, View } from "native-base";
import { head } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import {
  getCurrentUser,
  setStaffSchedule,
  getStaffBookedSession
} from "../../components/personal/actions";
import { BASIC_SCHEDULE } from "../../constants";
import { DAYS_OF_WEEK, DAY_LOCALIZATION } from "../../constants/calendar";
import {
  compareTimeFromPickers,
  incrementFromTime,
  incrementToTime
} from "../../services/schedule";
import { showToast } from "../../services/UIActions";
import theme from "../../styles";
import { CustomText } from "../common/text/customText";
import { renderHeader } from "./components/header";
import { ButtonIcon } from "../common/buttons/icon";
import { TimePickers } from "./components/TimePickers";
import { NavigationType } from "../../constants/navigationTypes";
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

  const clearDaySchedule = dayIndex => () => {
    schedule[dayIndex].intervals.length = 0;
    setSchedule([...schedule]);
  };

  const addBasicSchedule = dayIndex => () => {
    schedule[dayIndex].intervals.push(BASIC_SCHEDULE);
    setSchedule([...schedule]);
  };

  const [errorStatus, setErrorStatus] = useState(Array(7).fill(false));
  const acceptSchedule = () => {
    const newErrorStatus = validateSchedule(schedule, errorStatus);
    setErrorStatus([...newErrorStatus]);
    errorStatus.includes(true)
      ? showToast(I18n.t("exceptions.crossingTime"))
      : saveSchedule();
  };

  const saveSchedule = () => {
    props
      .setStaffSchedule({
        targetUserId: props.currentUser.id,
        schedule
      })
      .then(() => goToHome());
  };

  const goToHome = () => props.navigation.navigate(NavigationType.Home);

  const renderSchedulePickers = (dayOfWeek, dayIndex) => {
    return (
      <View style={styles.content}>
        <CustomText
          text={I18n.t(DAY_LOCALIZATION[dayOfWeek])}
          style={styles.dayTitle}
        />
        <View>
          <View style={styles.pickerContent}>
            <TimePickers
              dayIndex={dayIndex}
              intervals={schedule[dayIndex].intervals}
              onChangeTime={onChangeTime}
              addPickerLine={addPickerLine}
              removePickerLine={removePickerLine}
              addBasicSchedule={addBasicSchedule(dayIndex)}
              clearDaySchedule={clearDaySchedule(dayIndex)}
            />
            {schedule[dayIndex].intervals.length > 0 ? (
              <ButtonIcon
                event={clearDaySchedule(dayIndex)}
                type={"Ionicons"}
                icon={"ios-close-circle-outline"}
                color={theme.colors.primary}
                size={26}
                buttonStyle={styles.pickerToggle}
              />
            ) : (
              <ButtonIcon
                event={addBasicSchedule(dayIndex)}
                type={"Ionicons"}
                icon={"ios-add-circle-outline"}
                color={theme.colors.primary}
                size={26}
                buttonStyle={styles.pickerToggle}
              />
            )}
          </View>
          {errorStatus[dayIndex] && (
            <CustomText
              style={styles.errorText}
              text={I18n.t("schedule.messages.crossingIntervals")}
            />
          )}
        </View>
      </View>
    );
  };

  const RenderHeaderMemo = () =>
    useMemo(() => renderHeader({ ...props, acceptSchedule }), [
      props,
      schedule
    ]);

  return (
    <Container>
      <RenderHeaderMemo />
      <StatusBar backgroundColor={theme.colors.light} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.pickersContainer}>
            {DAYS_OF_WEEK.map((day, index) =>
              renderSchedulePickers(day, index)
            )}
          </View>
        </ScrollView>
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
  setStaffSchedule: staffScheduleBody =>
    dispatch(setStaffSchedule(staffScheduleBody)),
  getStaffSchedule: staffId => dispatch(getStaffBookedSession(staffId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffSchedule);
