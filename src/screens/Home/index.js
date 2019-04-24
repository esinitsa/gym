import { Card } from "native-base";
import React from "react";
import {
  Modal,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Transition } from "react-navigation-fluid-transitions";
import { connect } from "react-redux";
import { userLogOut } from "../../components/login/actions";
import { NavigationType } from "../../constants/navigationTypes";
import { CustomText } from "../common/text/customText";
import SubscriptionListItem from "../common/subscriptionListItem";
import _ from "lodash";
import styles from "./styles";

class Home extends React.PureComponent {
  state = {
    isClickSubscription: true,
    qrcodeVisible: false
  };

  visibleMyQRCode = () => {
    this.setState({
      qrcodeVisible: !this.state.qrcodeVisible
    });
  };

  checkLastVisitSubscription = (subscriptions, userProfile) => {
    const lastVisitSubscription = _.head(subscriptions);
    if (_.isNil(lastVisitSubscription)) {
      return <CustomText style={{ fontSize: 30 }} text={"EMPTY"} />;
    } else {
      return (
        <View style={styles.listItem}>
          <SubscriptionListItem
            userProfile={userProfile}
            subscription={lastVisitSubscription}
          />
        </View>
      );
    }
  };

  renderSubscriptionCard = (subscriptions, userProfile) => (
    <View style={styles.touchableCard}>
      {this.state.isClickSubscription ? (
        <View style={styles.transitionView}>
          <Transition
            appear={myCustomTransitionFunction}
            disappear={myCustomTransitionFunction}
          >
            <Card style={styles.card}>
              <CustomText text={"Подписки"} style={styles.subscriptionText} />
              {this.checkLastVisitSubscription(subscriptions, userProfile)}
            </Card>
          </Transition>
        </View>
      ) : (
        <Card style={styles.card}>
          <CustomText text={"Подписки"} style={styles.subscriptionText} />
          {this.checkLastVisitSubscription(subscriptions, userProfile)}
        </Card>
      )}
    </View>
  );

  renderNotesCard = () => (
    <View style={styles.touchableCard}>
      {this.state.isClickSubscription ? (
        <Card style={styles.card}>
          <CustomText text={"Заметки"} style={{ fontSize: 30 }} />
        </Card>
      ) : (
        <View style={styles.transitionView}>
          <Transition appear="flip" disappear="flip">
            <Card style={styles.card}>
              <CustomText text={"Заметки"} style={{ fontSize: 30 }} />
            </Card>
          </Transition>
        </View>
      )}
    </View>
  );

  goToUserSubscriptionList = () => {
    this.props.navigation.navigate(NavigationType.UserSubscriptionList);
    this.setState({ isClickSubscription: true });
  };
  s;
  goToUserNotes = () => {
    this.props.navigation.navigate(NavigationType.UserSubscriptionList);
    this.setState({ isClickSubscription: false });
  };

  render() {
    const { userProfile } = this.props.user;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableWithoutFeedback onPress={this.goToUserSubscriptionList}>
            {this.renderSubscriptionCard(
              userProfile.subscriptions,
              userProfile
            )}
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.goToUserNotes}>
            {this.renderNotesCard()}
          </TouchableWithoutFeedback>
        </View>
        <Modal
          animationType="fade"
          transparent
          visible={this.state.qrcodeVisible}
        >
          <TouchableWithoutFeedback onPress={this.visibleMyQRCode}>
            <View style={styles.touchableView}>
              <View style={styles.modalView}>
                <QRCode
                  value={userProfile !== null ? userProfile.id : "200"}
                  size={250}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={this.visibleMyQRCode}>
          <CustomText style={styles.buttonText} text={"My QR-code"} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const myCustomTransitionFunction = transitionInfo => {
  const { progress, start, end } = transitionInfo;
  const scaleInterpolation = progress.interpolate({
    inputRange: [0, start, end, 1],
    outputRange: [2, 2, 1, 1]
  });
  return { transform: [{ scale: scaleInterpolation }] };
};

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
)(Home);
