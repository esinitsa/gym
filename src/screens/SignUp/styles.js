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
    marginRight: theme.size.margin.standard,
    fontSize: theme.size.font.topicText,
    fontFamily: "TrebuchetMS"
  },
  inputItem: {
    marginTop: theme.size.margin.standard
  },
  input: {
    color: "white",
    padding: theme.size.padding.empty,
    margin: theme.size.margin.empty
  },
  label: {
    color: "white",
    fontWeight: "200"
  },
  signInText: {
    fontSize: theme.size.font.topicText,
    color: "#BF8330",
    fontFamily: "TrebuchetMS"
  }
});

export default styles;
