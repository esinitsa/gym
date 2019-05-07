import { StyleSheet } from "react-native";
import theme from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.containerBackground
  },
  content: {
    flex: 1
  },
  headerView: {
    flex: 1,
    flexDirection: "row"
  },
  infoView: {
    backgroundColor: theme.colors.infoViewText,
    height: theme.size.parameters.infoView,
    padding: theme.size.padding.infoText,
    marginTop: theme.size.margin.standard,
    justifyContent: "center",
    flexDirection: "row"
  },
  userInfoView: {
    backgroundColor: theme.colors.infoViewText,
    height: theme.size.parameters.userInfoView,
    padding: theme.size.padding.infoText,
    marginTop: theme.size.margin.standard,
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
    marginRight: theme.size.margin.standard
  },
  userInfoText: {
    paddingHorizontal: theme.size.padding.infoText,
    paddingVertical: theme.size.padding.infoTextVertical
  },
  userName: {
    fontSize: theme.fonts.size.title,
    paddingHorizontal: theme.size.padding.infoText,
    paddingTop: theme.size.padding.infoTextVertical,
    fontWeight: theme.fonts.weight.bolder
  },
  emailText: {
    paddingHorizontal: theme.size.padding.infoText,
    paddingTop: theme.size.padding.infoTextVertical,
    fontSize: theme.fonts.size.personEmail,
    color: theme.colors.profileList.userListEmail
  },
  addressRowView: {
    flexDirection: "row"
  },
  streetInfo: {
    fontSize: theme.fonts.size.standardText,
    paddingVertical: theme.size.padding.infoTextVertical
  },
  infoPlaceholder: {
    fontSize: theme.fonts.size.standardText,
    color: theme.colors.infoText,
    paddingHorizontal: theme.size.padding.infoText,
    paddingVertical: theme.size.padding.infoTextVertical
  },
  subscriptionText: {
    fontSize: theme.fonts.size.standardText,
    paddingHorizontal: theme.size.padding.infoText,
    marginVertical: theme.size.margin.standard,
    fontWeight: theme.fonts.weight.bolder
  },
  notesText: {
    fontSize: theme.fonts.size.topicText,
    paddingHorizontal: theme.size.padding.infoText,
    marginVertical: theme.size.margin.standard,
    fontWeight: theme.fonts.weight.bolder
  },
  header: {
    borderBottomColor: theme.colors.containerBackground,
    borderBottomWidth: theme.size.border.emptyBorderWidth,
    backgroundColor: "transparent"
  },
  backArrowIcon: {
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: theme.size.margin.standard
  },
  headerBodyText: {
    fontSize: theme.fonts.size.bodyHeaderText,
    fontWeight: theme.fonts.weight.bold
  }
});

export default styles;
