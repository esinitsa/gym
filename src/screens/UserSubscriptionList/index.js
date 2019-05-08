import { get } from "lodash";
import { Card, Container } from "native-base";
import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { connect } from "react-redux";
import {
  getUserById,
  processSubscriptionVisit
} from "../../components/personal/actions";
import { NavigationType } from "../../constants/navigationTypes";
import SubscriptionListItem from "../common/subscriptionListItem";
import { renderHeader } from "./components/header";
import styles from "./styles";

class UserSubscriptionList extends React.PureComponent {
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
      : this.props.navigation.navigate(NavigationType.Profile, {
          id: this.props.userInfo.id
        });
  };

  acceptMarkVisit = subscriptionId =>
    this.props.markUserVisit(subscriptionId).then(res => this.getData());

  goToProfile = () =>
    this.props.navigation.navigate(NavigationType.Profile, {
      id: this.props.userInfo.id
    });

  _keyExtractor = (item, index) => `${index}${item.id}`;

  renderListItem = subscription => {
    const { userInfo } = this.props;
    const { currentUser } = this.props;
    return (
      <Card style={styles.card}>
        <View style={styles.listItem}>
          <SubscriptionListItem
            userProfile={this.props.userInfo}
            markUserVisit={subscriptionId =>
              this.props.markUserVisit(subscriptionId)
            }
            isAdminPreview={
              get(userInfo, "id", 0) !== get(currentUser, "id", 1)
            }
            subscription={subscription.item}
            withExtension
          />
        </View>
      </Card>
    );
  };

  renderContent = () => {
    const subscriptions = get(this.props.userInfo, "subscriptions", []);
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
)(UserSubscriptionList);
