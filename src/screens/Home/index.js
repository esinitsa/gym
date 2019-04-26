import _ from "lodash";
import { Button, Card, CardItem, Container, Header, Left, Right } from "native-base";
import React from "react";
import { Modal, SafeAreaView, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import FontAwesome5 from "react-native-vector-icons/EvilIcons";
import { connect } from "react-redux";
import { getCurrentUser } from "../../components/personal/actions";
import { NavigationType } from "../../constants/navigationTypes";
import NoteItem from '../common/notes/listItem';
import SubscriptionListItem from "../common/subscriptionListItem";
import { CustomText } from "../common/text/customText";
import styles from "./styles";

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

  checkLastVisitSubscription = (subscriptions, userProfile) => {
    const lastVisitSubscription = _.head(subscriptions);
    if (_.isNil(lastVisitSubscription)) {
      return (
        <CustomText
          style={{ fontSize: 20, color: 'grey', textAlign: 'center', paddingHorizontal: 15, paddingVertical: 20 }}
          text={"На данный момент у вас нет абонементов"} />
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
    const preview = notes ? _.slice(notes, 0, 3) : [];
    if (!preview.length) {
      return (
        <CustomText
          style={{ fontSize: 20, color: 'grey', textAlign: 'center', paddingHorizontal: 15, paddingVertical: 20 }}
          text={"На данный момент у вас нет заметок"} />
      );
    }

    return preview.map((it, index) => (
      <CardItem bordered={index !== preview.length - 1} key={index} style={{ width: '100%' }}>
        <NoteItem note={it} />
      </CardItem>
    ));
  };

  renderSubscriptionCard = (subscriptions, userProfile) => (
    <View style={styles.touchableCard}>
      <View style={styles.transitionView}>
        <Card style={styles.card}>
          <CardItem header bordered style={{ width: '100%' }}>
            <CustomText text={"Текущий абонемент"} style={styles.subscriptionText} />
          </CardItem>
          <CardItem style={{ width: '100%' }}>
            {this.checkLastVisitSubscription(subscriptions, userProfile)}
          </CardItem>
        </Card>
      </View>
    </View>
  );

  renderNotesCard = userProfile => {
    const notes = userProfile.internalRecords;
    return (
      <View style={styles.touchableCard}>
        <Card style={{ ...styles.card }}>
          <CardItem header bordered style={{ width: '100%' }}>
            <CustomText text={"Последние заметки"} style={{ fontSize: 26 }} />
          </CardItem>
          {this.checkLastVisitNote(notes, userProfile)}
        </Card>
      </View >
    );
  }

  goToUserSubscriptionList = () => {
    this.props.navigation.navigate(NavigationType.UserSubscriptionList);
    this.setState({ isClickSubscription: true });
  };

  goToUserNotes = () => {
    this.props.navigation.navigate(NavigationType.UserNotes, { user: this.props.user });
    this.setState({ isClickSubscription: false });
  };

  goToProfile = () => this.props.navigation.navigate(NavigationType.Profile);

  render() {
    const { userProfile } = this.props.user;
    return (
      <Container>
        <Header style={styles.header}>
          <Left style={styles.leftHeader}>
            <CustomText text={`${userProfile.firstName} ${userProfile.lastName}`} style={styles.leftHeaderText} />
          </Left>
          <Right>
            <Button
              onPress={this.goToProfile}
              transparent
              style={styles.profileIconHeader}
            >
              <FontAwesome5 name={"user"} color="#007bff" size={40} solid />
            </Button>
          </Right>
        </Header>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <TouchableWithoutFeedback onPress={this.goToUserSubscriptionList}>
              {this.renderSubscriptionCard(
                userProfile.subscriptions,
                userProfile
              )}
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.goToUserNotes}>
              {this.renderNotesCard(userProfile)}
            </TouchableWithoutFeedback>
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
          <TouchableOpacity style={styles.button} onPress={this.visibleMyQRCode}>
            <CustomText style={styles.buttonText} text={"QR code"} />
          </TouchableOpacity>
        </SafeAreaView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getCurrentUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
