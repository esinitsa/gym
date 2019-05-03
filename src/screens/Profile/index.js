import _ from "lodash";
import { CardItem, Container, Content, View } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Alert, SafeAreaView, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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
    _.get(this.props.userInfo, "id", 0) ===
    _.get(this.props.currentUser, "id", 1)
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

  renderContent = () => {
    const { userInfo } = this.props;
    return (
      <Content style={styles.content}>
        <View style={styles.userInfoView}>
          <CustomText
            style={styles.userName}
            text={
              `${_.get(userInfo, "firstName", EMPTY_RESPONSE)} ` +
              `${_.get(userInfo, "lastName", EMPTY_RESPONSE)}`
            }
          />
          <CustomText
            style={styles.emailText}
            text={_.get(userInfo, "email", EMPTY_RESPONSE)}
          />
          <View style={styles.addressRowView}>
            <CustomText style={styles.infoPlaceholder} text={"адрес:"} />
            <CustomText
              style={styles.streetInfo}
              text={_.get(userInfo, "locale", EMPTY_RESPONSE)}
            />
          </View>
        </View>

        <View style={styles.infoView}>
          <CustomText style={styles.notesText} text={"Абонементы"} />
          <View style={styles.rightArrowView}>
            <TouchableOpacity onPress={this.goToUserSubscriptionList}>
              <Icon
                name={"right"}
                color={theme.colors.actionComponent}
                size={25}
                solid
                style={styles.rightArrowIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infoView}>
          <CustomText style={styles.notesText} text={"Заметки"} />
          <View style={styles.rightArrowView}>
            <TouchableOpacity onPress={this.goToUserNotes}>
              <Icon
                name={"right"}
                color={theme.colors.actionComponent}
                size={25}
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
