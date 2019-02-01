import React from "react";
import {
  Container,View, Text, Button
} from "native-base";
import {
  Modal, TouchableHighlight,
} from "react-native";
import { NavigationType } from "../../constants/navigationTypes";
import QRCode from "react-native-qrcode-svg";
import styles from "./styles";

class Profile extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      qrcodeVisible: false,
    };
  }
  goToLogin = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.Login);
  }

  goToSignUp = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.SignUp);
  }

  visibleMyQRCode = () => {
    this.setState({
      qrcodeVisible: !this.state.qrcodeVisible,
    });
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
            style={styles.modalView}>
          <TouchableHighlight onPress={this.visibleMyQRCode}>
              <View style={styles.touchableView}>
              <QRCode
                    value="vk.com"
                    size={200}
                  />
            </View>
            </TouchableHighlight>
              </View>
          </Modal>
        <Button onPress={this.visibleMyQRCode}>
          <Text>
            modal close
          </Text>
        </Button>
      </Container>
    );
  }
}

export default Profile;
