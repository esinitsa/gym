import React from "react";
import { connect } from "react-redux";
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
    const { userProfile } = this.props.user;
    return (
      <Container >
      <View>
        <Text style={{fontSize: 20}}>
          {userProfile.email}
        </Text>
        <Text style={{fontSize: 20}}>
          {userProfile.firstName}
        </Text>
        <Text style={{fontSize: 20}}>
          {userProfile.lastName}
        </Text>
        <Text style={{fontSize: 20}}>
          {userProfile.locale}
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
                    value={userProfile.id}
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


const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps
)(Profile);

