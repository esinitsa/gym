import { StyleSheet } from "react-native";
import theme from "../../../styles/index";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "space-around"
  },
  scrollView: {
    flexGrow: 1,
    flexShrink: 1,
    overflow: "scroll"
  },
  card: {
    paddingVertical: theme.size.padding.small,
    marginVertical: theme.size.margin.empty,
    width: theme.size.parameters.cardWidth,
    borderRadius: theme.size.border.radius.secondary
  },
  calendarCard: {
    paddingHorizontal: theme.size.padding.empty,
    paddingVertical: theme.size.padding.small,
    marginVertical: theme.size.margin.empty,
    width: theme.size.parameters.cardWidth,
    borderRadius: theme.size.border.radius.secondary
  },
  cardItem: {
    justifyContent: "center",
    width: theme.size.parameters.fullWidth,
    paddingTop: theme.size.padding.medium,
    paddingBottom: theme.size.padding.medium
  },
  calendarItem: {
    width: theme.size.parameters.cardWidth / 2,
    height: theme.size.parameters.medium,
    alignItems: "center",
    justifyContent: "center"
  },
  userInfoView: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  userInfoRow: {
    flexDirection: "row"
  },
  emptyListItemInfo: {
    fontSize: theme.fonts.size.title,
    color: theme.colors.secondary,
    textAlign: "center",
    paddingHorizontal: theme.size.padding.large
  },
  calendarCardItem: {
    flexDirection: "row",
    paddingLeft: theme.size.padding.empty,
    paddingRight: theme.size.padding.empty,
    paddingTop: theme.size.padding.empty,
    paddingBottom: theme.size.padding.empty,
    borderRightWidth: theme.size.border.width.primary
  },
  calendarCardText: {
    fontSize: theme.fonts.size.standard,
    color: theme.colors.primary,
    fontWeight: theme.fonts.weight.bold,
    marginLeft: theme.size.margin.empty,
    textAlign: "center"
  },
  calendarView: {
    flex: 1,
    height: theme.size.parameters.medium
  },
  leftCalendarCardItem: {
    flex: 1,
    height: theme.size.parameters.medium,
    backgroundColor: theme.colors.light,
    alignContent: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderColor: theme.colors.container
  },
  rightCalendarCardItem: {
    flex: 1,
    height: theme.size.parameters.small,
    width: theme.size.parameters.fullWidth,
    backgroundColor: theme.colors.light,
    paddingHorizontal: theme.size.margin.small,
    justifyContent: "center",
    borderLeftWidth: 1,
    borderColor: theme.colors.container
  },
  headlineText: {
    fontSize: theme.fonts.size.title,
    color: theme.colors.primary
  },
  userName: {
    fontSize: theme.fonts.size.title,
    fontWeight: theme.fonts.weight.bold,
    color: theme.colors.primary
  },
  streetInfo: {
    fontSize: theme.fonts.size.standard,
    paddingVertical: theme.size.padding.mediumVertical,
    marginLeft: theme.size.margin.small
  },
  infoPlaceholder: {
    width: theme.size.parameters.userInfo,
    fontSize: theme.fonts.size.standard,
    color: theme.colors.secondary,
    paddingVertical: theme.size.padding.mediumVertical
  },
  listItem: {
    width: theme.size.parameters.fullWidth,
    borderTopWidth: theme.size.border.width.empty,
    marginHorizontal: theme.size.margin.empty,
    borderTopColor: theme.colors.secondary,
    backgroundColor: theme.colors.light,
    justifyContent: "space-between",
    alignContent: "space-between",
    flexDirection: "row"
  },
  touchableCard: {
    alignItems: "center",
    marginTop: theme.size.margin.small,
    shadowColor: theme.shadows.color,
    shadowOffset: theme.shadows.offset,
    shadowOpacity: theme.shadows.opacity,
    shadowRadius: theme.shadows.radius
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.size.border.radius.primary,
    justifyContent: "center",
    marginHorizontal: theme.size.margin.large,
    marginVertical: theme.size.margin.qrCode,
    height: theme.size.parameters.button.height.large
  },
  buttonText: {
    fontSize: theme.fonts.size.title,
    color: theme.colors.light,
    fontWeight: theme.fonts.weight.bold
  },
  header: {
    flex: 1,
    opacity: 0,
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
    position: "absolute",
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
