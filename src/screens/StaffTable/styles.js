import { StyleSheet } from "react-native";
import theme from "../../styles/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light
  },
  headerView: {
    flexDirection: "row"
  },
  header: {
    borderBottomWidth: theme.size.border.width.empty,
    borderBottomColor: theme.colors.light,
    backgroundColor: "transparent"
  },
  leftHeader: {
    flex: 1
  },
  backArrowIcon: {
    alignSelf: "flex-end",
    paddingLeft: theme.size.padding.backArrow
  },
  leftHeaderText: {
    fontSize: theme.fonts.size.title,
    fontWeight: theme.fonts.weight.bold
  },
  pickerContainer: {
    flexDirection: "row",
    marginTop: theme.size.margin.large
  },
  pickerView: theme.size.parameters.picker.view,
  pickerText: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    color: theme.colors.text,
    fontSize: theme.fonts.size.dropDownTitle,
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
  bodyHeaderText: {
    fontSize: theme.fonts.size.subtitle,
    fontWeight: theme.fonts.weight.bold
  },
  dropDownArrow: {
    justifyContent: "center",
    alignSelf: "flex-end",
    fontSize: theme.fonts.size.title
  }
});

export default styles;
