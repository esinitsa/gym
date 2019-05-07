import { StyleSheet } from "react-native";
import theme from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subscriptionInfoView: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1
  },
  rowView: {
    flexDirection: "row",
    flex: 1
  },
  textInfoView: {
    paddingLeft: theme.size.padding.subscriptionListItem.textInfo
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
  leftHeader: {
    paddingLeft: theme.size.padding.header
  },
  listItem: {
    borderTopWidth: theme.size.border.listItemBorderWidth,
    marginHorizontal: theme.size.margin.standard,
    paddingVertical: theme.size.padding.subscriptionListItem.listItem,
    borderTopColor: theme.colors.listItemBorderTop,
    backgroundColor: theme.colors.listItemBackground,
    justifyContent: "space-between",
    alignContent: "space-between",
    paddingLeft: theme.size.padding.listItem,
    flexDirection: "row"
  },
  listText: {
    padding: theme.size.padding.subscriptionListItem.listText,
    fontSize: theme.fonts.size.standardText,
    color: theme.colors.listText,
    fontWeight: theme.fonts.weight.normal
  },
  additionalInfoView: {
    marginTop: theme.size.margin.standard
  },
  lastVisitView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  infoView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: theme.size.padding.infoTextVertical
  },
  infoViewLabelText: {
    fontWeight: theme.fonts.weight.bold,
    color: theme.colors.infoText
  },
  infoViewText: {
    fontWeight: theme.fonts.weight.bold
  },
  clickableArrow: {
    alignContent: "center",
    alignItems: "flex-end",
    alignSelf: "center"
  },
  activeLabel: {
    color: theme.colors.infoText,
    fontWeight: theme.fonts.weight.bold
  },
  activeText: {
    padding: theme.size.padding.subscriptionListItem.listText,
    fontSize: theme.fonts.size.standardText,
    color: "green",
    fontWeight: theme.fonts.weight.bold
  },
  inactiveText: {
    color: "red",
    paddingHorizontal: theme.size.padding.subscriptionListItem.inactiveText
  },
  activeView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  typeIcon: {
    height: theme.size.parameters.subscriptionListItem.typeIcon,
    width: theme.size.parameters.subscriptionListItem.typeIcon,
    borderRadius: theme.size.border.typeIconBorderRadius,
    backgroundColor: theme.colors.typeIcon,
    alignItems: "center",
    justifyContent: "center"
  },
  subscriptionTypeView: {
    padding: theme.size.padding.subscriptionListItem.subscriptionType,
    color: "#fefefc",
    fontSize: theme.fonts.size.subscriptionCountText,
    fontWeight: theme.fonts.weight.bold
  },
  footer: {
    backgroundColor: "rgba(0, 0 ,0 ,0)"
  },
  card: {
    height: theme.size.parameters.subscriptionListItem.cardHeight,
    width: theme.size.parameters.cardWidth,
    borderRadius: theme.size.border.cardBorderRadius,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  button: {
    backgroundColor: theme.colors.standardButton,
    marginTop: theme.size.margin.standard,
    borderRadius: theme.size.border.buttonBorderRadius,
    height: theme.size.parameters.buttonHeight,
    width: theme.size.parameters.buttonWidth,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end"
  },
  buttonText: {
    color: theme.colors.actionComponent,
    fontSize: theme.fonts.size.buttonText,
    fontWeight: theme.fonts.weight.bold
  }
});

export default styles;
