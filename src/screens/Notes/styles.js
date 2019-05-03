import { StyleSheet, Dimensions } from "react-native";
import theme from "../../styles";

export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;
export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.containerBackground,
    flex: 1
  },
  content: {
    flex: 1
  },
  header: {
    borderBottomColor: theme.colors.containerBackground,
    borderBottomWidth: theme.size.border.emptyBorderWidth,
    backgroundColor: "transparent"
  },
  bodyHeader: {
    paddingLeft: theme.size.padding.header,
    justifyContent: "center"
  },
  bodyHeaderText: {
    fontSize: theme.size.font.bodyHeaderText,
    fontWeight: "700"
  },
  headerUsername: {
    fontSize: theme.size.font.headerUsername,
    color: theme.colors.infoText
  },
  headerLeftArrow: {
    justifyContent: "center",
    alignSelf: "center"
  },
  profileIconHeader: {
    paddingLeft: theme.size.padding.infoText
  },
  noteTitle: {
    fontSize: theme.size.font.title,
    color: theme.colors.actionComponent,
    fontWeight: "600"
  },
  touchableCard: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.size.margin.standard,
    shadowColor: theme.colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    marginVertical: theme.size.margin.standard,
    zIndex: 200
  },
  topCard: {
    paddingVertical: theme.size.padding.notesTopCard,
    paddingHorizontal: theme.size.padding.notesTopCard,
    width: theme.size.parameters.cardWidth,
    borderRadius: theme.size.border.cardBorderRadius
  },
  card: {
    paddingVertical: theme.size.padding.card,
    paddingHorizontal: theme.size.padding.cardHorizontal,
    width: theme.size.parameters.cardWidth,
    borderRadius: theme.size.border.cardBorderRadius
  },
  addNoteCardItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: theme.size.padding.empty,
    paddingRight: theme.size.padding.empty
  },
  noteCardItem: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: theme.size.padding.empty,
    paddingRight: theme.size.padding.empty
  },
  emptyNotesView: {
    position: "absolute",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: theme.size.margin.emptyNotes
  },
  emptyNotesInfo: {
    fontSize: theme.size.font.topicText,
    color: theme.colors.infoText,
    textAlign: "center",
    paddingHorizontal: theme.size.padding.emptyListItemInfoHorizontal,
    paddingVertical: theme.size.padding.emptyListItemInfoVertical,
    zIndex: 100
  },
  input: {
    color: theme.colors.inputColor,
    borderWidth: theme.size.border.listItemBorderWidth,
    height: theme.size.parameters.notes.inputHeight,
    fontSize: theme.size.font.inputText,
    borderColor: "#dcdbdc",
    padding: theme.size.padding.empty,
    margin: theme.size.margin.empty
  },
  editIconView: {
    alignContent: "center",
    alignItems: "flex-end",
    alignSelf: "center"
  },
  button: {
    backgroundColor: theme.colors.standardButton,
    marginTop: theme.size.margin.button,
    borderRadius: theme.size.border.buttonBorderRadius,
    height: theme.size.parameters.notes.buttonHeight,
    width: theme.size.parameters.notes.buttonWidth,
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center"
  },
  buttonText: {
    color: "#086ab2",
    fontSize: theme.size.font.markVisit,
    fontWeight: "700"
  }
});
