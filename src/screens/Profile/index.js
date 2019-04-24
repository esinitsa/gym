import _ from "lodash";
import {
  Body,
  Button,
  CardItem,
  Container,
  Header,
  Left,
  Right,
  Title,
  View
} from "native-base";
import React from "react";
import { Alert, SafeAreaView, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { userLogOut } from "../../components/login/actions";
import { NavigationType } from "../../constants/navigationTypes";
import {
  COUNT,
  DATE_TYPE,
  DEFAULT_COUNT,
  EMPTY_RESPONSE,
  TERM
} from "../../constants/profileConstants";
import { CustomText } from "../common/text/customText";
import styles from "./styles";

class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      qrcodeVisible: false
    };
  }

  goToHome = () => this.props.navigation.navigate(NavigationType.Home);

  goToLogin = () => this.props.navigation.navigate(NavigationType.Login);

  onLogOut = () => {
    const performLogout = () => {
      this.props.onLogOut();
      this.goToLogin();
    };
    Alert.alert(
      I18n.t("settings.logout.header"),
      I18n.t("settings.logout.description"),
      [
        { text: I18n.t("settings.logout.cancel"), style: "cancel" },
        { text: I18n.t("settings.logout.confirm"), onPress: performLogout }
      ],
      { cancelable: true }
    );
  };
  renderCardItem = (user, prop, iconName) => (
    <CardItem style={styles.cardItem}>
      <MaterialCommunityIcons
        name={iconName}
        style={{ color: "#DCDCDC", marginRight: 10 }}
        size={20}
        solid
      />
      <CustomText
        style={styles.cardText}
        text={_.get(user, `${prop}`, I18n.t(`login.placeholders.${prop}`))}
      />
    </CardItem>
  );

  checkSubscriptionVisits = (user, prop) => {
    const type = _.get(user, `${prop}`, EMPTY_RESPONSE);
    if (type === COUNT) {
      const countInitial = _.get(
        user,
        `subscriptions[${this.state.subscriptionNumber}].countInitial`,
        EMPTY_RESPONSE
      );
      const countLeft = _.get(
        user,
        `subscriptions[${this.state.subscriptionNumber}].countLeft`,
        countInitial
      );
      return `${countLeft}/${countInitial}`;
    } else if (type === TERM) {
      return this.checkDate(
        user,
        `subscriptions[${this.state.subscriptionNumber}].validTill`
      );
    }
    return DEFAULT_COUNT;
  };

  checkSubscriptionType = (user, prop) => {
    const type = _.get(user, `${prop}`, EMPTY_RESPONSE);
    if (type === COUNT) {
      return I18n.t("profile.numberOfVisits");
    } else if (type === TERM) {
      return I18n.t("profile.validTill");
    }
    return I18n.t("profile.numberOfVisits");
  };

  checkDate = (user, prop) => {
    const date = _.get(user, prop, EMPTY_RESPONSE);
    if (date === EMPTY_RESPONSE) {
      return EMPTY_RESPONSE;
    } else {
      return new Date(date).toLocaleDateString(DATE_TYPE);
    }
  };

  render() {
    const { userProfile } = this.props.user;
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>
              <CustomText text={"Account"} />
            </Title>
          </Body>
          <Right>
            <Button onPress={this.goToHome} transparent>
              <CustomText style={styles.rightHeaderText} text={"Done"} />
            </Button>
          </Right>
        </Header>
        <SafeAreaView style={{ backgroundColor: "#f5f4f5", flex: 1 }}>
          <View style={styles.infoView}>
            <CustomText
              style={styles.userInfoText}
              text={
                `${_.get(userProfile, "firstName", EMPTY_RESPONSE)} ` +
                `${_.get(userProfile, "lastName", EMPTY_RESPONSE)}`
              }
            />
            <CustomText
              style={styles.emailText}
              text={_.get(userProfile, "email", EMPTY_RESPONSE)}
            />
          </View>
          <View style={styles.infoView}>
            <CustomText
              style={styles.userInfoText}
              text={_.get(userProfile, "locale", EMPTY_RESPONSE)}
            />
          </View>
          <View style={styles.infoView}>
            <CustomText style={styles.userInfoText} text={"Settings"} />
          </View>
          <View style={styles.infoView}>
            <TouchableOpacity onPress={this.onLogOut}>
              <CustomText style={styles.signOutText} text={"Sign Out"} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(userLogOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
