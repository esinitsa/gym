import { StyleSheet } from "react-native";
import theme from "../../../styles";

const styles = StyleSheet.create({
  container: {
    paddingLeft: theme.size.padding.empty,
    paddingBottom: theme.size.padding.empty,
    paddingRight: theme.size.padding.empty,
    paddingTop: theme.size.padding.empty,
    width: "100%"
  },
  listItem: {
    width: "100%",
    flexDirection: "row",
    paddingLeft: theme.size.padding.empty,
    paddingBottom: theme.size.padding.empty,
    paddingRight: theme.size.padding.empty,
    paddingTop: theme.size.padding.empty,
    marginLeft: theme.size.margin.empty,
    marginBottom: theme.size.margin.standard,
    borderBottomWidth: theme.size.border.emptyBorderWidth
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
    color: theme.colors.infoText,
    fontSize: theme.size.font.notesText,
    fontWeight: "400"
  },
  notesAuthor: {
    fontSize: theme.size.font.notesAuthorText,
    fontWeight: "bold"
  },
  authorRole: {
    color: theme.colors.actionComponent,
    fontSize: theme.size.font.notesAuthorText,
    fontWeight: "bold"
  },
  notesText: {
    fontSize: theme.size.font.notesText,
    color: theme.colors.infoText,
    fontWeight: "400"
  }
});

export default styles;
