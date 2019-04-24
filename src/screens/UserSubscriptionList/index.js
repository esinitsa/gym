import { Button, Container, Header, Left, Right } from "native-base";
import React from "react";
import { Alert, FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/EvilIcons";
import { Transition } from "react-navigation-fluid-transitions";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { userLogOut } from "../../components/login/actions";
import { getUserById, processSubscriptionVisit } from "../../components/personal/actions";
import { NavigationType } from "../../constants/navigationTypes";
import SubscriptionListItem from "../common/subscriptionListItem";
import { CustomText } from "../common/text/customText";
import styles from "./styles";

class UserSubscriptionList extends React.Component {
  onLogOut = () => {
    const performLogout = () => {
      this.props.onLogOut();
      this.goToLogin();
    };
    Alert.alert(
      I18n.t("settings.logout.header"),
      I18n.t("settings.logout.description"),
      [
        {
          text: I18n.t("settings.logout.cancel"),
          style: "cancel"
        },
        {
          text: I18n.t("settings.logout.confirm"),
          onPress: performLogout
        }
      ],
      { cancelable: true }
    );
  };

  goToLogin = () => this.props.navigation.navigate(NavigationType.Login);

  goToUserPreview = user => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.UserPreview, {
      user: user
    });
  };

  acceptMarkVisit = (subscriptionId, user) => {
    const performMarkVisit = () => {
      this.props.markUserVisit(subscriptionId);
    };
    Alert.alert(
      I18n.t("mark.header"),
      I18n.t("mark.description"),
      [
        {
          text: I18n.t("mark.cancel"),
          style: "cancel"
        },
        {
          text: I18n.t("mark.confirm"),
          onPress: performMarkVisit
        }
      ],
      { cancelable: true }
    );
  };

  goToProfile = () => this.props.navigation.navigate(NavigationType.Profile);

  _keyExtractor = (item, index) => `${index}${item.id}`;

  render() {
    const { userProfile } = this.props.user;
    const subscriptions = userProfile.subscriptions;
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left style={styles.leftHeader}>
            <Transition appear="flip" disappear="flip" shared="card">
              <CustomText text={"Подписки"} style={styles.leftHeaderText} />
            </Transition>
          </Left>
          <Right>
            <Button
              onPress={this.goToProfile}
              transparent
              style={styles.profileIconHeader}
            >
              <FontAwesome5 name={"user"} color="#007bff" size={40} solid />
            </Button>
          </Right>
        </Header>

        <SafeAreaView style={styles.container} behavior="padding">
          <FlatList
            data={subscriptions}
            keyExtractor={this._keyExtractor}
            renderItem={(subscription, index) => (
              <View style={styles.listItem}>
                <SubscriptionListItem
                  userProfile={userProfile}
                  subscription={subscription.item}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    this.acceptMarkVisit(subscription.item.id, userProfile)
                  }
                >
                  <CustomText style={styles.buttonText} text={"Open"} />
                </TouchableOpacity>
              </View>
            )}
          />
        </SafeAreaView>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  personal: state.personal,
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUserById(id)),
    onLogOut: () => dispatch(userLogOut()),
    markUserVisit: subscriptionId =>
      dispatch(processSubscriptionVisit(subscriptionId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSubscriptionList);
