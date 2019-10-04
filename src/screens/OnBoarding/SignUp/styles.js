import { StyleSheet } from "react-native";
import theme from "../../../styles";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent"
  },
  formContainer: {
    opacity: 0,
    padding: theme.size.padding.items
  },
  signInView: {
    opacity: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: theme.size.margin.form
  },
  text: {
    color: theme.colors.text,
    marginRight: theme.size.margin.medium,
    fontSize: theme.fonts.size.subtitle,
    fontFamily: theme.fonts.family.standard
  },
  inputItem: {
    marginTop: theme.size.margin.medium
  },
  input: {
    color: theme.colors.text,
    padding: theme.size.padding.empty,
    margin: theme.size.margin.empty
  },
  label: {
    color: theme.colors.text,
    fontWeight: theme.fonts.weight.light
  },
  signInText: {
    fontSize: theme.fonts.size.subtitle,
    color: theme.colors.primary,
    fontFamily: theme.fonts.family.standard
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: theme.size.margin.form,
    justifyContent: "flex-start"
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.size.border.radius.primary,
    justifyContent: "center",
    marginTop: theme.size.margin.form,
    height: theme.size.parameters.circle.radius
  },
  buttonText: {
    color: theme.colors.light,
    fontSize: theme.fonts.size.subtitle,
    backgroundColor: "transparent"
  },
  skip: {
    position: "absolute",
    bottom: 150,
    right: 20
  }
});

export default styles;
