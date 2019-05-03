import { StyleSheet, Dimensions } from "react-native";
import theme from "../../styles";

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.containerBackground
  },
  card: {
    paddingVertical: theme.size.padding.cardVertical,
    paddingHorizontal: theme.size.padding.cardHorizontal,
    width: theme.size.parameters.cardWidth,
    marginTop: theme.size.margin.standard,
    borderRadius: theme.size.border.cardBorderRadius,
    alignSelf: "center",
    shadowColor: theme.colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6
  },
  modalView: {
    backgroundColor: theme.colors.modalBackground,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    right: 0,
    top: 0
  },
  header: {
    borderBottomColor: theme.colors.containerBackground,
    borderBottomWidth: theme.size.border.emptyBorderWidth,
    backgroundColor: "transparent"
  },
  headerUsername: {
    fontSize: theme.size.font.headerUsername,
    color: theme.colors.infoText
  },
  leftHeader: {
    justifyContent: "flex-start",
    alignSelf: "flex-start"
  },
  bodyHeaderText: {
    fontSize: theme.size.font.bodyHeaderText,
    fontWeight: "700"
  },
  backArrowIcon: {
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: theme.size.margin.standard
  },
  listItem: {
    borderTopColor: theme.colors.listItemBorderTop,
    backgroundColor: theme.colors.listItemBackground,
    justifyContent: "space-between",
    alignContent: "space-between",
    flexDirection: "row"
  },
  listText: {
    padding: theme.size.padding.infoTextVertical,
    color: theme.colors.inputColor,
    fontSize: theme.size.font.standardText
  },
  activeText: {
    color: "green",
    paddingHorizontal: theme.size.padding.activeTextHorizontal
  },
  inactiveText: {
    color: "red",
    paddingHorizontal: theme.size.padding.activeTextHorizontal
  },
  activeTermView: {
    flexDirection: "row"
  },
  typeIcon: {
    height: theme.size.parameters.userListItem.typeIcon,
    width: theme.size.parameters.userListItem.typeIcon,
    borderRadius: theme.size.border.typeIconBorderRadius,
    backgroundColor: theme.colors.typeIcon,
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    backgroundColor: theme.colors.footer
  },
  button: {
    backgroundColor: theme.colors.standardButton,
    borderRadius: theme.size.border.buttonBorderRadius,
    height: theme.size.parameters.buttonHeight,
    width: theme.size.parameters.buttonWidth,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: theme.colors.actionComponent,
    fontSize: theme.size.font.buttonText,
    fontWeight: "700"
  }
});

export default styles;
