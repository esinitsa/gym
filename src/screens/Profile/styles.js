import { StyleSheet } from "react-native";
import theme from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.container
  },
  content: {
    flex: 1
  },
  headerView: {
    flex: 1,
    flexDirection: "row"
  },
  bodyHeader: {
    flex: 1,
    alignItems: "center"
  },
  leftHeader: {
    flex: 1,
  },
  infoView: {
    backgroundColor: theme.colors.light,
    height: theme.size.parameters.medium,
    padding: theme.size.padding.medium,
    marginTop: theme.size.margin.medium,
    justifyContent: "center",
    flexDirection: "row"
  },
  userInfoView: {
    backgroundColor: theme.colors.light,
    height: theme.size.parameters.large,
    padding: theme.size.padding.medium,
    marginTop: theme.size.margin.medium,
    justifyContent: "center"
  },
  rightArrowView: {
    flex: 1,
    alignContent: "center",
    alignItems: "flex-end",
    alignSelf: "center"
  },
  rightArrowIcon: {
    alignSelf: "flex-end",
    marginRight: theme.size.margin.medium
  },
  userInfoText: {
    paddingHorizontal: theme.size.padding.medium,
    paddingVertical: theme.size.padding.mediumVertical
  },
  userName: {
    fontSize: theme.fonts.size.title,
    paddingHorizontal: theme.size.padding.medium,
    paddingTop: theme.size.padding.mediumVertical,
    fontWeight: theme.fonts.weight.bolder
  },
  emailText: {
    paddingHorizontal: theme.size.padding.medium,
    paddingTop: theme.size.padding.mediumVertical,
    fontSize: theme.fonts.size.placeholder,
    color: theme.colors.secondary
  },
  addressRowView: {
    flexDirection: "row"
  },
  streetInfo: {
    fontSize: theme.fonts.size.standard,
    paddingVertical: theme.size.padding.mediumVertical
  },
  infoPlaceholder: {
    fontSize: theme.fonts.size.standard,
    color: theme.colors.secondary,
    paddingHorizontal: theme.size.padding.medium,
    paddingVertical: theme.size.padding.mediumVertical
  },
  subscriptionText: {
    fontSize: theme.fonts.size.standard,
    paddingHorizontal: theme.size.padding.secondary,
    marginVertical: theme.size.margin.medium,
    fontWeight: theme.fonts.weight.bolder
  },
  notesText: {
    fontSize: theme.fonts.size.title,
    paddingHorizontal: theme.size.padding.medium,
    marginVertical: theme.size.margin.medium,
    fontWeight: theme.fonts.weight.bolder
  },
  header: {
    borderBottomColor: theme.colors.container,
    borderBottomWidth: theme.size.border.width.empty,
    backgroundColor: "transparent"
  },
  backArrowIcon: {
    paddingLeft: theme.size.padding.backArrow
  },
  headerBodyText: {
    fontSize: theme.fonts.size.subtitle,
    fontWeight: theme.fonts.weight.bold
  }
});

export default styles;
