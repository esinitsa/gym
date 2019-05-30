import { Card, Left, Right } from "native-base";
import React, { Component } from "react";
import { View } from "react-native";
import { Agenda } from "react-native-calendars";
import { I18n } from "react-redux-i18n";
import { ROLES } from "../../../constants/userTypes";
import { getCurrentDate } from "../../../services/calendar";
import {
  getTime,
  getDateForCalendar,
  getMarkedDates,
  convertMillisecondsToMinutes
} from "../../../services/dateManager";
import { CustomText } from "../text/customText";
import { agendaTheme, styles } from "./styles";

export default class Calendar extends Component {
  state = {
    items: {}
  };

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        selected={getCurrentDate()}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        pastScrollRange={1}
        futureScrollRange={2}
        markedDates={getMarkedDates(this.props.previouslyValidated)}
        theme={agendaTheme}
      />
    );
  }

  loadItems = day => {
    setTimeout(() => {
      [...this.props.schedule].map(item => {
        const { duration, startAt, staffRole } = item;
        const time = getDateForCalendar(startAt);
        if (!this.state.items[time]) {
          this.state.items[time] = [];
        }
        this.state.items[time].push({
          time: getTime(startAt),
          duration: convertMillisecondsToMinutes(duration),
          staffRole
        });
      });
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  };

  renderItem = ({ time, staffRole, duration }) => {
    const { user } = this.props;
    return (
      <Card style={styles.card}>
        <View style={styles.calendarItemContainer}>
          <View style={styles.listItem}>
            <Left style={styles.leftView}>
              <CustomText
                text={`${user.firstName} ${user.lastName}`}
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

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };
}
