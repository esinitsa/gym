import { StyleSheet, Dimensions } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
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
    borderWidth: 0.3,
    paddingVertical: 20,
    borderRadius: 3,
    borderColor: "white",
    backgroundColor: "rgba(9,49,69, 0.8)"
  },
  listText: {
    paddingLeft: 20,
    color: "white",
    fontSize: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold"
  },
  footer: {
    backgroundColor: "rgba(0, 0 ,0 ,0)"
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#007aa3",rgb(0, 122, 163)
    //backgroundColor: "rgba(58, 118, 168, 0.9)",
    backgroundColor: "rgba(65, 146, 168, 0.7)",
    borderRadius: 20,
    justifyContent: "center",
    height: 50,
    width: DEVICE_WIDTH - 30,
},
});

export default styles;
