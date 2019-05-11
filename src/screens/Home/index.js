import _ from "lodash";
import { Card, CardItem, Container } from "native-base";
import React from "react";
import {
  Modal,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { userLogOut } from "../../components/login/actions";
import { getCurrentUser } from "../../components/personal/actions";
import { NavigationType } from "../../constants/navigationTypes";
import { EMPTY_RESPONSE } from "../../constants";
import { DEFAULT_COUNT_OF_NOTES } from "../../constants/settingsConstants";
import theme from "../../styles";
import NoteItem from "../common/notes/listItem";
import SubscriptionItem from "../common/subscriptions/listItem";
import { CustomText } from "../common/text/customText";
import { renderHeader } from "./components/header";
import styles from "./styles";

class Home extends React.PureComponent {
  state = {
    qrcodeVisible: false
  };

  componentDidMount() {
    this.props.getUserInfo();
  }

  visibleMyQRCode = () => {
    this.setState({ qrcodeVisible: !this.state.qrcodeVisible });
  };

  checkLastVisitSubscription = (subscriptions, userProfile) => {
    const lastVisitSubscription = _.last(subscriptions);
    if (_.isNil(lastVisitSubscription)) {
      return (
        <CustomText
          style={styles.emptyListItemInfo}
          text={I18n.t("profile.emptySubscriptions")}
        />
      );
    }
    return (
      <View style={styles.listItem}>
        <SubscriptionItem
          userProfile={userProfile}
          subscription={lastVisitSubscription}
        />
      </View>
    );
  };

  checkLastVisitNote = notes => {
    const preview = notes ? _.slice(notes, 0, DEFAULT_COUNT_OF_NOTES) : [];
    if (!preview.length) {
      return (
        <CustomText
          style={styles.emptyListItemInfo}
          text={I18n.t("profile.emptySubscriptions")}
        />
      );
    }

    return preview.map((it, index) => (
      <CardItem
        bordered={index !== preview.length - 1}
        key={index}
        style={styles.cardItem}
      >
        <NoteItem note={it} />
      </CardItem>
    ));
  };

  renderUserInfoCard = userInfo => (
    <View style={styles.touchableCard}>
      <Card style={styles.card}>
        <CardItem header bordered style={styles.cardItem}>
          <CustomText
            style={styles.userName}
            text={
              `${_.get(userInfo, "firstName", EMPTY_RESPONSE)} ` +
              `${_.get(userInfo, "lastName", EMPTY_RESPONSE)}`
            }
          />
        </CardItem>
        <CardItem style={styles.userInfoView}>
          <View style={styles.userInfoRow}>
            <CustomText
              style={styles.infoPlaceholder}
              text={I18n.t("profile.email")}
            />
            <CustomText
              style={styles.streetInfo}
              text={_.get(userInfo, "email", EMPTY_RESPONSE)}
            />
          </View>
          <View style={styles.userInfoRow}>
            <CustomText
              style={styles.infoPlaceholder}
              text={I18n.t("profile.address")}
            />
            <CustomText
              style={styles.streetInfo}
              text={_.get(userInfo, "locale", EMPTY_RESPONSE)}
            />
          </View>
        </CardItem>
      </Card>
    </View>
  );

  renderSubscriptionCard = (subscriptions, userProfile) => (
    <View style={styles.touchableCard}>
      <Card style={styles.card}>
        <CardItem header bordered style={styles.cardItem}>
          <CustomText
            text={I18n.t("profile.currentSubscription")}
            style={styles.headlineText}
          />
        </CardItem>
        <CardItem style={styles.cardItem}>
          {this.checkLastVisitSubscription(subscriptions, userProfile)}
        </CardItem>
      </Card>
    </View>
  );

  renderNotesCard = userProfile => {
    const notes = _.get(userProfile, "internalRecords", EMPTY_RESPONSE);
    return (
      <View style={styles.touchableCard}>
        <Card style={styles.card}>
          <CardItem header bordered style={styles.cardItem}>
            <CustomText
              text={I18n.t("profile.lastNotes")}
              style={styles.headlineText}
            />
          </CardItem>
          {this.checkLastVisitNote(notes, userProfile)}
        </Card>
      </View>
    );
  };

  goToSubscriptions = () => {
    this.props.navigation.navigate(NavigationType.Subscriptions, {
      id: this.props.user.userProfile.id
    });
  };

  goToUserNotes = () => {
    this.props.navigation.navigate(NavigationType.UserNotes, {
      id: this.props.user.userProfile.id
    });
  };

  goToProfile = () =>
    this.props.navigation.navigate(NavigationType.Profile, {
      id: this.props.user.userProfile.id
    });

  render() {
    const { userProfile } = this.props.user;
    return (
      <Container>
        {renderHeader(this.props)}
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {this.renderUserInfoCard(this.props.userInfo)}
            <TouchableOpacity onPress={this.goToSubscriptions}>
              {this.renderSubscriptionCard(
                _.get(userProfile, "subscriptions", EMPTY_RESPONSE),
                userProfile
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goToUserNotes}>
              {this.renderNotesCard(userProfile)}
            </TouchableOpacity>
          </ScrollView>
          <Modal
            animationType="fade"
            transparent
            visible={this.state.qrcodeVisible}
          >
            <TouchableWithoutFeedback onPress={this.visibleMyQRCode}>
              <View style={styles.touchableView}>
                <View style={styles.modalView}>
                  <QRCode
                    value={_.get(userProfile, "id", EMPTY_RESPONSE)}
                    size={theme.size.parameters.items}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <TouchableOpacity
            style={styles.button}
            onPress={this.visibleMyQRCode}
          >
            <CustomText
              style={styles.buttonText}
              text={I18n.t("general.QRCode")}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  userInfo: state.personal.user
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getCurrentUser()),
  onLogOut: () => dispatch(userLogOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
