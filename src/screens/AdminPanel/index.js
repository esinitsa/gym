import _ from "lodash";
import { Container } from "native-base";
import React, { PureComponent } from "react";
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { refreshToken, userLogOut } from "../../components/login/actions";
import {
  addInternalRecord,
  getMyClients,
  getUserById,
  processSubscriptionVisit,
  getUsersByRole,
  makeAppointment
} from "../../components/personal/actions";
import { NavigationType } from "../../constants/navigationTypes";
import { contains } from "../../services/search";
import { showToast } from "../../services/UIActions";
import ScanMarker from "../common/scanMarker/index";
import SearchBar from "../common/searchBar/index";
import UserItem from "../common/users/listItem";
import { renderHeader } from "./components/header";
import theme from "../../styles";
import styles from "./styles";

class AdminPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      qrcodeVisible: false,
      clients: [],
      searchText: ""
    };
  }

  componentDidMount() {
    this.props.getUsersByRole("CLIENT");
  }

  onSuccess = scanData => this.props.getUser(scanData.data)
      .then(data => this.goToUserProfile(data))
      .catch(() => showToast(I18n.t("general.noSuchUser")));

  changeQRState = () => {
    this.setState({
      qrcodeVisible: !this.state.qrcodeVisible
    });
  };


  addInternal = (recordBody, targetUserId) => {
    const internalRecord = {
      authorRole: "DOCTOR",
      recordBody,
      targetUserId
    };
    const performLogout = () => this.props.addInternalRecord(internalRecord);
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

  goTo = (screen, params) => this.props.navigation.navigate(screen, params);

  goToSubscriptionList = user => this.goTo(NavigationType.SubscriptionList, {user});

  goToUserProfile = user => this.goTo(NavigationType.Profile, {id: user.id});

  _keyExtractor = (item, index) => `${index}${item.id}`;

  handleInput = _.debounce(text => {
    this.setState({
      searchText: text
    });
  }, 1000);

  render() {
    const { usersByRole } = this.props.personal;
    return (
      <Container style={styles.linearGradient}>
        {renderHeader(this.props, this.changeQRState)}
        <StatusBar backgroundColor={theme.colors.light} barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView style={styles.keyboardView} behavior="padding">
            <SearchBar handleInput={this.handleInput} />
            <FlatList
              data={_.filter(usersByRole, client =>
                contains(client, this.state.searchText.toLowerCase())
              )}
              keyExtractor={this._keyExtractor}
              renderItem={(client, index) => (
                <View style={styles.listItem}>
                  <TouchableOpacity
                    onPress={() => this.goToUserProfile(client.item)}
                  >
                    <UserItem user={client.item} />
                  </TouchableOpacity>
                </View>
              )}
            />
            <Modal
              animationType={"fade"}
              transparent={true}
              visible={this.state.qrcodeVisible}
            >
              <View style={styles.modalView}>
                <QRCodeScanner
                  onRead={this.onSuccess}
                  cameraProps={{ captureAudio: false }}
                  showMarker={true}
                  customMarker={<ScanMarker />}
                  topContent={
                    <TouchableOpacity
                      style={styles.qrScannerContent}
                      onPress={this.changeQRState}
                    />
                  }
                  bottomContent={
                    <TouchableOpacity
                      style={styles.qrScannerContent}
                      onPress={this.changeQRState}
                    />
                  }
                />
              </View>
            </Modal>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  personal: state.personal,
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    getMyClients: () => dispatch(getMyClients()),
    getUsersByRole: role => dispatch(getUsersByRole(role)),
    makeAppointment: appointmentBody => dispatch(makeAppointment(appointmentBody)),
    getUser: id => dispatch(getUserById(id)),
    onLogOut: () => dispatch(userLogOut()),
    markUserVisit: subscriptionId =>
      dispatch(processSubscriptionVisit(subscriptionId)),
    refreshToken: auth => dispatch(refreshToken(auth)),
    addInternalRecord: internalRecord =>
      dispatch(addInternalRecord(internalRecord))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel);
