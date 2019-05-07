import { StyleSheet } from "react-native";
import theme from "../../styles";

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
    shadowColor: theme.shadows.color,
    shadowOffset: theme.shadows.offset,
    shadowOpacity: theme.shadows.opacity,
    shadowRadius: theme.shadows.radius
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
    fontSize: theme.fonts.size.headerUsername,
    color: theme.colors.infoText
  },
  leftHeader: {
    justifyContent: "flex-start",
    alignSelf: "flex-start"
  },
  bodyHeaderText: {
    fontSize: theme.fonts.size.bodyHeaderText,
    fontWeight: theme.fonts.weight.bold
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
    fontSize: theme.fonts.size.standardText
  },
  activeText: {
    color: theme.colors.activeText,
    paddingHorizontal: theme.size.padding.activeTextHorizontal
  },
  inactiveText: {
    color: theme.colors.inactiveText,
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
    fontSize: theme.fonts.size.buttonText,
    fontWeight: theme.fonts.weight.bold
  }
});

export default styles;
