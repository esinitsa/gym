import { StyleSheet } from "react-native";
import theme from "../../styles";

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.container,
    flex: 1
  },
  content: {
    flex: 1
  },
  header: {
    borderBottomColor: theme.colors.container,
    borderBottomWidth: theme.size.border.width.empty,
    backgroundColor: "transparent"
  },
  headerBody: {
    flex: 1,
    alignItems: "center"
  },
  bodyHeader: {
    paddingLeft: theme.size.padding.large,
    justifyContent: "center"
  },
  bodyHeaderText: {
    fontSize: theme.fonts.size.subtitle,
    fontWeight: theme.fonts.weight.bold
  },
  headerUsername: {
    fontSize: theme.fonts.size.placeholder,
    color: theme.colors.secondary
  },
  headerLeftArrow: {
    justifyContent: "center",
    alignSelf: "center",
  },
  dropDownArrow: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    fontSize: theme.fonts.size.subtitle,
  },
  leftHeader: {
    flex: 1,
  },
  backArrowIcon: {
    paddingLeft: theme.size.padding.backArrow
  },
  noteTitle: {
    fontSize: theme.fonts.size.title,
    color: theme.colors.primary,
    fontWeight: theme.fonts.weight.bold
  },
  touchableCard: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.size.margin.medium,
    shadowColor: theme.shadows.color,
    shadowOffset: theme.shadows.offset,
    shadowOpacity: theme.shadows.opacity,
    shadowRadius: theme.shadows.radius,
    zIndex: 200
  },
  topCard: {
    paddingVertical: theme.size.padding.medium,
    paddingHorizontal: theme.size.padding.medium,
    width: theme.size.parameters.cardWidth,
    borderRadius: theme.size.border.radius.secondary
  },
  card: {
    paddingVertical: theme.size.padding.large,
    paddingHorizontal: theme.size.padding.medium,
    width: theme.size.parameters.cardWidth,
    borderRadius: theme.size.border.radius.secondary
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
    paddingRight: theme.size.padding.empty,
  },
  emptyNotesView: {
    position: "absolute",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: theme.size.margin.items
  },
  emptyNotesInfo: {
    fontSize: theme.fonts.size.title,
    color: theme.colors.secondary,
    textAlign: "center",
    paddingHorizontal: theme.size.padding.large,
    paddingVertical: theme.size.padding.items,
    zIndex: 100
  },
  input: {
    color: theme.colors.text,
    borderWidth: theme.size.border.width.primary,
    height: theme.size.parameters.large,
    fontSize: theme.fonts.size.standard,
    borderColor: theme.colors.secondary,
    padding: theme.size.padding.empty,
    margin: theme.size.margin.empty
  },
  saveNoteView: {
    flex: 1,
    flexDirection: "row"
  },
  pickerContainer: {
    flexDirection: "row",
    marginTop: theme.size.margin.large
  },
  pickerView: theme.size.parameters.picker.view,
  pickerText: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.subtitle,
    fontWeight: theme.fonts.weight.bold,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  pickerItemText: {
    fontSize: theme.fonts.size.standard,
    fontWeight: theme.fonts.weight.bold
  },
  pickerBackHeader: {
    color: theme.colors.primary,
    fontSize: theme.fonts.size.standard,
    fontWeight: theme.fonts.weight.bold
  },
  editIconView: {
    alignContent: "center",
    alignItems: "flex-end",
    alignSelf: "center"
  },
  button: {
    backgroundColor: theme.colors.container,
    marginTop: theme.size.margin.large,
    borderRadius: theme.size.border.radius.primary,
    height: theme.size.parameters.button.height.medium,
    width: theme.size.parameters.button.width.medium,
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center"
  },
  buttonText: {
    color: theme.colors.primary,
    fontSize: theme.fonts.size.placeholder,
    fontWeight: theme.fonts.weight.bold
  }
});
