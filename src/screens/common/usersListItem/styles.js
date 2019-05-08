import { StyleSheet } from "react-native";
import theme from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  userIcon: {
    color: theme.colors.light
  },
  typeIcon: {
    height: theme.size.parameters.small,
    width: theme.size.parameters.small,
    borderRadius: theme.size.border.radius.secondary,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: theme.shadows.color,
    shadowOffset: theme.shadows.offset,
    shadowOpacity: theme.shadows.opacity,
    shadowRadius: theme.shadows.radius
  },
  userInfoText: {
    paddingHorizontal: theme.size.padding.items,
    paddingVertical: theme.size.padding.small
  },
  emailText: {
    paddingHorizontal: theme.size.padding.items,
    paddingBottom: theme.size.padding.mediumVertical,
    fontSize: theme.fonts.size.placeholder,
    color: theme.colors.secondary,
  }
});

export default styles;
