import { StyleSheet } from "react-native";
import theme from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.container,
  },
  item: {
    marginTop: theme.size.margin.medium
  },
  label: {
    color: theme.colors.text,
    fontWeight: theme.fonts.weight.light
  },
  logo: {
    width: theme.size.parameters.logo,
    height: theme.size.parameters.logo,
    alignSelf: "center",
    marginTop: theme.size.margin.form * theme.spacing.unit
  },
  loginView: {
    alignContent: "space-around",
     marginVertical: theme.size.margin.form,
     justifyContent: "center",
     padding: theme.size.padding.items,
  },
  signUpView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.subtitle,
    marginRight: theme.size.margin.medium,
    fontSize: theme.fonts.size.standard,
    fontFamily: theme.fonts.family.standard,
  },
  inputText: {
    color: theme.colors.text,
    fontFamily: theme.fonts.family.standard,
  },
  signUpText: {
    fontSize: theme.fonts.size.subtitle,
    color: theme.colors.primary,
    fontFamily: theme.fonts.family.standard,
  }
});

export default styles;
