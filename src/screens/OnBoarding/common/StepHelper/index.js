import React from "react";
import { View, Text } from "native-base";
import styles from "./styles";

function StepHelper({ text = "", align = "bottom" }) {
  return (
    <View
      style={[
        styles.container,
        align === "top" ? styles.alignTop : styles.alignBottom
      ]}
    >
      <View style={styles.content}>
        <Text>{text}</Text>
      </View>
    </View>
  );
}

export default StepHelper;
