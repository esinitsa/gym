import _ from "lodash";
import { Button, Container, Header, Left, Right } from "native-base";
import React, { PureComponent } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View
} from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { userLogOut } from "../../components/login/actions";
import {
  getUserById,
  processSubscriptionVisit
} from "../../components/personal/actions";
import { NavigationType } from "../../constants/navigationTypes";
import { EMPTY_RESPONSE } from "../../constants/profileConstants";
import SubscriptionListItem from "../common/subscriptionListItem";
import { CustomText } from "../common/text/customText";
import styles from "./styles";

class SubscriptionList extends PureComponent {
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

  goToPersonalPanel = () =>
    this.props.navigation.navigate(NavigationType.PersonalPanel);

  goToUserPreview = user => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.UserPreview, {
      user: user
    });
  };

  _keyExtractor = (item, index) => `${index}${item.id}`;

  render() {
    const user = this.props.navigation.state.params.user;
    const subscriptions = user.subscriptions;
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left style={styles.leftHeader}>
            <Transition appear="flip" disappear="flip" shared="card">
              <CustomText
                text={
                  `${_.get(user, "firstName", EMPTY_RESPONSE)}` +
                  ` ${_.get(user, "lastName", EMPTY_RESPONSE)}`
                }
                style={styles.leftHeaderText}
              />
            </Transition>
          </Left>
          <Right>
            <Button onPress={this.goToPersonalPanel} transparent>
              <CustomText style={styles.rightHeaderText} text={"Done"} />
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
                  userProfile={user}
                  subscription={subscription.item}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    this.acceptMarkVisit(subscription.item.id, user)
                  }
                >
                  <CustomText style={styles.buttonText} text={"Mark"} />
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
)(SubscriptionList);
