import { StyleSheet } from "react-native";
import theme from "../../styles";

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.container
  },
  formContainer: {
    padding: theme.size.padding.items
  },
  signInView: {
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
  }
});

export default styles;
