import { StyleSheet } from "react-native";
import theme from "../../styles/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: theme.colors.container
  },
  card: {
    paddingVertical: theme.size.padding.large,
    width: theme.size.parameters.cardWidth,
    borderRadius: theme.size.border.radius.secondary
  },
  cardItem: {
    width: theme.size.parameters.fullWidth
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
    paddingHorizontal: theme.size.padding.large,
    paddingVertical: theme.size.padding.items
  },
  headlineText: {
    fontSize: theme.fonts.size.title,
    color: theme.colors.primary,
  },
  userName: {
    fontSize: theme.fonts.size.title,
    fontWeight: theme.fonts.weight.bold,
    color: theme.colors.primary,
  },
  streetInfo: {
    fontSize: theme.fonts.size.standard,
    paddingVertical: theme.size.padding.mediumVertical,
    marginLeft: theme.size.margin.small
  },
  infoPlaceholder: {
    width: 60,
    fontSize: theme.fonts.size.standard,
    color: theme.colors.secondary,
    paddingVertical: theme.size.padding.mediumVertical
  },
  listItem: {
    width: theme.size.parameters.fullWidth,
    borderTopWidth: theme.size.border.width.empty,
    marginHorizontal: theme.size.margin.empty,
    paddingVertical: theme.size.padding.medium,
    borderTopColor: theme.colors.secondary,
    backgroundColor: theme.colors.light,
    justifyContent: "space-between",
    alignContent: "space-between",
    flexDirection: "row"
  },
  touchableCard: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: theme.size.margin.small,
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
    height: theme.size.parameters.button.height.large
  },
  buttonText: {
    fontSize: theme.fonts.size.title,
    color: theme.colors.light,
    fontWeight: theme.fonts.weight.bold
  },
  header: {
    borderBottomWidth: theme.size.border.width.empty,
    backgroundColor: theme.colors.light
  },
  leftHeader: {
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
