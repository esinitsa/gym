import { StyleSheet } from "react-native";
import theme from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: theme.size.margin.medium,
    borderTopColor: theme.colors.secondary,
    borderTopWidth: theme.size.border.width.primary,
    paddingVertical: theme.size.padding.medium,
    height: theme.size.parameters.medium
  },
  headerContainer: {
    flexDirection: "row",
    marginHorizontal: theme.size.margin.medium,
    height: theme.size.parameters.staffTable.header.height
  },
  userIcon: {
    color: theme.colors.light
  },
  typeIcon: {
    height: theme.size.parameters.small,
    width: theme.size.parameters.small,
    borderRadius: theme.size.border.radius.secondary,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: theme.shadows.color,
    shadowOffset: theme.shadows.offset,
    shadowOpacity: theme.shadows.opacity,
    shadowRadius: theme.shadows.radius
  },
  headerTableView: {
    width: theme.size.parameters.small,
    marginRight: theme.size.margin.medium,
    alignContent: "center"
  },
  userInfoText: {
    paddingHorizontal: theme.size.padding.medium,
    paddingVertical: theme.size.padding.small,
    fontSize: theme.fonts.size.placeholder,
    textAlign: "left"
  },
  fullNameView: {
    flex: 1,
    justifyContent: "center"
  },
  valueView: {
    width: theme.size.parameters.staffTable.body.width.value,
    justifyContent: "center"
  },
  scheduleHeaderView: {
    width: theme.size.parameters.staffTable.body.width.schedule,
    justifyContent: "center"
  },
  scheduleView: {
    flexDirection: "row",
    width: theme.size.parameters.staffTable.body.width.schedule,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: theme.size.padding.medium
  },
  activeAppointmentText: {
    color: theme.colors.primary,
    fontSize: theme.fonts.size.placeholder,
    fontWeight: theme.fonts.weight.bold
  },
  nameText: {
    paddingLeft: theme.size.padding.items,
    paddingVertical: theme.size.padding.small,
    fontSize: theme.fonts.size.placeholder,
    textAlign: "left"
  },
  emailText: {
    paddingHorizontal: theme.size.padding.items,
    paddingBottom: theme.size.padding.mediumVertical,
    fontSize: theme.fonts.size.placeholder,
    color: theme.colors.secondary
  },
  listItem: {
    flexDirection: "row",
    marginHorizontal: theme.size.margin.medium,
    paddingVertical: theme.size.padding.medium,
    borderTopWidth: theme.size.border.width.primary,
    borderTopColor: theme.colors.secondary,
    backgroundColor: theme.colors.light,
    paddingLeft: theme.size.padding.medium,
  }
});

export default styles;
