import { Dimensions, Platform } from "react-native";
import spacing from "./spacing";
const DEVICE_HEIGHT = Dimensions.get("window").height;
const DEVICE_WIDTH = Dimensions.get("window").width;

const size = {
  border: {
    radius: {
      circle: spacing.unit * 50,
      primary: spacing.unit * 10,
      secondary: spacing.unit * 5
    },
    width: {
      primary: 1,
      secondary: spacing.unit * 3,
      empty: 0
    }
  },
  margin: {
    items: DEVICE_HEIGHT / 2.4,
    qrCode: Platform.OS === "ios" ? 0 : spacing.unit * 5,
    icon: spacing.unit * 18,
    form: spacing.unit * 15,
    large: spacing.unit * 8,
    medium: spacing.unit * 5,
    small: spacing.unit * 3,
    empty: 0
  },
  padding: {
    items: spacing.unit * 10,
    backArrow: Platform.OS === "ios" ? spacing.unit * 5 : 0,
    large: spacing.unit * 7,
    medium: spacing.unit * 5,
    small: spacing.unit * 2,
    empty: 0
  },
  parameters: {
    fullWidth: "100%",
    cardWidth: DEVICE_WIDTH - 40,
    calendarCardWidth: DEVICE_WIDTH - 83,
    pickerFrame: (DEVICE_WIDTH - 40) / 2,
    logo: spacing.unit * 75,
    rightView: spacing.unit * 23,
    pickerWidth: spacing.unit * 70,
    userInfo: spacing.unit * 35,
    items: spacing.unit * 125,
    large: spacing.unit * 50,
    medium: spacing.unit * 35,
    small: spacing.unit * 25,
    button: {
      height: {
        medium: spacing.unit * 18,
        large: spacing.unit * 25
      },
      width: {
        medium: spacing.unit * 45,
        large: spacing.unit * 100
      }
    },
    circle: {
      radius: spacing.unit * 20
    },
    scanMarker: {
      corner: spacing.unit * 13
    },
    staffTable: {
      header: {
        height: spacing.unit * 20
      },
      body: {
        width: {
          value: spacing.unit * 45,
          schedule: spacing.unit * 55
        }
      }
    }
  },
  icons: {
    medium: spacing.unit * 17,
    small: spacing.unit * 12,
    dropDown: spacing.unit * 2,
  }
};

export default size;
