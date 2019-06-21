import { StyleSheet } from "react-native";
import theme from "../../styles/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.container
  },
  pickersContainer: {
    marginTop: theme.size.margin.large
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: theme.size.margin.large
  },
  pickerContent: {
    flexDirection: "row"
  },
  addNewPickerIcon: {
    width: theme.size.parameters.small,
    height: theme.size.parameters.small
  },
  header: {
    borderBottomWidth: theme.size.border.width.empty,
    backgroundColor: theme.colors.light
  },
  headerBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bodyHeaderText: {
    fontSize: theme.fonts.size.dropDownTitle,
    fontWeight: theme.fonts.weight.bold
  },
  headerUsername: {
    fontSize: theme.fonts.size.standard,
    color: theme.colors.secondary,
    textAlign: "center"
  },
  rightHeaderView: {
    width: theme.size.parameters.rightView
  },
  leftHeader: {
    flex: 1,
    paddingLeft: theme.size.padding.large
  },
  leftHeaderText: {
    fontSize: theme.fonts.size.title,
    fontWeight: theme.fonts.weight.bold
  },
  dateContainer: {
    width: theme.size.parameters.staffSchedule.timePicker.width,
    height: theme.size.parameters.staffSchedule.timePicker.height
  },
  leftDateContainer: {
    width: theme.size.parameters.staffSchedule.timePicker.width,
    height: theme.size.parameters.staffSchedule.timePicker.height,
    borderTopLeftRadius: theme.size.border.radius.secondary,
    borderBottomLeftRadius: theme.size.border.radius.secondary
  },
  rightDateContainer: {
    width: theme.size.parameters.staffSchedule.timePicker.width,
    height: theme.size.parameters.staffSchedule.timePicker.height,
    borderLeftWidth: theme.size.border.width.empty,
    borderTopRightRadius: theme.size.border.radius.secondary,
    borderBottomRightRadius: theme.size.border.radius.secondary
  },
  pickerToggle: {
    marginLeft: theme.size.margin.small
  },
  dayTitle: {
    fontSize: theme.fonts.size.subtitle,
    alignSelf: "flex-start",
    paddingTop: theme.size.padding.medium,
    marginLeft: theme.size.margin.small
  },
  errorText: {
    fontSize: theme.fonts.size.placeholder,
    color: theme.colors.danger
  },
  pickerController: {
    alignSelf: "flex-start"
  }
});

export default styles;
