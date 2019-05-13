import { Dimensions } from "react-native";
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
    form: spacing.unit * 15,
    large: spacing.unit * 8,
    medium: spacing.unit * 5,
    small: spacing.unit * 3,
    empty: 0
  },
  padding: {
    items: spacing.unit * 10,
    large: spacing.unit * 7,
    medium: spacing.unit * 5,
    small: spacing.unit * 2,
    empty: 0
  },
  parameters: {
    fullWidth: "100%",
    cardWidth: DEVICE_WIDTH - 40,
    logo: spacing.unit * 75,
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
        medium: spacing.unit * 45
      }
    },
    circle: {
      radius: spacing.unit * 20
    },
    scanMarker: {
      corner: spacing.unit * 13
    }
  },
  icons: {
    medium: spacing.unit *  17,
    small: spacing.unit * 12,
    dropDown: spacing.unit * 2,
  }
};

export default size;
