import _ from "lodash";
import { Card, CardItem, Left, Right } from "native-base";
import React from "react";
import {
  Modal,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { userLogOut } from "../../../components/login/actions";
import {
  homeGoToMyCalendar,
  homeGoToNotes,
  homeGoToSubscriptions
} from "../../../components/onBoarding/actions";
import { getCurrentUser } from "../../../components/personal/actions";
import { EMPTY_RESPONSE } from "../../../constants";
import { NavigationType } from "../../../constants/navigationTypes";
import { AUTO, BOX_NONE, NONE } from "../../../constants/onBoardingStates";
import { DEFAULT_COUNT_OF_NOTES } from "../../../constants/settingsConstants";
import theme from "../../../styles";
import NoteItem from "../../common/notes/listItem";
import SubscriptionItem from "../../common/subscriptions/listItem";
import { CustomText } from "../../common/text/customText";
import StepHelper from "../common/StepHelper";
import OnBoardingHomeHeader from "./components/header";
import styles from "./styles";

class OnBoardingHome extends React.PureComponent {
  state = {
    qrcodeVisible: false
  };

  componentDidMount() {
    this.props.getUserInfo();
  }

  visibleMyQRCode = () => {
    this.setState({ qrcodeVisible: !this.state.qrcodeVisible });
  };

  goTo = (screen, params) => this.props.navigation.navigate(screen, params);

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
        <CardItem style={styles.cardItem}>
          <CustomText
            style={styles.emptyListItemInfo}
            text={I18n.t("profile.emptyNotes")}
          />
        </CardItem>
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
    <View style={[styles.touchableCard, { opacity: 0 }]}>
      <Card style={styles.card}>
        <CardItem header bordered style={styles.cardItem}>
          <CustomText
            style={styles.userName}
            text={I18n.t("profile.personalInfo")}
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

  goToSubscriptions = () => {
    if (this.props.home.stepGoToSubscriptions === "none") {
      this.goTo(NavigationType.Subscriptions, {
        id: this.props.user.userProfile.id
      });
      this.props.homeGoToSubscriptions();
    }
  };

  renderSubscriptionCard = (subscriptions, userProfile) => (
    <TouchableOpacity onPress={this.goToSubscriptions}>
      <View
        style={[
          styles.touchableCard,
          { opacity: this.props.home.stepGoToSubscriptions === "none" ? 1 : 0 }
        ]}
      >
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
      {this.props.home.stepGoToSubscriptions === "none" && (
        <StepHelper text="Test" />
      )}
    </TouchableOpacity>
  );

  goToUserNotes = () => {
    if (this.props.home.stepGoToNotes === "none") {
      this.goTo(NavigationType.UserNotes, {
        id: this.props.user.userProfile.id
      });
      this.props.homeGoToNotes();
    }
  };

  renderNotesCard = userProfile => {
    const notes = _.get(userProfile, "internalRecords", EMPTY_RESPONSE);
    return (
      <TouchableOpacity onPress={this.goToUserNotes}>
        <View
          style={[
            styles.touchableCard,
            { opacity: this.props.home.stepGoToNotes === "none" ? 1 : 0 }
          ]}
        >
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
        {this.props.home.stepGoToNotes === "none" && <StepHelper text="Test" />}
      </TouchableOpacity>
    );
  };

  renderCalendarCard = () => {
    const { stepGoToMyCalendar, stepGoToMakeAnAppointment } = this.props.home;
    return (
      <View
        style={[
          styles.touchableCard,
          {
            opacity:
              stepGoToMyCalendar === NONE || stepGoToMakeAnAppointment === NONE
                ? 1
                : 0
          }
        ]}
        pointerEvents={BOX_NONE}
      >
        <Card style={styles.calendarCard} pointerEvents={BOX_NONE}>
          <CardItem header bordered style={styles.cardItem}>
            <CustomText
              text={I18n.t("profile.calendar")}
              style={styles.headlineText}
            />
          </CardItem>
          <CardItem
            bordered
            style={styles.calendarCardItem}
            pointerEvents={BOX_NONE}
          >
            <Left
              style={styles.calendarView}
              pointerEvents={stepGoToMyCalendar}
            >
              <TouchableOpacity
                style={[
                  styles.leftCalendarCardItem,
                  stepGoToMyCalendar === AUTO
                    ? {
                        backgroundColor: "rgba(0,0,0,0.3)"
                      }
                    : {}
                ]}
              >
                <CustomText
                  style={styles.calendarCardText}
                  text={I18n.t("profile.myCalendar")}
                />
              </TouchableOpacity>
            </Left>
            <Right
              style={styles.calendarView}
              pointerEvents={stepGoToMakeAnAppointment}
            >
              <TouchableOpacity
                style={[
                  styles.rightCalendarCardItem,
                  stepGoToMakeAnAppointment === AUTO
                    ? {
                        backgroundColor: "rgba(0,0,0,0.3)"
                      }
                    : {}
                ]}
              >
                <CustomText
                  style={styles.calendarCardText}
                  text={I18n.t("profile.makeAppointment")}
                />
              </TouchableOpacity>
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  };

  render() {
    const { userProfile } = this.props.user;
    return (
      <SafeAreaView pointerEvents={BOX_NONE} style={styles.container}>
        <OnBoardingHomeHeader />
        <View pointerEvents={BOX_NONE} style={styles.scrollView}>
          {this.renderUserInfoCard(this.props.userInfo)}
          {this.renderSubscriptionCard(
            _.get(userProfile, "subscriptions", EMPTY_RESPONSE),
            userProfile
          )}
          {this.renderNotesCard(userProfile)}
          <View pointerEvents={BOX_NONE}>
            {this.renderCalendarCard(userProfile)}
          </View>
        </View>
        <Modal
          animationType="fade"
          transparent
          visible={this.state.qrcodeVisible}
        >
          <TouchableWithoutFeedback>
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
        <TouchableOpacity style={styles.button} onPress={this.visibleMyQRCode}>
          <CustomText
            style={styles.buttonText}
            text={I18n.t("general.QRCode")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  home: state.onBoarding.home
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getCurrentUser()),
  onLogOut: () => dispatch(userLogOut()),
  homeGoToSubscriptions: () => dispatch(homeGoToSubscriptions()),
  homeGoToNotes: () => dispatch(homeGoToNotes()),
  homeGoToMyCalendar: () => dispatch(homeGoToMyCalendar())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnBoardingHome);
