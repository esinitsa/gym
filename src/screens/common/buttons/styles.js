import { StyleSheet } from "react-native";
import theme from "../../../styles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    marginTop: theme.size.margin.form,
    justifyContent: "flex-start"
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.size.border.radius.primary,
    justifyContent: "center",
    height: theme.size.parameters.circle.radius,
    zIndex: 100
  },
  circle: {
    height: theme.size.parameters.circle.radius,
    width: theme.size.parameters.circle.radius,
    marginTop: -theme.size.parameters.circle.radius,
    borderWidth: theme.size.border.width.primary,
    borderColor: theme.colors.primary,
    borderRadius: theme.size.border.radius.circle,
    alignSelf: "center",
    zIndex: 99,
    backgroundColor: theme.colors.primary,
  },
  text: {
    color: theme.colors.light,
    fontSize: theme.fonts.size.subtitle,
    backgroundColor: "transparent"
  }
});

export default styles;
