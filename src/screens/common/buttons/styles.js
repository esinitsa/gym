import { StyleSheet } from "react-native";
import theme from "../../../styles";

const MARGIN = 40;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#BF8330",
    borderRadius: theme.size.border.buttonBorderRadius,
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
    borderRadius: theme.size.border.circleBorderRadius,
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
    fontSize: theme.fonts.size.buttonText,
    backgroundColor: "transparent"
  }
});

export default styles;
