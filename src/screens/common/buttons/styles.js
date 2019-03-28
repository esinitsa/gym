import { StyleSheet } from "react-native";

const MARGIN = 40;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#BF8330",
    borderRadius: 20,
    justifyContent: "center",
    height: MARGIN,
    zIndex: 100
  },
  circle: {
    height: MARGIN,
    marginTop: -MARGIN,
    width: MARGIN,
    borderWidth: 1,
    borderColor: "#BF8330",
    borderRadius: 100,
    alignSelf: "center",
    zIndex: 99,
    backgroundColor: "#BF8330"
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
