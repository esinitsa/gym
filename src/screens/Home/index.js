import _ from "lodash";
import {
  Button,
  Card,
  CardItem,
  Container,
  Header,
  Left,
  Right
} from "native-base";
import React from "react";
import {
  Alert,
  Modal,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { userLogOut } from "../../components/login/actions";
import { getCurrentUser } from "../../components/personal/actions";
import { NavigationType } from "../../constants/navigationTypes";
import { EMPTY_RESPONSE } from "../../constants/profileConstants";
import NoteItem from "../common/notes/listItem";
import SubscriptionListItem from "../common/subscriptionListItem";
import { CustomText } from "../common/text/customText";
import styles from "./styles";
import theme from "../../styles";

class Home extends React.PureComponent {
  state = {
    isClickSubscription: true,
    qrcodeVisible: false
  };

  componentDidMount() {
    this.props.getUserInfo();
  }

  visibleMyQRCode = () => {
    this.setState({ qrcodeVisible: !this.state.qrcodeVisible });
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
        { text: I18n.t("settings.logout.cancel"), style: "cancel" },
        { text: I18n.t("settings.logout.confirm"), onPress: performLogout }
      ],
      { cancelable: true }
    );
  };

  goToLogin = () => this.props.navigation.navigate(NavigationType.Login);

  checkLastVisitSubscription = (subscriptions, userProfile) => {
    const lastVisitSubscription = _.head(subscriptions);
    if (_.isNil(lastVisitSubscription)) {
      return (
        <CustomText
          style={styles.emptyListItemInfo}
          text={"На данный момент у вас нет абонементов"}
        />
      );
    }
    return (
      <View style={styles.listItem}>
        <SubscriptionListItem
          userProfile={userProfile}
          subscription={lastVisitSubscription}
        />
      </View>
    );
  };

  checkLastVisitNote = notes => {
    const preview = notes ? _.slice(notes, 0, 2) : [];
    if (!preview.length) {
      return (
        <CustomText
          style={styles.emptyListItemInfo}
          text={"На данный момент у вас нет заметок"}
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
            <CustomText style={styles.infoPlaceholder} text={"email:"} />
            <CustomText
              style={styles.streetInfo}
              text={_.get(userInfo, "email", EMPTY_RESPONSE)}
            />
          </View>
          <View style={styles.userInfoRow}>
            <CustomText style={styles.infoPlaceholder} text={"адрес:"} />
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
            text={"Текущий абонемент"}
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
            <CustomText text={"Последние заметки"} style={styles.headlineText} />
          </CardItem>
          {this.checkLastVisitNote(notes, userProfile)}
        </Card>
      </View>
    );
  };

  goToUserSubscriptionList = () => {
    this.props.navigation.navigate(NavigationType.UserSubscriptionList, {
      id: this.props.user.userProfile.id
    });
    this.setState({ isClickSubscription: true });
  };

  goToUserNotes = () => {
    this.props.navigation.navigate(NavigationType.UserNotes, {
      id: this.props.user.userProfile.id
    });
    this.setState({ isClickSubscription: false });
  };

  goToProfile = () =>
    this.props.navigation.navigate(NavigationType.Profile, {
      id: this.props.user.userProfile.id
    });

  render() {
    const { userProfile } = this.props.user;
    return (
      <Container>
        <Header style={styles.header}>
          <Left style={styles.leftHeader}>
            <CustomText
              text={`${_.get(userProfile, "firstName", EMPTY_RESPONSE)} ${_.get(
                userProfile,
                "lastName",
                EMPTY_RESPONSE
              )}`}
              style={styles.leftHeaderText}
            />
          </Left>
          <Right>
            <Button
              onPress={this.onLogOut}
              transparent
              style={styles.profileIconHeader}
            >
              <FontAwesome5
                name={"sign-out-alt"}
                color={theme.colors.actionComponent}
                size={25}
                solid
              />
            </Button>
          </Right>
        </Header>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {this.renderUserInfoCard(this.props.userInfo)}
            <TouchableOpacity onPress={this.goToUserSubscriptionList}>
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
                    value={userProfile !== null ? userProfile.id : "200"}
                    size={250}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <TouchableOpacity
            style={styles.button}
            onPress={this.visibleMyQRCode}
          >
            <CustomText style={styles.buttonText} text={"QR code"} />
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
