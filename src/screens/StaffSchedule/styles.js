import { StyleSheet } from "react-native";
import theme from "../../styles/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: theme.colors.container
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
  leftHeader: {
    flex: 1,
    paddingLeft: theme.size.padding.large
  },
  leftHeaderText: {
    fontSize: theme.fonts.size.title,
    fontWeight: theme.fonts.weight.bold
  },
  rightHeader: {
    marginRight: 2,
    paddingRight: 10
  },
  dateContainer: {
    width: theme.size.parameters.staffSchedule.timePicker.width,
    height: theme.size.parameters.staffSchedule.timePicker.height,
  }
});

export default styles;
