import { StyleSheet } from "react-native";
import theme from "../../styles";

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
    fontSize: theme.fonts.size.bodyHeaderText,
    fontWeight: theme.fonts.weight.bold
  },
  headerUsername: {
    fontSize: theme.fonts.size.headerUsername,
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
    fontSize: theme.fonts.size.title,
    color: theme.colors.actionComponent,
    fontWeight: theme.fonts.weight.bold
  },
  touchableCard: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.size.margin.standard,
    shadowColor: theme.shadows.color,
    shadowOffset: theme.shadows.offset,
    shadowOpacity: theme.shadows.opacity,
    shadowRadius: theme.shadows.radius,
    zIndex: 200
  },
  topCard: {
    paddingVertical: theme.size.padding.notesTopCard,
    paddingHorizontal: theme.size.padding.notesTopCard,
    width: theme.size.parameters.cardWidth,
    borderRadius: theme.size.border.cardBorderRadius
  },
  card: {
    paddingVertical: theme.size.padding.cardVertical,
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
    fontSize: theme.fonts.size.topicText,
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
    fontSize: theme.fonts.size.inputText,
    borderColor: theme.colors.cardItemBackground,
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
    color: theme.colors.saveNoteButtonText,
    fontSize: theme.fonts.size.markVisit,
    fontWeight: theme.fonts.weight.bold
  }
});
