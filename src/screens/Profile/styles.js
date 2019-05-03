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
    fontSize: theme.size.font.title,
    paddingHorizontal: theme.size.padding.infoText,
    paddingTop: theme.size.padding.infoTextVertical,
    fontWeight: "500"
  },
  emailText: {
    paddingHorizontal: theme.size.padding.infoText,
    paddingTop: theme.size.padding.infoTextVertical,
    fontSize: theme.size.font.personEmail,
    color: theme.colors.profileList.userListEmail
  },
  addressRowView: {
    flexDirection: "row"
  },
  streetInfo: {
    fontSize: theme.size.font.standardText,
    paddingVertical: theme.size.padding.infoTextVertical
  },
  infoPlaceholder: {
    fontSize: theme.size.font.standardText,
    color: theme.colors.infoText,
    paddingHorizontal: theme.size.padding.infoText,
    paddingVertical: theme.size.padding.infoTextVertical
  },
  subscriptionText: {
    fontSize: theme.size.font.standardText,
    paddingHorizontal: theme.size.padding.infoText,
    marginVertical: theme.size.margin.standard,
    fontWeight: "500"
  },
  notesText: {
    fontSize: theme.size.font.topicText,
    paddingHorizontal: theme.size.padding.infoText,
    marginVertical: theme.size.margin.standard,
    fontWeight: "500"
  },
  signOutText: {
    fontSize: theme.size.font.standardText,
    alignSelf: "center",
    fontWeight: "700",
    color: "#FF0000"
  },
  header: {
    borderBottomColor: theme.colors.containerBackground,
    borderBottomWidth: theme.size.border.emptyBorderWidth,
    backgroundColor: "transparent"
  },
  rightHeaderText: {
    paddingHorizontal: theme.size.padding.infoText,
    color: "#52a5ff"
  },
  backArrowIcon: {
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: theme.size.margin.standard
  },
  headerBodyText: {
    fontSize: theme.size.font.bodyHeaderText,
    fontWeight: "700"
  }
});

export default styles;
