import { StyleSheet } from "react-native";
import theme from "../../../styles";

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.size.border.searchBarBorderRadius,
    paddingHorizontal: theme.size.padding.searchBar,
    height: theme.size.parameters.searchBar.height,
    backgroundColor: theme.colors.searchBarContainer
  },
  item: {
    paddingHorizontal: theme.size.padding.searchBar
  },
  icon: {
    color: theme.colors.inputColor,
  },
  searchInput: {
    color: theme.colors.inputColor
  }
});

export default styles;
