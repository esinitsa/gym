import { Button, Header, Left, Right } from "native-base";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { EMPTY_RESPONSE } from "../../../../constants";
import theme from "../../../../styles";
import { CustomText } from "../../../common/text/customText";
import styles from "../styles";

const OnBoardingHomeHeader = () => {
  return (
    <Header style={styles.header}>
      <Left style={styles.leftHeader}>
        <CustomText
          text={EMPTY_RESPONSE}
          style={styles.leftHeaderText}
        />
      </Left>
      <Right>
        <Button transparent style={styles.rightHeader}>
          <FontAwesome5
            name={"sign-out-alt"}
            color={theme.colors.primary}
            size={theme.size.icons.small}
            solid
          />
        </Button>
      </Right>
    </Header>
  );
};

export default OnBoardingHomeHeader;
