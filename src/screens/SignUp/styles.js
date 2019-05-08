import { StyleSheet } from "react-native";
import theme from "../../styles";

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  formContainer: {
    padding: 20
  },
  signInView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 30
  },
  text: {
    color: "#ffffff",
    marginRight: theme.size.margin.medium,
    fontSize: theme.fonts.size.title,
    fontFamily: "TrebuchetMS"
  },
  inputItem: {
    marginTop: theme.size.margin.medium
  },
  input: {
    color: "white",
    padding: theme.size.padding.empty,
    margin: theme.size.margin.empty
  },
  label: {
    color: "white",
    fontWeight: theme.fonts.weight.light
  },
  signInText: {
    fontSize: theme.fonts.size.title,
    color: "#BF8330",
    fontFamily: "TrebuchetMS"
  }
});

export default styles;
