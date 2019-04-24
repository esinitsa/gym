/* eslint-disable no-console */
import _ from "lodash";
import {
  Button,
  Container,
  Footer,
  FooterTab,
  Header,
  Left,
  Right
} from "native-base";
import React, { PureComponent } from "react";
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  View
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { refreshToken, userLogOut } from "../../components/login/actions";
import {
  getAllClients,
  getMyClients,
  getUserById,
  processSubscriptionVisit,
  addInternalRecord
} from "../../components/personal/actions";
import { NavigationType } from "../../constants/navigationTypes";
import { contains } from "../../services/search";
import ScanMarker from "../common/scanMarker/index";
import SearchBar from "../common/searchBar/index";
import { CustomText } from "../common/text/customText";
import UsersListItem from "../common/usersListItem";
import styles from "./styles";

class PersonalPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      qrcodeVisible: false,
      clients: [],
      searchText: ""
    };
  }

  componentDidMount() {
    this.props.getAllClients().catch(error => console.log(error));
  }

  onSuccess = scanData =>
    this.props
      .getUser(scanData.data)
      .then(data => this.goToSubscriptionList(data));

  changeQRState = () => {
    this.setState({
      qrcodeVisible: !this.state.qrcodeVisible
    });
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

  addInternal = (recordBody, targetUserId) => {
    const internalRecord = {
      authorRole: "DOCTOR",
      recordBody,
      targetUserId
    };
    const performLogout = () => {
      this.props.addInternalRecord(internalRecord);
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

  goToSubscriptionList = user => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.SubscriptionList, {
      user
    });
  };

  goToUserPreview = user => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.UserPreview, {
      user
    });
  };

  _keyExtractor = (item, index) => `${index}${item.id}`;

  handleInput = _.debounce(text => {
    this.setState({
      searchText: text
    });
  }, 300);

  render() {
    const { clients } = this.props.personal;
    return (
      <Container style={styles.linearGradient}>
        <Header style={styles.header}>
          <Left style={styles.leftHeader}>
            <CustomText style={styles.leftHeaderText} text={"Admin"} />
          </Left>
          <Right>
            <Button
              onPress={this.changeQRState}
              transparent
              style={styles.qrScanRightHeader}
            >
              <MaterialIcons
                name={"qrcode-scan"}
                color="#007bff"
                size={25}
                solid
              />
            </Button>
            <Button
              onPress={this.onLogOut}
              transparent
              style={styles.signOutRightHeader}
            >
              <FontAwesome5
                name={"sign-out-alt"}
                color="#007bff"
                size={25}
                solid
              />
            </Button>
          </Right>
        </Header>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <FlatList
            data={_.filter(clients, client =>
              contains(client, this.state.searchText.toLowerCase())
            )}
            keyExtractor={this._keyExtractor}
            renderItem={(client, index) => (
              <View style={styles.listItem}>
                <UsersListItem user={client.item} />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.goToUserPreview(client.item)}
                >
                  <CustomText style={styles.buttonText} text={"Open"} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    this.addInternal("SECONDATTEMP", client.item.id)
                  }
                >
                  <CustomText style={styles.buttonText} text={"Record"} />
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
          <Footer style={styles.footer}>
            <FooterTab>
              <SearchBar handleInput={this.handleInput} />
            </FooterTab>
          </Footer>
        </KeyboardAvoidingView>
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
    getAllClients: () => dispatch(getAllClients()),
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
)(PersonalPanel);
