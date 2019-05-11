import { StyleSheet, Dimensions } from "react-native";
import theme from "../../styles";

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.light
  },
  header: {
    borderBottomColor: theme.colors.container,
    borderBottomWidth: theme.size.border.width.empty,
    backgroundColor: "transparent"
  },
  modalView: {
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    right: 0,
    top: 0,
  },
  qrScanRightHeader: {
    paddingLeft: theme.size.padding.large,
    paddingRight: theme.size.padding.large,
    marginHorizontal: theme.size.margin.small
  },
  signOutRightHeader: {
    paddingLeft: theme.size.padding.large,
    paddingRight: theme.size.padding.large
  },
  listItem: {
    marginHorizontal: theme.size.margin.medium,
    paddingVertical: theme.size.padding.medium,
    borderTopWidth: theme.size.border.width.primary,
    borderTopColor: theme.colors.secondary,
    backgroundColor: theme.colors.light,
    paddingLeft: theme.size.padding.medium,
    flexDirection: "row",
  },
  leftHeader: {
    paddingLeft: theme.size.padding.large
  },
  leftHeaderText: {
    fontSize: theme.fonts.size.title,
    fontWeight: theme.fonts.weight.bold
  },
  qrScannerContent: {
    flex: 1,
    width: DEVICE_WIDTH
  },
  footer: {
    backgroundColor: "transparent"
  },
});

export default styles;
