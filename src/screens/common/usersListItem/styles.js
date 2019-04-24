import { StyleSheet, Dimensions } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  modalView: {
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    right: 0,
    top: 0
  },
  header: {
    borderBottomColor: "#f5f4f5",
    borderBottomWidth: 0,
    backgroundColor: "transparent"
  },
  leftHeader: {
    paddingLeft: 15
  },
  leftHeaderText: {
    fontSize: 25,
    fontWeight: "700"
  },
  profileIconHeader: {
    paddingLeft: 15,
    paddingRight: 15
  },
  listItem: {
    marginHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#ededef",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    flexDirection: "row"
  },
  listText: {
    padding: 5,
    color: "black",
    fontSize: 15
  },
  activeText: {
    color: "green",
    paddingHorizontal: 5
  },
  inactiveText: {
    color: "red",
    paddingHorizontal: 5
  },
  activeTermView: {
    flexDirection: "row"
  },
  typeIcon: {
    height: 60,
    width: 60,
    borderRadius: 5,
    backgroundColor: "#17a2f3",
    alignItems: "center",
    justifyContent: "center"
  },
  subscriptionTypeView: {
    padding: 3,
    color: "#fefefc",
    fontSize: 17,
    fontWeight: "700"
  },
  footer: {
    backgroundColor: "rgba(0, 0 ,0 ,0)"
  },
  card: {
    height: 100,
    width: DEVICE_WIDTH - 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  button: {
    backgroundColor: "#f0f0f7",
    borderRadius: 20,
    height: 35,
    width: 110,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#007bff",
    fontSize: 18,
    fontWeight: "700"
  },
  infoView: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginTop: 50
  },
  userInfoText: {
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  signOutText: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontWeight: "700",
    color: "#52a5ff"
  },
  rightHeaderText: {
    paddingHorizontal: 10,
    color: "#52a5ff"
  },
  emailText: {
    paddingHorizontal: 20,
    paddingBottom: 5,
    fontSize: 12,
    color: "#95959a"
  }
});

export default styles;
