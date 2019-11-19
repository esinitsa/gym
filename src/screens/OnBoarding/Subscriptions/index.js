import { Card } from "native-base";
import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { connect } from "react-redux";
import {
  getUserById,
  processSubscriptionVisit
} from "../../../components/personal/actions";
import { reverseArray } from "../../../services/filter";
import SubscriptionItem from "../common/Subscriptions/listItem";
import { renderHeader } from "./components/header";
import { BOX_NONE, NONE } from "../../../constants/onBoardingStates";
import styles from "./styles";

class OnBoardingSubscriptions extends React.PureComponent {
  _keyExtractor = (item, index) => `${index}${item.id}`;

  renderListItem = subscription => {
    return (
      <Card style={styles.card}>
        <View pointerEvents={BOX_NONE} style={styles.listItem}>
          <SubscriptionItem
            userProfile={this.props.userInfo}
            markUserVisit={subscriptionId =>
              this.props.markUserVisit(subscriptionId)
            }
            isAdminPreview={false}
            subscription={subscription.item}
            stepExtendCard={NONE}
            withExtension
          />
        </View>
      </Card>
    );
  };

  renderContent = () => {
    const subscriptions = reverseArray(this.props.userInfo, "subscriptions");
    return (
      <FlatList
        pointerEvents={BOX_NONE}
        data={subscriptions}
        keyExtractor={this._keyExtractor}
        renderItem={subscription => this.renderListItem(subscription)}
      />
    );
  };

  render() {
    return (
      <View pointerEvents={BOX_NONE} style={styles.container}>
        {renderHeader(this.props)}
        <SafeAreaView pointerEvents={NONE} style={styles.safeArea}>
          {this.renderContent()}
        </SafeAreaView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  subscriptions: state.onBoarding.subscriptions,
  personal: state.personal,
  currentUser: state.user.userProfile,
  userInfo: state.personal.user,
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUserById(id)),
    markUserVisit: subscriptionId =>
      dispatch(processSubscriptionVisit(subscriptionId)),
    getUserInfo: id => dispatch(getUserById(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnBoardingSubscriptions);
