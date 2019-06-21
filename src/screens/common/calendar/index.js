import React, { Component } from "react";
import { Agenda } from "react-native-calendars";
import { getCurrentDate } from "../../../services/calendar";
import { calendarDateIterator, getDateForCalendar } from "../../../services/dateManager";
import { agendaTheme } from "./styles";

export default class Calendar extends Component {
  state = {
    items: {}
  };

  render() {
    const { renderItem, renderEmptyDate, markedDates} = this.props;
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        selected={getCurrentDate()}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        pastScrollRange={1}
        futureScrollRange={2}
         markedDates={markedDates}
        theme={agendaTheme}
      />
    );
  }

  loadItems = day => {
    setTimeout(() => {
      const { scheduleLoadItems, schedule, duration} = this.props;
      let items = this.state.items;
      for (let i = -30; i < 90; i++) {
        const date = calendarDateIterator(day, i);
        const strDate = getDateForCalendar(date);
        if (!items[strDate]) {
          items[strDate] = [];
          items[strDate] = scheduleLoadItems(items[strDate],schedule, strDate, duration);
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  };

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };
}
