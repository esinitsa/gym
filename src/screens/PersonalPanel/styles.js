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
    backgroundColor: theme.colors.keyboardAvoid
  },
  header: {
    borderBottomColor: theme.colors.containerBackground,
    borderBottomWidth: theme.size.border.emptyBorderWidth,
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
    paddingLeft: theme.size.padding.header,
    paddingRight: theme.size.padding.header,
    marginHorizontal: theme.size.margin.qrScannerIcon
  },
  signOutRightHeader: {
    paddingLeft: theme.size.padding.header,
    paddingRight: theme.size.padding.header
  },
  listItem: {
    marginHorizontal: theme.size.margin.standard,
    paddingVertical: theme.size.padding.listItem,
    borderTopWidth: theme.size.border.listItemBorderWidth,
    borderTopColor: theme.colors.listItemBorderTop,
    backgroundColor: theme.colors.listItemBackground,
    paddingLeft: theme.size.padding.listItem,
    flexDirection: "row",
  },
  button: {
    backgroundColor: theme.colors.standardButton,
    borderRadius: theme.size.border.buttonBorderRadius,
    height: theme.size.parameters.buttonHeight,
    width: theme.size.parameters.buttonWidth,
    alignItems: "center",
    justifyContent: "center",
},
  buttonText: {
    color: theme.colors.actionComponent,
    fontSize: theme.fonts.size.buttonText,
    fontWeight: theme.fonts.weight.bold
  },
  leftHeader: {
    paddingLeft: theme.size.padding.header
  },
  leftHeaderText: {
    fontSize: theme.fonts.size.headlineText,
    fontWeight: theme.fonts.weight.bold
  },
  qrScannerContent: {
    flex: 1,
    width: DEVICE_WIDTH
  },
  footer: {
    backgroundColor: "rgba(0, 0 ,0 ,0)"
  },
});

export default styles;
