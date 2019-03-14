import React from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import { View, Text, Header, Left, Right, Button, Title, Body} from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import ProfileCards from "../common/profileCards/index";
import { userLogOut } from "../../components/login/actions";
import { I18n } from "react-redux-i18n";
import { NavigationType } from "../../constants/navigationTypes";
import LinearGradient from "react-native-linear-gradient";
import QRCode from "react-native-qrcode-svg";
import { GRADIENT_COLORS } from "../../constants/cssConstants";
import styles from "./styles";

class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      qrcodeVisible: false
    };
  }

  goToLogin = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.Login);
  };

  goToSignUp = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.SignUp);
  };

  visibleMyQRCode = () => {
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

  render() {
    const { userProfile } = this.props.user;
    return (
      <LinearGradient colors={GRADIENT_COLORS} style={styles.linearGradient}>
       <Header>
          <Left/>
          <Body>
            <Title><Text>Profile</Text></Title>
          </Body>
          <Right>
            <Button onPress={this.onLogOut} transparent>
            <FontAwesome5 name={"sign-out-alt"} size={25} solid />
            </Button>
          </Right>
        </Header>
      <SafeAreaView style={styles.container}>
        <ProfileCards user={userProfile} />
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.qrcodeVisible}>
         <TouchableOpacity style={styles.modalView} onPress={this.visibleMyQRCode}>
              <View style={styles.touchableView}>
                <QRCode
                  value={userProfile !== null ? userProfile.id : "200"}
                  size={250}
                />
              </View>
          </TouchableOpacity>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={this.visibleMyQRCode}>
          <Text style={styles.buttonText}>
            My QR-code
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const  mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(userLogOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
