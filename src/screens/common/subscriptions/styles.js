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
    flex: 1,
    paddingLeft: theme.size.padding.medium,
  },
  modalView: {
    backgroundColor: theme.shadows.background,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    right: 0,
    top: 0
  },
  header: {
    borderBottomColor: theme.colors.container,
    borderBottomWidth: theme.size.border.width.empty,
    backgroundColor: "transparent"
  },
  leftHeader: {
    paddingLeft: theme.size.padding.large
  },
  listItem: {
    borderTopWidth: theme.size.border.width.primary,
    marginHorizontal: theme.size.margin.medium,
    paddingVertical: theme.size.padding.items,
    borderTopColor: theme.colors.secondary,
    backgroundColor: theme.colors.light,
    justifyContent: "space-between",
    alignContent: "space-between",
    paddingLeft: theme.size.padding.medium,
    flexDirection: "row"
  },
  listText: {
    fontSize: 13,
    color: theme.colors.secondary,
    fontWeight: theme.fonts.weight.normal
  },
  additionalInfoView: {
    marginTop: theme.size.margin.medium
  },
  lastVisitView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  webview: {
    flex: 1,
    height: theme.size.parameters.large
  },
  infoView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: theme.size.padding.mediumVertical
  },
  infoViewLabelText: {
    fontWeight: theme.fonts.weight.bold,
    color: theme.colors.secondary
  },
  infoViewText: {
    fontWeight: theme.fonts.weight.bold
  },
  clickableArrow: {
    alignContent: "center",
    alignItems: "flex-end",
    alignSelf: "center",
    paddingLeft: theme.size.padding.medium
  },
  activeLabel: {
    color: theme.colors.primary,
    fontWeight: theme.fonts.weight.bold
  },
  activeText: {
    paddingVertical: theme.spacing.unit,
    paddingLeft: theme.size.padding.small,
    fontSize: theme.fonts.size.standard,
    color: theme.colors.success,
    fontWeight: theme.fonts.weight.bold,
  },
  inactiveText: {
    color: theme.colors.danger,
    paddingHorizontal: theme.size.padding.small
  },
  activeView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  typeIcon: {
    height: theme.size.parameters.small,
    width: theme.size.parameters.small,
    borderRadius: theme.size.border.radius.secondary,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  subscriptionTypeView: {
    padding: theme.size.padding.small,
    color: "#fefefc",
    fontSize: theme.fonts.size.subtitle,
    fontWeight: theme.fonts.weight.bold
  },
  footer: {
    backgroundColor: "transparent"
  },
  card: {
    height: theme.size.parameters.large,
    width: theme.size.parameters.cardWidth,
    borderRadius: theme.size.border.radius.secondary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  button: {
    backgroundColor: theme.colors.container,
    marginTop: theme.size.margin.medium,
    borderRadius: theme.size.border.radius.primary,
    height: theme.size.parameters.button.height.medium,
    width: theme.size.parameters.button.width.medium,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end"
  },
  buttonText: {
    color: theme.colors.primary,
    fontSize: theme.fonts.size.standard,
    fontWeight: theme.fonts.weight.bold
  }
});

export default styles;
