import { StyleSheet } from "react-native";
import theme from "../../styles";

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  item: {
    marginTop: theme.size.margin.standard
  },
  label: {
    color: "white",
    fontWeight: "200"
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 40,
  },
  loginView: {
    alignContent: "center",
     marginTop: 40,
     justifyContent: "center",
     padding: 20,
     marginBottom: 30,
  },
  signUpView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    marginRight: theme.size.margin.standard,
    fontSize: theme.size.font.topicText,
    fontFamily: "TrebuchetMS",
  },
  inputText: {
    color: "#ffffff",
    fontFamily: "TrebuchetMS",
  },
  signUpText: {
    fontSize: theme.size.font.topicText,
     color: "#BF8330",
    fontFamily: "TrebuchetMS",
  }
});

export default styles;
