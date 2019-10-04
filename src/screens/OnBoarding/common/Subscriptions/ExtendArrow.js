import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import theme from "../../../../styles";

const OnBoardingExtendArrow = ({ stepExtendCard }) => {
  return (
    <View pointerEvents={stepExtendCard} style={styles.clickableArrow}>
      <TouchableOpacity>
        <Icon
          name={"down"}
          color={theme.colors.primary}
          size={theme.size.icons.small}
          solid
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  clickableArrow: {
    position: "absolute",
    opacity: 0,
    paddingLeft: theme.size.padding.medium
  }
});

export default OnBoardingExtendArrow;
