import { StyleSheet } from "react-native";
import theme from "../../../styles";

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.size.border.radius.secondary,
    paddingHorizontal: theme.size.padding.medium,
    height: theme.size.parameters.small,
    backgroundColor: theme.colors.light
  },
  item: {
    paddingHorizontal: theme.size.padding.medium
  },
  icon: {
    color: theme.colors.text,
  },
  searchInput: {
    color: theme.colors.text
  }
});

export default styles;
