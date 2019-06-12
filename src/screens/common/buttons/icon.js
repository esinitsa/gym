import React from "react";
import { Button } from "native-base";
import Icon from "../../../styles/icons";
import theme from "../../../styles";

const defaultProps = {
  event: null,
  icon: "down",
  type: "AntDesign",
  color: theme.colors.primary,
  size: theme.size.icons.small,
  buttonStyle: null
};

export const ButtonIcon = props => {
  const { event, icon, type, color, size, buttonStyle } = {
    ...defaultProps,
    ...props
  };
  const IconType = Icon[type];

  return (
    <Button onPress={event} transparent style={buttonStyle}>
      <IconType name={icon} color={color} size={size} solid />
    </Button>
  );
};
