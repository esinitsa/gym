import { Dimensions } from "react-native";
const DEVICE_HEIGHT = Dimensions.get("window").height;
const DEVICE_WIDTH = Dimensions.get("window").width;

const size = {
  border: {
    circleBorderRadius: 100,
    buttonBorderRadius: 20,
    modal: 20,
    qrCodeBtnBorderRadius: 15,
    cardBorderRadius: 10,
    typeIconBorderRadius: 5,
    searchBarBorderRadius: 3,
    listItemBorderWidth: 1,
    emptyBorderWidth: 0,
    headerBottom: 0,
  },
  font: {
    headlineText: 25,
    title: 22,
    topicText: 20,
    buttonText: 18,
    bodyHeaderText: 18,
    subscriptionCountText: 17,
    inputText: 16,
    notesAuthorText: 16,
    standardText: 15,
    personEmail: 14,
    headerUsername: 14,
    notesText: 13,
    email: 12,
    markVisit: 12
  },
  margin: {
    emptyNotes: DEVICE_HEIGHT / 2.4,
    button: 15,
    standard: 10,
    label: 5,
    qrScannerIcon: 5,
    empty: 0,
  },
  padding: {
    emptyListItemInfoVertical: 20,
    emptyListItemInfoHorizontal: 15,
    cardVertical: 15,
    header: 15,
    cardHorizontal: 10,
    notesTopCard: 10,
    searchBar: 10,
    infoText: 10,
    listItem: 10,
    activeTextHorizontal: 5,
    infoTextVertical: 5,
    empty: 0,
    subscriptionListItem: {
      listItem: 20,
      textInfo: 11,
      inactiveText:5,
      listText: 4,
      subscriptionType: 3,
    },
    userListItem: {
      infoHorizontal: 20,
      infoVertical: 5,
    },
  },
  parameters: {
    qrCodeButtonHeight: 50,
    buttonHeight: 35,
    buttonWidth: 110,
    infoView: 70,
    userInfoView: 100,
    cardWidth: DEVICE_WIDTH - 30,
    scanMarker: {
      rectangle: 250,
      corner: 25,
      borderWidth: 5
    },
    searchBar: {
      height: 50,
    },
    subscriptionListItem: {
      typeIcon: 50,
      cardHeight: 100,
      cardWidth: DEVICE_WIDTH - 30,
    },
    userListItem: {
      typeIcon: 60,
    },
    notes: {
      inputHeight: 120,
      buttonHeight: 35,
      buttonWidth: 80
    },
  }
};

export default size;
