import React from "react";
import { View } from "native-base";
import styles from "./styles";

export default class ScanMarker extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rectangle} />
        <View style={styles.topLeftCorner} />
        <View style={styles.topRightCorner} />
        <View style={styles.bottomLeftCorner} />
        <View style={styles.bottomRightCorner} />
      </View>
    );
  }
}
