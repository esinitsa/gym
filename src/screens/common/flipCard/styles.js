import { StyleSheet, Dimensions } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    height: 200,
    backgroundColor: "red",
    width: DEVICE_WIDTH - 30,
    borderWidth: 1
  },
  card2: {
    height: 200,
    backgroundColor: "green",
    width: DEVICE_WIDTH - 30,
    borderWidth: 1
  },
  button: {
    flex: 1,
    justifyContent:"space-evenly",
    alignItems: "center",
  },
  flipCard: {
    backfaceVisibility: "hidden",
    color: "red"
  },
  flipCardBack: {
    color: "green",
    position: "absolute",
    top: 0
  },
  container: {
    alignItems: "center",
    flex: 1,
    marginTop: 40,
    justifyContent: "flex-start"
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    backgroundColor: "transparent"
  }
});

export default styles;
