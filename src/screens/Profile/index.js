import { Body, Button, Header, Left, Right, Title, View } from "native-base";
import React from "react";
import { Alert, Modal, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import QRCode from "react-native-qrcode-svg";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Foundation from "react-native-vector-icons/Foundation";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { userLogOut } from "../../components/login/actions";
import { GRADIENT_COLORS } from "../../constants/cssConstants";
import { NavigationType } from "../../constants/navigationTypes";
import ProfileCards from "../common/profileCards/index";
import { CustomText } from "../common/text/customText";
import styles from "./styles";

class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      qrcodeVisible: false
    };
  }

  goToLogin = () => this.props.navigation.navigate(NavigationType.Login);

  goToSignUp = () => this.props.navigation.navigate(NavigationType.SignUp);

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
        <Header >
          <Left>
            <Button onPress={this.onLogOut} transparent style={styles.leftIcon}>
              <Foundation name={"clipboard-notes"} size={30} solid />
            </Button>
          </Left>
          <Body>
            <Title><CustomText text={"Profile"}/></Title>
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
            <TouchableWithoutFeedback onPress={this.visibleMyQRCode} >
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
            <CustomText style={styles.buttonText} text={"My QR-code"}/>
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
