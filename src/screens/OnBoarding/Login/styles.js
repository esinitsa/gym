import { StyleSheet } from "react-native";
import theme from "../../../styles";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent"
  },
  item: {
    marginTop: theme.size.margin.medium
  },
  label: {
    fontWeight: theme.fonts.weight.light
  },
  logo: {
    width: theme.size.parameters.logo,
    height: theme.size.parameters.logo,
    alignSelf: "center",
    marginTop: theme.size.margin.form * theme.spacing.unit
  },
  loginView: {
    opacity: 0,
    alignContent: "space-around",
    marginVertical: theme.size.margin.form,
    justifyContent: "center",
    padding: theme.size.padding.items
  },
  signUpView: {
    opacity: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  text: {
    marginRight: theme.size.margin.medium,
    fontSize: theme.fonts.size.standard,
    fontFamily: theme.fonts.family.standard
  },
  inputText: {
    color: theme.colors.text,
    fontFamily: theme.fonts.family.standard
  },
  signUpText: {
    fontSize: theme.fonts.size.subtitle,
    color: theme.colors.primary,
    fontFamily: theme.fonts.family.standard
  },
  buttonContainer: {
    opacity: 0,
    alignItems: "center",
    marginTop: theme.size.margin.form,
    justifyContent: "flex-start"
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.size.border.radius.primary,
    justifyContent: "center",
    height: theme.size.parameters.circle.radius
  },
  buttonText: {
    color: theme.colors.light,
    fontSize: theme.fonts.size.subtitle,
    backgroundColor: "transparent"
  },
  skip: {
    alignSelf: "flex-end"
  }
});

export default styles;
