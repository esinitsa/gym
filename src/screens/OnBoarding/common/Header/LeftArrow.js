import React from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import { ButtonIcon } from "../../../common/buttons/icon";
import theme from "../../../../styles";

const OnBoardingHeaderLeftArrow = ({ step }) => {
  return (
    <View pointerEvents={step} style={styles.content}>
      <ButtonIcon
        type={"AntDesign"}
        icon={"left"}
        color={theme.colors.primary}
        size={theme.size.icons.small}
        iconStyle={styles.backArrowIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    position: "absolute"
  },
  backArrowIcon: {
    paddingLeft: theme.size.padding.backArrow,
    paddingRight: theme.size.padding.backArrow
  }
});

export default OnBoardingHeaderLeftArrow;
