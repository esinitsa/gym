import { StyleSheet } from "react-native";
import theme from "../../../styles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle: {
    height: theme.size.parameters.items,
    width: theme.size.parameters.items
  },
  topLeftCorner: {
    position: "absolute",
    top: 0,
    left: 0,
    color: theme.colors.light,
    borderLeftWidth: theme.size.border.width.secondary,
    borderTopWidth: theme.size.border.width.secondary,
    borderColor: theme.colors.light,
    height: theme.size.parameters.scanMarker.corner,
    width: theme.size.parameters.scanMarker.corner,
  },
  topRightCorner: {
    position: "absolute",
    top: 0,
    right: 0,
    color: theme.colors.light,
    borderRightWidth: theme.size.border.width.secondary,
    borderTopWidth: theme.size.border.width.secondary,
    borderColor: theme.colors.light,
    height: theme.size.parameters.scanMarker.corner,
    width: theme.size.parameters.scanMarker.corner,
  },
  bottomLeftCorner: {
    position: "absolute",
    bottom: 0,
    left: 0,
    color: theme.colors.light,
    borderLeftWidth: theme.size.border.width.secondary,
    borderBottomWidth: theme.size.border.width.secondary,
    borderColor: theme.colors.light,
    height: theme.size.parameters.scanMarker.corner,
    width: theme.size.parameters.scanMarker.corner,
  },
  bottomRightCorner: {
    position: "absolute",
    bottom: 0,
    right: 0,
    color: theme.colors.light,
    borderRightWidth: theme.size.border.width.secondary,
    borderBottomWidth: theme.size.border.width.secondary,
    borderColor: theme.colors.light,
    height: theme.size.parameters.scanMarker.corner,
    width: theme.size.parameters.scanMarker.corner,
  }
});

export default styles;
