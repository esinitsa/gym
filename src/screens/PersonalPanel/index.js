import _ from "lodash";
import { Body, Button, Footer, FooterTab, Header, Left, Right, Title } from "native-base";
import React, { PureComponent } from "react";
import { Alert, FlatList, KeyboardAvoidingView, Modal, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import QRCodeScanner from "react-native-qrcode-scanner";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { userLogOut } from "../../components/login/actions";
import { getAllClients,
  getMyClients,
  getUserById,
  processSubscriptionVisit,
  tokenTest
 } from "../../components/personal/actions";
import { GRADIENT_COLORS } from "../../constants/cssConstants";
import { NavigationType } from "../../constants/navigationTypes";
import { contains } from "../../services/search";
import ScanMarker from "../common/scanMarker/index";
import SearchBar from "../common/searchBar/index";
import styles from "./styles";

class PersonalPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      qrcodeVisible: false,
      clients: [],
      personalClients: [{firstName: "Pasha"},{firstName: "Pablo"},{firstName: "Emilio"},{firstName: "Escobar"}],
      searchText: "",
    };
  }

  componentDidMount () {
    this.props.getAllClients()
    .catch( () => {
      //this.props.getAllClients();
      //this.onLogOut();
    }
      );
  }

  onSuccess = scanData => {
    this.props.getUser(scanData.data).then( data => {
      this.props.markUserVisit(data.subscriptions[0].id).then( (res) =>
        this.goToUserPreview(res.user)
      );
    });
  };

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
        { text: I18n.t("settings.logout.cancelButtonCaption"), style: "cancel" },
        { text: I18n.t("settings.logout.confirmButtonCaption"), onPress: performLogout },
      ],
      { cancelable: true }
    );
  }

  goToLogin = () => this.props.navigation.navigate(NavigationType.Login)

  goToUserPreview = user => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.UserPreview, {
      user: user,
    });
  };

  _keyExtractor = (item, index) => `${index}${item.id}`;

  handleInput = _.debounce((text) => {
   this.setState({
     searchText: text
   });
  }, 300);

  render() {
    const { clients } = this.props.personal;
    return (
      <LinearGradient
        colors={GRADIENT_COLORS}
        style={styles.linearGradient}
      >
        <Header >
          <Left/>
         <Body>
         <Title>
           <Text>
             Admin
           </Text>
         </Title>
          </Body>
          <Right>
            <Button onPress={this.changeQRState} transparent
            style={styles.qrScanRightHeader}>
              <MaterialIcons name={"qrcode-scan"} size={25} solid />
            </Button>
            <Button onPress={this.onLogOut} transparent style={styles.signOutRightHeader}>
              <FontAwesome5 name={"sign-out-alt"} size={25} solid />
            </Button>
          </Right>
        </Header>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
        <FlatList
            data={_.filter(clients, client => contains(client, this.state.searchText.toLowerCase()))}
            keyExtractor={this._keyExtractor}
            renderItem={(client, index) => (
              <TouchableOpacity onPress={ () => this.goToUserPreview(client.item)}>
                <View style={styles.listItem}>
                  <Text style={styles.listText}>{`${client.item.firstName} ${client.item.lastName}`}</Text>
                  <Text style={styles.listText}>{`${client.item.email}`}</Text>
                </View>
              </TouchableOpacity>
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
                customMarker={
                  <ScanMarker />
                }
                bottomContent={
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.changeQRState}
                  >
                    <Text style={styles.buttonText}>Close QR-scan</Text>
                  </TouchableOpacity>
                }
              />
            </View>
          </Modal>
        <Footer style={styles.footer}>
              <FooterTab >
                <SearchBar handleInput={this.handleInput}/>
              </FooterTab>
          </Footer>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}
const mapStateToProps = state => ({
  personal: state.personal,
  user: state.user,
});

const  mapDispatchToProps = dispatch => {
  return {
    getMyClients: () => dispatch(getMyClients()),
    getAllClients: () => dispatch(getAllClients()),
    getUser: id => dispatch(getUserById(id)),
    onLogOut: () => dispatch(userLogOut()),
    markUserVisit: subscriptionId => dispatch(processSubscriptionVisit(subscriptionId)),
    tokenTest: (auth) => dispatch(tokenTest(auth)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalPanel);

