import {
  Button,
  Container,
  Header,
  Left,
  Right,
  Card,
  Body
} from "native-base";
import React from "react";
import { Alert, FlatList, SafeAreaView, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Transition } from "react-navigation-fluid-transitions";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { userLogOut } from "../../components/login/actions";
import {
  getUserById,
  processSubscriptionVisit
} from "../../components/personal/actions";
import { NavigationType } from "../../constants/navigationTypes";
import SubscriptionListItem from "../common/subscriptionListItem";
import { CustomText } from "../common/text/customText";
import _ from "lodash";
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

  goToHome = () => {
    _.get(this.props.userInfo, "id", 0) === _.get(this.props.currentUser, "id", 1)
    ? this.props.navigation.navigate(NavigationType.Home)
    : this.props.navigation.navigate(NavigationType.Profile, {
      id: this.props.userInfo.id
    });
  }

  goToUserPreview = user => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.UserPreview, {
      user: user
    });
  };

  acceptMarkVisit = subscriptionId =>
    this.props.markUserVisit(subscriptionId).then(res => this.getData());

  goToProfile = () =>
    this.props.navigation.navigate(NavigationType.Profile, {
      id: this.props.userInfo.id
    });

  _keyExtractor = (item, index) => `${index}${item.id}`;
  renderHeader = () => (
    <Header style={styles.header}>
      <Left style={styles.leftHeader}>
        <Button
              onPress={this.goToHome}
              transparent
              style={styles.profileIconHeader}
            >
              <Icon
                name={"left"}
                color="#007bff"
                size={25}
                solid
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  marginLeft: 10
                }}
              />
            </Button>
      </Left>
      <Body>
        <CustomText text={"Абонементы"} style={styles.bodyHeaderText} />
        <CustomText
          text={`${this.props.userInfo.firstName} ${this.props.userInfo.lastName}`}
          style={{ fontSize: 14, color: "grey" }}
        />
      </Body>
      <Right/>
    </Header>
  );
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
              _.get(userInfo, "id", 0) !== _.get(currentUser, "id", 1)
            }
            subscription={subscription.item}
            withExtension
          />
        </View>
      </Card>
    );
  };

  renderContent = () => {
    const subscriptions = _.get(this.props.userInfo, "subscriptions", []);
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
        {this.renderHeader()}
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
    onLogOut: () => dispatch(userLogOut()),
    markUserVisit: subscriptionId =>
      dispatch(processSubscriptionVisit(subscriptionId)),
    getUserInfo: id => dispatch(getUserById(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSubscriptionList);
