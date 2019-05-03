import { Dimensions, StyleSheet } from "react-native";
import { ANIMATED_CARD_PADDING } from "../../constants/cssConstants";
import theme from "../../styles/index";

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
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
    width: "100%"
  },
  userInfoView: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  userInfoRow: {
    flexDirection: "row"
  },
  emptyListItemInfo: {
    fontSize: theme.size.font.topicText,
    color: theme.colors.infoText,
    textAlign: "center",
    paddingHorizontal: theme.size.padding.emptyListItemInfoHorizontal,
    paddingVertical: theme.size.padding.emptyListItemInfoVertical
  },
  headlineText: {
    fontSize: theme.size.font.headlineText
  },
  transitionView: {
    padding: ANIMATED_CARD_PADDING
  },
  userName: {
    fontSize: theme.size.font.headlineText,
    fontWeight: "500"
  },
  emailText: {
    paddingTop: theme.size.padding.infoTextVertical,
    fontSize: theme.size.font.standardText,
    justifyContent: "flex-start",
    color: "#95959a"
  },
  streetInfo: {
    fontSize: theme.size.font.standardText,
    paddingVertical: theme.size.padding.infoTextVertical,
    marginLeft: theme.size.margin.label
  },
  infoPlaceholder: {
    width: 60,
    fontSize: theme.size.font.standardText,
    color: theme.colors.infoText,
    paddingVertical: theme.size.padding.infoTextVertical
  },
  listItem: {
    width: "100%",
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
    shadowColor: theme.colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6
  },
  button: {
    alignItems: "center",
    backgroundColor: "#086ab2",
    borderRadius: theme.size.border.qrCodeBtnBorderRadius,
    justifyContent: "center",
    marginHorizontal: theme.size.margin.button,
    height: theme.size.parameters.qrCodeButtonHeight
  },
  buttonText: {
    fontSize: theme.size.font.topicText,
    color: theme.colors.qrCodeButtonText,
    fontWeight: "bold"
  },
  header: {
    borderBottomWidth: theme.size.border.headerBottom,
    backgroundColor: theme.colors.headerBackground
  },
  leftHeader: {
    paddingLeft: theme.size.padding.header
  },
  leftHeaderText: {
    fontSize: theme.size.font.headlineText,
    fontWeight: "700"
  },
  touchableView: {
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    right: 0,
    top: 0
  },
  modalView: {
    borderColor: "white",
    borderWidth: theme.size.border.modal
  }
});

export default styles;
