import { StyleSheet, Dimensions } from "react-native";

import { ANIMATED_CARD_PADDING } from "../../constants/cssConstants";

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f4f5",
    justifyContent: "space-around"
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
  card: {
    height: 200,
    width: DEVICE_WIDTH - 30,
    borderRadius: 10,
    justifyContent:"space-evenly",
    alignItems: "center",
  },
  subscriptionText: {
    fontSize: 30,
  },
  transitionView: {
    padding: ANIMATED_CARD_PADDING,
  },
  listItem: {
    borderTopWidth: 1,
    marginHorizontal: 10,
    paddingVertical: 20,
    borderTopColor: "#ededef",
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    alignContent: "space-between",
    paddingLeft: 10,
    flexDirection: "row",
  },
  touchableCard: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 6,
 },
  buttonText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold"
  },
  touchableView: {
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    right: 0,
    top: 0,
  },
  modalView: {
    borderColor: "white",
    borderWidth: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#086ab2",
    borderRadius: 15,
    justifyContent: "center",
    marginHorizontal: 15,
    height: 50,
},
});

export default styles;
