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
    const { userInfo } = this.props;
    const { currentUser } = this.props;
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
        <StatusBar backgroundColor={theme.colors.light} barStyle="dark-content" />
        <SafeAreaView style={styles.container} behavior="padding">
          {this.renderContent()}
        </SafeAreaView>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
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
)(Subscriptions);
