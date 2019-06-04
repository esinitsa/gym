import { Button, Header, View } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { I18n } from "react-redux-i18n";
import { NavigationType } from "../../../constants/navigationTypes";
import { isEqualUsers } from "../../../services/filter";
import theme from "../../../styles";
import { CustomText } from "../../common/text/customText";
import styles from "../styles";

export const renderHeader = props => {
  const { userInfo, currentUser, navigation } = props;

  const goTo = (screen, params) => navigation.navigate(screen, params);

  const goToHome = () => {
    isEqualUsers(userInfo, currentUser)
      ? goTo(NavigationType.Home)
      : goTo(NavigationType.Profile, {
          id: userInfo.id
        });
  };

  return (
    <Header style={styles.header} noShadow>
      <Button onPress={goToHome} transparent>
        <Icon
          name={"left"}
          color={theme.colors.primary}
          size={theme.size.icons.small}
          solid
          style={styles.backArrowIcon}
        />
      </Button>
      <View style={styles.headerBody}>
        <CustomText
          text={I18n.t("profile.makeAppointment")}
          style={styles.bodyHeaderText}
        />
        <CustomText
          text={`${userInfo.firstName} ${userInfo.lastName}`}
          style={styles.headerUsername}
        />
      </View>
      <View style={styles.rightHeaderView} />
    </Header>
  );
};
