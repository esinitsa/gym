import { StyleSheet } from "react-native";
import theme from "../../styles/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: theme.colors.containerBackground
  },
  card: {
    paddingVertical: theme.size.padding.cardVertical,
    width: theme.size.parameters.cardWidth,
    borderRadius: theme.size.border.cardBorderRadius
  },
  cardItem: {
    width: theme.size.parameters.FULL_WIDTH
  },
  userInfoView: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  userInfoRow: {
    flexDirection: "row"
  },
  emptyListItemInfo: {
    fontSize: theme.fonts.size.topicText,
    color: theme.colors.infoText,
    textAlign: "center",
    paddingHorizontal: theme.size.padding.emptyListItemInfoHorizontal,
    paddingVertical: theme.size.padding.emptyListItemInfoVertical
  },
  headlineText: {
    fontSize: theme.fonts.size.headlineText
  },
  userName: {
    fontSize: theme.fonts.size.headlineText,
    fontWeight: theme.fonts.weight.bold
  },
  streetInfo: {
    fontSize: theme.fonts.size.standardText,
    paddingVertical: theme.size.padding.infoTextVertical,
    marginLeft: theme.size.margin.label
  },
  infoPlaceholder: {
    width: 60,
    fontSize: theme.fonts.size.standardText,
    color: theme.colors.infoText,
    paddingVertical: theme.size.padding.infoTextVertical
  },
  listItem: {
    width: theme.size.parameters.FULL_WIDTH,
    borderTopWidth: theme.size.border.emptyBorderWidth,
    marginHorizontal: theme.size.margin.empty,
    paddingVertical: theme.size.padding.listItem,
    borderTopColor: theme.colors.listItemBorderTop,
    backgroundColor: theme.colors.listItemBackground,
    justifyContent: "space-between",
    alignContent: "space-between",
    flexDirection: "row"
  },
  touchableCard: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: theme.size.margin.label,
    shadowColor: theme.shadows.color,
    shadowOffset: theme.shadows.offset,
    shadowOpacity: theme.shadows.opacity,
    shadowRadius: theme.shadows.radius
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.qrCodeButton,
    borderRadius: theme.size.border.qrCodeBtnBorderRadius,
    justifyContent: "center",
    marginHorizontal: theme.size.margin.button,
    height: theme.size.parameters.qrCodeButtonHeight
  },
  buttonText: {
    fontSize: theme.fonts.size.topicText,
    color: theme.colors.qrCodeButtonText,
    fontWeight: theme.fonts.weight.bold
  },
  header: {
    borderBottomWidth: theme.size.border.headerBottom,
    backgroundColor: theme.colors.headerBackground
  },
  leftHeader: {
    paddingLeft: theme.size.padding.header
  },
  leftHeaderText: {
    fontSize: theme.fonts.size.headlineText,
    fontWeight: theme.fonts.weight.bold
  },
  touchableView: {
    backgroundColor: theme.colors.modalBackground,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    right: 0,
    top: 0
  },
  modalView: {
    borderColor: theme.colors.modalBorder,
    borderWidth: theme.size.border.modal
  }
});

export default styles;
