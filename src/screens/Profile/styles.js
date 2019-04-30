import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  infoView: {
    backgroundColor: "#ffffff",
    height: 70,
    padding: 10,
    marginTop: 10,
    justifyContent: "center"
  },
  userInfoView: {
    backgroundColor: "#ffffff",
    height: 100,
    padding: 10,
    marginTop: 10,
    justifyContent: "center"
  },
  signOutView: {
    backgroundColor: "#ffffff",
    height: 70,
    padding: 10,
    marginTop: 300,
    justifyContent: "center"
  },
  userInfoText: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  userName: {
    fontSize: 23,
    paddingHorizontal: 10,
    paddingTop: 5,
    fontWeight: "500"
  },
  emailText: {
    paddingHorizontal: 10,
    paddingTop: 5,
    fontSize: 14,
    color: "#95959a"
  },
  streetInfo: {
    fontSize: 15,
    paddingVertical: 5
  },
  infoPlaceholder: {
    fontSize: 15,
    color: "grey",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  subscriptionText: {
    fontSize: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontWeight: "500"
  },
  notesText: {
    fontSize: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontWeight: "500"
  },
  signOutText: {
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "700",
    color: "#FF0000"
  },
  header: {
    borderBottomColor: "#f5f4f5",
    borderBottomWidth: 0,
    backgroundColor: "transparent"
  },
  rightHeaderText: {
    paddingHorizontal: 10,
    color: "#52a5ff"
  },
  headerBodyText: {
    fontSize: 18,
    fontWeight: "700"
  },

});

export default styles;
