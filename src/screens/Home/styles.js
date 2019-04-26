import { Dimensions, StyleSheet } from "react-native";
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
    paddingVertical: 15,
    width: DEVICE_WIDTH - 30,
    borderRadius: 10,
  },
  subscriptionText: {
    fontSize: 25,
  },
  transitionView: {
    padding: ANIMATED_CARD_PADDING,
  },
  listItem: {
    width: '100%',
    borderTopWidth: 0,
    marginHorizontal: 0,
    paddingVertical: 10,
    borderTopColor: "#ededef",
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    alignContent: "space-between",
    flexDirection: "row",
  },
  touchableCard: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#086ab2",
    borderRadius: 15,
    justifyContent: "center",
    marginHorizontal: 15,
    height: 50,
  },
  buttonText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold"
  },
  header: {
    borderBottomColor: "#f5f4f5",
    borderBottomWidth: 0,
    backgroundColor: "#f5f4f5",
  },
  leftHeader: {
    paddingLeft: 15
  },
  leftHeaderText: {
    fontSize: 25,
    fontWeight: "700"
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

});

export default styles;
