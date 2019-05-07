import { StyleSheet } from "react-native";
import theme from "../../../styles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle: {
    height: theme.size.parameters.scanMarker.rectangle,
    width: theme.size.parameters.scanMarker.rectangle
  },
  topLeftCorner: {
    position: "absolute",
    top: 0,
    left: 0,
    color: theme.colors.cameraCaptureView,
    borderLeftWidth: theme.size.parameters.scanMarker.borderWidth,
    borderTopWidth: theme.size.parameters.scanMarker.borderWidth,
    borderColor: theme.colors.cameraCaptureView,
    height: theme.size.parameters.scanMarker.corner,
    width: theme.size.parameters.scanMarker.corner,
  },
  topRightCorner: {
    position: "absolute",
    top: 0,
    right: 0,
    color: theme.colors.cameraCaptureView,
    borderRightWidth: theme.size.parameters.scanMarker.borderWidth,
    borderTopWidth: theme.size.parameters.scanMarker.borderWidth,
    borderColor: theme.colors.cameraCaptureView,
    height: theme.size.parameters.scanMarker.corner,
    width: theme.size.parameters.scanMarker.corner,
  },
  bottomLeftCorner: {
    position: "absolute",
    bottom: 0,
    left: 0,
    color: theme.colors.cameraCaptureView,
    borderLeftWidth: theme.size.parameters.scanMarker.borderWidth,
    borderBottomWidth: theme.size.parameters.scanMarker.borderWidth,
    borderColor: theme.colors.cameraCaptureView,
    height: theme.size.parameters.scanMarker.corner,
    width: theme.size.parameters.scanMarker.corner,
  },
  bottomRightCorner: {
    position: "absolute",
    bottom: 0,
    right: 0,
    color: theme.colors.cameraCaptureView,
    borderRightWidth: theme.size.parameters.scanMarker.borderWidth,
    borderBottomWidth: theme.size.parameters.scanMarker.borderWidth,
    borderColor: theme.colors.cameraCaptureView,
    height: theme.size.parameters.scanMarker.corner,
    width: theme.size.parameters.scanMarker.corner,
  }
});

export default styles;
