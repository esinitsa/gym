import { StyleSheet } from "react-native";
import theme from "../../../styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.container
  },
  calendarItemContainer: {
    paddingLeft: theme.size.padding.empty,
    paddingBottom: theme.size.padding.empty,
    paddingRight: theme.size.padding.empty,
    paddingTop: theme.size.padding.empty,
    width: theme.size.parameters.fullWidth
  },
  infoView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: theme.size.padding.mediumVertical
  },
  infoViewLabelText: {
    fontWeight: theme.fonts.weight.bold,
    color: theme.colors.secondary
  },
  infoViewValueText: {
    fontWeight: theme.fonts.weight.bold,
    color: theme.colors.text
  },
  listItem: {
    width: theme.size.parameters.fullWidth,
    flexDirection: "row",
    marginBottom: theme.size.margin.small,
    borderBottomWidth: theme.size.border.width.primary,
    borderBottomColor: theme.colors.container,
    paddingBottom: theme.size.padding.small
  },
  leftView: {
    flex: 1
  },
  bodyView: {
    flex: 1,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center"
  },
  rightView: {
    flex: 1
  },
  rightContentView: {
    alignContent: "center",
    alignItems: "center"
  },
  date: {
    color: theme.colors.secondary,
    fontSize: theme.fonts.size.placeholder,
    fontWeight: theme.fonts.weight.normal
  },
  fullName: {
    fontSize: theme.fonts.size.standard,
    fontWeight: theme.fonts.weight.bold,
  },
  timeText: {
    color: theme.colors.primary,
    fontSize: theme.fonts.size.standard,
    fontWeight: theme.fonts.weight.bold
  },
  card: {
    paddingVertical: theme.size.padding.large,
    paddingHorizontal: theme.size.padding.medium,
    width: theme.size.parameters.calendarCardWidth,
    height: theme.size.parameters.large,
    marginTop: theme.size.margin.medium,
    borderRadius: theme.size.border.radius.secondary,
    shadowColor: theme.shadows.color,
    shadowOffset: theme.shadows.offset,
    shadowOpacity: theme.shadows.opacity,
    shadowRadius: theme.shadows.radius
  },
  cardItem: {
    justifyContent: "center",
    width: theme.size.parameters.fullWidth,
    paddingTop: theme.size.padding.medium,
    paddingBottom: theme.size.padding.medium
  },
  emptyItem: {
    backgroundColor: theme.colors.light,
    flex: 1,
    justifyContent: "center"
  },
  itemText: {
    fontSize: theme.fonts.size.standard,
    color: theme.colors.text,
    textAlign: "left"
  },
  item: {
    backgroundColor: theme.colors.light,
    padding: theme.size.padding.medium,
    flex: 1,
    justifyContent: "flex-start"
  },
  emptyItemText: {
    fontSize: theme.fonts.size.subtitle,
    color: theme.colors.secondary,
    textAlign: "center"
  }
});

export const agendaTheme = {
  backgroundColor: theme.colors.container,
  todayTextColor: theme.colors.success,
  agendaKnobColor: theme.colors.container,
  agendaTodayColor: theme.colors.success,
  selectedDayBackgroundColor: theme.colors.primary,
  dotColor: theme.colors.primary,
  textMonthFontSize: theme.fonts.size.subtitle,
  textDayFontFamily: theme.fonts.family.standard,
  textMonthFontFamily: theme.fonts.family.standard,
  textDayHeaderFontFamily: theme.fonts.family.standard,
  textMonthFontWeight: theme.fonts.weight.bolder,
  textDayHeaderFontSize: theme.fonts.size.standard
};
