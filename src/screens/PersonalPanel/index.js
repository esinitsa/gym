import React from "react";
import { connect } from "react-redux";
import {
  View, Text,
} from "native-base";
import {
  Modal, TouchableOpacity, Animated, SafeAreaView,
} from "react-native";
import { getClients } from "../../components/personal/actions";
import { NavigationType } from "../../constants/navigationTypes";
import QRCode from "react-native-qrcode-svg";
import styles from "./styles";

class PersonalPanel extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      qrcodeVisible: false,
    };
    this.qrCodeAnimated = new Animated.Value(0);
  }

  goToLogin = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.Login);
  }

  goToSignUp = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.SignUp);
  }

  componentDidMount() {
    this.props.getClients();
  }

  visibleMyQRCode = () => {
    this.setState({
      qrcodeVisible: !this.state.qrcodeVisible,
    });
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#2a264f", flex: 1, justifyContent: "center" }}>
        <Modal
            animationType={"fade"}
            transparent={false}
            visible={this.state.qrcodeVisible}>
              <View
              style={styles.modalView}>
            <TouchableOpacity onPress={this.visibleMyQRCode}>
                <View style={styles.touchableView}>
                <QRCode
                      value={"200"}
                      size={250}
                    />
              </View>
              </TouchableOpacity>
                </View>
          </Modal>
            <TouchableOpacity style={styles.button}
                onPress={this.visibleMyQRCode}>
                <Text   style={{
                    fontSize: 20,
                    color: "#ffffff",
                    fontWeight: "bold",
                    }} >
                    My QR-code
                </Text>
            </TouchableOpacity>
      </SafeAreaView>
    );
  }
}


const mapStateToProps = state => ({
  personal: state.personal,
});

const mapDispatchToProps = dispatch => ({
  getClients: () => dispatch(getClients())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalPanel);
