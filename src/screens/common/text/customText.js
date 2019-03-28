import React from "react";
import { Text } from "native-base";
import styles from "./styles";

export const CustomText = prop => {
  return (
    <Text style={[styles.text,prop.style]}>{prop.text}</Text>
  );
};
