import React, { PureComponent } from "react";
import { Header, Button, Title, Right, Left, Body, Footer, FooterTab,} from "native-base";
import {
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal,
  FlatList,
  View,
  Alert,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import { I18n } from "react-redux-i18n";
import { connect } from "react-redux";
import { NavigationType } from "../../constants/navigationTypes";
import { getClients, getUserById } from "../../components/personal/actions";
import { userLogOut } from "../../components/login/actions";
import QRCodeScanner from "react-native-qrcode-scanner";
import SearchBar from "../common/searchBar/index";
import { contains } from "../../services/search";
import ScanMarker from "../common/scanMarker/index";
import { GRADIENT_COLORS } from "../../constants/cssConstants";
import styles from "./styles";
import _ from "lodash";

class PersonalPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      qrcodeVisible: false,
      clients: [{firstName: "Pasha"},{firstName: "Pablo"},{firstName: "Emilio"},{firstName: "Escobar"}],
      personalClients: [{firstName: "Pasha"},{firstName: "Pablo"},{firstName: "Emilio"},{firstName: "Escobar"}],
    };
  }

  componentDidMount () {
    this.props.getMyClients()
/*     .then( data => {
      this.setState({
        clients: data,
      });
    }) */ // Так должно быть когда Clients придут с бека
    .catch( () => this.onLogOut());
  }
    // const { clients } = this.props.personal;

  onSuccess = e => {
    this.props.getUser(e.data).then( data => this.goToUserPreview(data));
  };

  openQRCodeScanner = () => {
    this.setState({
      qrcodeVisible: true
    });
  };

  closeQRCodeScanner = () => {
    this.setState({
      qrcodeVisible: false
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

  goToLogin = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.Login);
  };

  goToUserPreview = user => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.UserPreview, {
      user: user,
    });
  };

  _keyExtractor = (item, index) => `${index}${item.id}`;

  handleInput = _.debounce((text) => {
    //const { clients } = this.props.personal;
    const data = _.filter(this.state.personalClients, user => contains(user, text.toLowerCase()));
    this.setState({
      clients: data,
    });
  }, 300);

  render() {
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
            <Button onPress={this.openQRCodeScanner} transparent
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
            data={this.state.clients}
            keyExtractor={this._keyExtractor}
            renderItem={(client, index) => (
              <View style={styles.listItem}>
                <Text style={styles.listText}>{client.item.firstName}</Text>
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
                customMarker={
                  <ScanMarker />
                }
                bottomContent={
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.closeQRCodeScanner}
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
  personal: state.personal
});

const  mapDispatchToProps = dispatch => {
  return {
    getMyClients: () => dispatch(getClients()),
    getUser: id => dispatch(getUserById(id)),
    onLogOut: () => dispatch(userLogOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalPanel);

