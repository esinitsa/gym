import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle: {
    height: 250,
    width: 250
  },
  topLeftCorner: {
    position: "absolute",
    top: 0,
    left: 0,
    color: "white",
    borderLeftWidth: 5,
    borderTopWidth: 5,
    borderColor: "white",
    height: 25,
    width: 25,
  },
  topRightCorner: {
    position: "absolute",
    top: 0,
    right: 0,
    color: "white",
    borderRightWidth: 5,
    borderTopWidth: 5,
    borderColor: "white",
    height: 25,
    width: 25,
  },
  bottomLeftCorner: {
    position: "absolute",
    bottom: 0,
    left: 0,
    color: "white",
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderColor: "white",
    height: 25,
    width: 25,
  },
  bottomRightCorner: {
    position: "absolute",
    bottom: 0,
    right: 0,
    color: "white",
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderColor: "white",
    height: 25,
    width: 25,
  }
});

export default styles;
