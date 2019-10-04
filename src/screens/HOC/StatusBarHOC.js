import React from "react";
import { View, StatusBar } from "react-native";
import theme from "../../styles";

const StatusBarWrapper = WrappedComponent => {
  const StatusBarHOC = props => {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={theme.colors.container}
          barStyle="dark-content"
        />
        <WrappedComponent {...props} />
      </View>
    );
  };

  return StatusBarHOC;
};

export default StatusBarWrapper;
