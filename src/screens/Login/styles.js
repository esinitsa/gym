import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
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
    marginRight: 10,
    fontSize: 20
  },
  inputText: {
    color: "#ffffff",
  },
  signUpText: {
    fontSize: 20,
     color: "#BF8330",
  }
});

export default styles;
