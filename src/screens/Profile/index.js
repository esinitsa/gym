import { get } from "lodash";
import { Container, Content, View } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Alert, SafeAreaView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { userLogOut } from "../../components/login/actions";
import { renderHeader } from "./components/header";
import { getUserById } from "../../components/personal/actions";
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
import theme from "../../styles";

class Profile extends React.PureComponent {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { getUserInfo, navigation } = this.props;
    const id = navigation.getParam("id");
    if (!id) {
      navigation.goBack();
    }
    getUserInfo(id);
  };

  goToHome = () => {
    get(this.props.userInfo, "id", 0) === get(this.props.currentUser, "id", 1)
      ? this.props.navigation.navigate(NavigationType.Home)
      : this.props.navigation.navigate(NavigationType.PersonalPanel);
  };

  goToLogin = () => this.props.navigation.navigate(NavigationType.Login);

  goToUserSubscriptionList = () =>
    this.props.navigation.navigate(NavigationType.UserSubscriptionList, {
      id: this.props.userInfo.id
    });

  goToUserNotes = () =>
    this.props.navigation.navigate(NavigationType.UserNotes, {
      id: this.props.userInfo.id
    });

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

  checkSubscriptionVisits = (user, prop) => {
    const type = get(user, `${prop}`, EMPTY_RESPONSE);
    if (type === COUNT) {
      const countInitial = get(
        user,
        `subscriptions[${this.state.subscriptionNumber}].countInitial`,
        EMPTY_RESPONSE
      );
      const countLeft = get(
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
    const type = get(user, `${prop}`, EMPTY_RESPONSE);
    const key = type === COUNT ? "profile.numberOfVisits" :   "profile.validTill";
    return I18n.t(key);
  };

  checkDate = (user, prop) => {
    const date = get(user, prop, EMPTY_RESPONSE);
    if (date === EMPTY_RESPONSE) {
      return EMPTY_RESPONSE;
    } else {
      return new Date(date).toLocaleDateString(DATE_TYPE);
    }
  };

  renderContent = () => {
    const { userInfo } = this.props;
    return (
      <Content style={styles.content}>
        <View style={styles.userInfoView}>
          <CustomText
            style={styles.userName}
            text={
              `${get(userInfo, "firstName", EMPTY_RESPONSE)} ` +
              `${get(userInfo, "lastName", EMPTY_RESPONSE)}`
            }
          />
          <CustomText
            style={styles.emailText}
            text={get(userInfo, "email", EMPTY_RESPONSE)}
          />
          <View style={styles.addressRowView}>
            <CustomText
              style={styles.infoPlaceholder}
              text={I18n.t("profile.address")}
            />
            <CustomText
              style={styles.streetInfo}
              text={get(userInfo, "locale", EMPTY_RESPONSE)}
            />
          </View>
        </View>
        <View style={styles.infoView}>
          <CustomText
            style={styles.notesText}
            text={I18n.t("header.subscriptions")}
          />
          <View style={styles.rightArrowView}>
            <TouchableOpacity onPress={this.goToUserSubscriptionList}>
              <Icon
                name={"right"}
                color={theme.colors.primary}
                size={theme.size.icons.small}
                solid
                style={styles.rightArrowIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infoView}>
          <CustomText style={styles.notesText} text={I18n.t("header.notes")} />
          <View style={styles.rightArrowView}>
            <TouchableOpacity onPress={this.goToUserNotes}>
              <Icon
                name={"right"}
                color={theme.colors.primary}
                size={theme.size.icons.small}
                solid
                style={styles.rightArrowIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    );
  };

  render() {
    return (
      <Container>
        {renderHeader(this.props)}
        <SafeAreaView style={styles.container}>
          {this.renderContent()}
        </SafeAreaView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.user.userProfile,
  userInfo: state.personal.user
});

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(userLogOut()),
    getUserInfo: id => dispatch(getUserById(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
