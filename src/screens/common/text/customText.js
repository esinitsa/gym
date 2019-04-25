import React from "react";
import { Text } from "native-base";
import styles from "./styles";

export const CustomText = props => {
  return (
    <Text style={[styles.text, props.style]} {...props}>{props.text}</Text>
  );
};
