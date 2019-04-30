import { StyleSheet, Dimensions } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f4f5",
  },
  card: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: DEVICE_WIDTH - 30,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6
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
    backgroundColor: "transparent",
  },
  leftHeader: {
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
  bodyHeader: {
    paddingLeft: 5
  },
  bodyHeaderText: {
    fontSize: 18,
    fontWeight: "700"
  },
  listItem: {
    borderTopColor: "#ededef",
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    alignContent: "space-between",
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
  }
});

export default styles;
