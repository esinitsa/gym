import React from "react";
import {
  Container,View, Text, Button
} from "native-base";
import {
  Modal, TouchableHighlight,
} from "react-native";
import { NavigationType } from "../../constants/navigationTypes";
import QRCode from "react-native-qrcode-svg";

class Home extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      qrcodeVisible: false,
    }
  }
  goToLogin = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.Login);
  }

  goToSignUp = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.SignUp);
  }

  openMyQRCode = () => {
    this.setState({
      qrcodeVisible: !this.state.qrcodeVisible,
    })
  }

  render() {
    return (
      <Container >
      <View>
        <Text style={{fontSize: 30}}>
          Text here
        </Text>
      </View>
      <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.qrcodeVisible}>
            <View
            style={{
                position: "relative",
                top: 0,
                right: 0,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}>
          <TouchableHighlight onPress={this.openMyQRCode}>
              <View style={{
                    borderWidth: 10,
                padding: "100%"
              }}>
              <QRCode
                    value="Test QR-code123"
                    size={200}
                  />
            </View>
            </TouchableHighlight>
              </View>
          </Modal>
        <Button onPress={this.openMyQRCode}>
          <Text>
            modal close
          </Text>
        </Button>
      </Container>
    );
  }
}

export default Home;
