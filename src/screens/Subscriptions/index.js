import { Card, Container } from "native-base";
import React from "react";
import { FlatList, SafeAreaView, View, StatusBar } from "react-native";
import { connect } from "react-redux";
import {
  getUserById,
  processSubscriptionVisit
} from "../../components/personal/actions";
import { reverseArray, isEqualUsers } from "../../services/filter";
import SubscriptionItem from "../common/subscriptions/listItem";
import { renderHeader } from "./components/header";
import {
  subscriptionsExtendCard,
  subscriptionGoToHome
} from "../../components/onBoarding/actions";
import OnBoardingSubscriptions from "../OnBoarding/Subscriptions";
import theme from "../../styles";
import styles from "./styles";

class Subscriptions extends React.PureComponent {
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

  acceptMarkVisit = subscriptionId =>
    this.props.markUserVisit(subscriptionId).then(res => this.getData());

  _keyExtractor = (item, index) => `${index}${item.id}`;

  renderListItem = subscription => {
    const {
      userInfo,
      currentUser,
      subscriptions: { stepExtendCard },
      onBoardingExtendCard
    } = this.props;
    return (
      <Card style={styles.card}>
        <View style={styles.listItem}>
          <SubscriptionItem
            userProfile={this.props.userInfo}
            markUserVisit={subscriptionId =>
              this.props.markUserVisit(subscriptionId)
            }
            isAdminPreview={!isEqualUsers(userInfo, currentUser)}
            subscription={subscription.item}
            withExtension
            stepExtendCard={stepExtendCard}
            onBoardingExtendCard={onBoardingExtendCard}
          />
        </View>
      </Card>
    );
  };

  renderContent = () => {
    const subscriptions = reverseArray(this.props.userInfo, "subscriptions");
    return (
      <FlatList
        data={subscriptions}
        keyExtractor={this._keyExtractor}
        renderItem={subscription => this.renderListItem(subscription)}
      />
    );
  };

  render() {
    return (
      <Container>
        {renderHeader(this.props)}
        <StatusBar
          backgroundColor={theme.colors.light}
          barStyle="dark-content"
        />
        <SafeAreaView
          style={[styles.container, { backgroundColor: "red" }]}
          behavior="padding"
        >
          {this.renderContent()}
        </SafeAreaView>
        <OnBoardingSubscriptions />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  personal: state.personal,
  currentUser: state.user.userProfile,
  userInfo: state.personal.user,
  user: state.user,
  subscriptions: state.onBoarding.subscriptions
});

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUserById(id)),
    markUserVisit: subscriptionId =>
      dispatch(processSubscriptionVisit(subscriptionId)),
    getUserInfo: id => dispatch(getUserById(id)),
    onBoardingExtendCard: () => dispatch(subscriptionsExtendCard()),
    onBoardingGoToHome: () => dispatch(subscriptionGoToHome())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscriptions);
