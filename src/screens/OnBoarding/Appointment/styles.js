import { StyleSheet } from "react-native";
import theme from "../../styles/index";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: "transparent"
  },
  headerContainer: {
    width: "100%"
  },
  headerView: {
    flex: 1,
    flexDirection: "row"
  },
  header: {
    borderBottomWidth: theme.size.border.width.primary,
    borderColor: theme.colors.secondary,
    backgroundColor: theme.colors.light,
    justifyContent: "flex-start"
  },
  headerBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bodyHeaderText: {
    fontSize: theme.fonts.size.subtitle,
    fontWeight: theme.fonts.weight.bold
  },
  headerUsername: {
    fontSize: theme.fonts.size.placeholder,
    color: theme.colors.secondary,
    textAlign: "center"
  },
  leftHeader: {
    flex: 1
  },
  rightHeaderView: {
    width: theme.size.parameters.rightView
  },
  backArrowIcon: {
    paddingLeft: theme.size.padding.backArrow,
    alignSelf: "flex-end"
  },
  leftHeaderText: {
    fontSize: theme.fonts.size.title,
    fontWeight: theme.fonts.weight.bold
  },
  content: {
    marginTop: theme.size.margin.picker
  },
  labelWithPickerView: {
    flexDirection: "row",
    marginHorizontal: theme.size.margin.large,
    marginTop: theme.size.margin.medium
  },
  pickerContainer: {
    width: theme.size.parameters.picker.width,
    paddingHorizontal: theme.size.padding.small
  },
  pickerFrame: {
    height: theme.size.parameters.picker.height,
    width: theme.size.parameters.fullWidth,
    borderColor: theme.colors.secondary,
    borderWidth: theme.size.border.width.empty,
    borderBottomWidth: theme.size.border.width.primary,
    alignItems: "center"
  },
  pickerView: theme.size.parameters.picker.view,
  pickerText: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    color: theme.colors.text,
    fontSize: theme.fonts.size.placeholder,
    fontWeight: theme.fonts.weight.bold
  },
  pickerItemText: {
    fontSize: theme.fonts.size.standard,
    fontWeight: theme.fonts.weight.bold
  },
  pickerBackHeader: {
    color: theme.colors.primary,
    fontSize: theme.fonts.size.standard,
    fontWeight: theme.fonts.weight.bold
  },
  leftView: {
    paddingRight: theme.size.padding.small
  },
  rightView: {
    paddingLeft: theme.size.padding.small
  },
  dateContainer: {
    width: theme.size.parameters.fullWidth,
    height: theme.size.parameters.small
  },
  dateIcon: {
    position: "absolute",
    left: 0,
    top: theme.spacing.unit * 2,
    marginLeft: theme.size.margin.empty
  },
  dateInput: {
    marginLeft: theme.size.margin.icon,
    height: theme.size.parameters.small,
    borderColor: theme.colors.secondary
  },
  label: {
    fontSize: theme.fonts.size.standard,
    fontWeight: theme.fonts.weight.bold
  },
  dropDownArrow: {
    justifyContent: "center",
    alignSelf: "flex-end",
    fontSize: theme.fonts.size.title
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.size.border.radius.primary,
    marginHorizontal: theme.size.margin.large,
    height: theme.size.parameters.button.height.large,
    marginTop: theme.size.margin.large,
    width: theme.size.parameters.pickerFrame
  },
  buttonText: {
    fontSize: theme.fonts.size.placeholder,
    color: theme.colors.light,
    fontWeight: theme.fonts.weight.bold
  }
});

export default styles;
