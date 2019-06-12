import { StyleSheet } from "react-native";
import theme from "../../styles/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.container,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.size.margin.medium,
    marginHorizontal: theme.size.margin.large,
  },
  pickerContent: {
    flexDirection: "row",
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
    height: theme.size.parameters.staffSchedule.timePicker.height,
  },
  pickerToggle: {
    paddingLeft: theme.size.margin.small
  },
  dayTitle: {
    fontSize: theme.fonts.size.subtitle
  }
});

export default styles;
