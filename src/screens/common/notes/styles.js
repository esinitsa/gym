import { StyleSheet } from "react-native";
import theme from "../../../styles";

const styles = StyleSheet.create({
  container: {
    paddingLeft: theme.size.padding.empty,
    paddingBottom: theme.size.padding.empty,
    paddingRight: theme.size.padding.empty,
    paddingTop: theme.size.padding.empty,
    width: theme.size.parameters.FULL_WIDTH
  },
  listItem: {
    width: theme.size.parameters.FULL_WIDTH,
    flexDirection: "row",
    paddingLeft: theme.size.padding.empty,
    paddingBottom: theme.size.padding.empty,
    paddingRight: theme.size.padding.empty,
    paddingTop: theme.size.padding.empty,
    marginLeft: theme.size.margin.empty,
    marginBottom: theme.size.margin.medium,
    borderBottomWidth: theme.size.border.width.empty
  },
  leftView: {
    flex: 1,
    alignContent: "center",
    alignItems: "center"
  },
  bodyView: {
    flex: 1,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center"
  },
  rightView: {
    flex: 1
  },
  rightContentView: {
    alignContent: "center",
    alignItems: "center"
  },
  date: {
    color: theme.colors.secondary,
    fontSize: theme.fonts.size.placeholder,
    fontWeight: theme.fonts.weight.normal
  },
  notesAuthor: {
    fontSize: theme.fonts.size.standard,
    fontWeight: theme.fonts.weight.bold
  },
  authorRole: {
    color: theme.colors.primary,
    fontSize: theme.fonts.size.standard,
    fontWeight: theme.fonts.weight.bold
  },
  notesText: {
    fontSize: theme.fonts.size.placeholder,
    color: theme.colors.secondary,
    fontWeight: theme.fonts.weight.normal
  }
});

export default styles;
