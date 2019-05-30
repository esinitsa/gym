import { StyleSheet } from "react-native";
import theme from "../../styles/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: theme.colors.container
  },
  headerView: {
    flex: 1,
    flexDirection: "row"
  },
  header: {
    borderBottomWidth: theme.size.border.width.empty,
    backgroundColor: theme.colors.light
  },
  headerBody: {
    flex: 1,
    alignItems: "center"
  },
  bodyHeaderText: {
    fontSize: theme.fonts.size.subtitle,
    fontWeight: theme.fonts.weight.bold
  },
  headerUsername: {
    fontSize: theme.fonts.size.placeholder,
    color: theme.colors.secondary,
    textAlign: "center"
  },
  leftHeader: {
    flex: 1,
  },
  backArrowIcon: {
    paddingLeft: theme.size.padding.backArrow
  },
  leftHeaderText: {
    fontSize: theme.fonts.size.title,
    fontWeight: theme.fonts.weight.bold
  }
});

export default styles;
