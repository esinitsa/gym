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
    height: theme.size.parameters.small,
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
  touchableView: {
    backgroundColor: theme.shadows.background,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    right: 0,
    top: 0
  },
  modalView: {
    borderColor: theme.colors.light,
    borderWidth: theme.size.border.radius.primary
  }
});

export default styles;
