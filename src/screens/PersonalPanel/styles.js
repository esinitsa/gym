import { StyleSheet, Dimensions } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  header: {
    borderBottomColor: "#f5f4f5",
    borderBottomWidth: 0,
    backgroundColor: "transparent"
  },
  modalView: {
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    right: 0,
    top: 0,
  },
  qrScanRightHeader: {
    paddingLeft: 15,
    paddingRight: 15,
    marginHorizontal: 5
  },
  signOutRightHeader: {
    paddingLeft: 15,
    paddingRight: 15
  },
  listItem: {
    marginHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ededef",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    flexDirection: "row",
  },
  listText: {
    paddingLeft: 20,
    color: "white",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#f0f0f7",
    borderRadius: 20,
    height: 35,
    width: 110,
    alignItems: "center",
    justifyContent: "center",
},
  buttonText: {
    color: "#007bff",
    fontSize: 18,
    fontWeight: "700"
  },
  leftHeader: {
    paddingLeft: 15
  },
  leftHeaderText: {
    fontSize: 25,
    fontWeight: "700"
  },
  qrScannerContent: {
    flex: 1,
    width: DEVICE_WIDTH
  },
  footer: {
    backgroundColor: "rgba(0, 0 ,0 ,0)"
  },
});

export default styles;
