import React from "react";
import { connect } from "react-redux";
import {
  Container,View, Text, Button
} from "native-base";
import {
  Modal, TouchableOpacity, Animated, Dimensions, Easing
} from "react-native";
import { NavigationType } from "../../constants/navigationTypes";
import QRCode from "react-native-qrcode-svg";
import styles from "./styles";

// const DEVICE_WIDTH = Dimensions.get("window").width;

class Profile extends React.PureComponent {
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

  visibleMyQRCode = () => {
    this.setState({
      qrcodeVisible: !this.state.qrcodeVisible,
    });
  }

  onPress = () => {
    Animated.timing(this.qrCodeAnimated, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
    }).start();

    setTimeout(() => {
        this.qrCodeAnimated.setValue(0);
    }, 2300);
}

_onGrow() {
    Animated.timing(this.qrCodeAnimated, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
    }).start();
}


  render() {
  //   const changeWidth = this.qrCodeAnimated.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [DEVICE_WIDTH, 40],
  // });
  const changeScale = this.qrCodeAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 40],
});
    const { userProfile } = this.props.user;
    return (
      <Container >
      <View>
        <Text style={{fontSize: 20}}>
          {(userProfile !== null)
            ? userProfile.email
            : "EmailtTest"
          }
        </Text>
        <Text style={{fontSize: 20}}>
          {(userProfile !== null)
            ? userProfile.firstName
            : "firstName"
          }
        </Text>
        <Text style={{fontSize: 20}}>
          {(userProfile !== null)
            ? userProfile.lastName
            : "lastName"
          }
        </Text>
        <Text style={{fontSize: 20}}>
          {(userProfile !== null)
            ? userProfile.locale
            : "locale"
          }
        </Text>
      </View>
      <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.qrcodeVisible}>
            <View
            style={styles.modalView}>
          <TouchableOpacity onPress={this.visibleMyQRCode}>
              <View style={styles.touchableView}>
              <QRCode
                    value={(userProfile !== null)
                        ? userProfile.id
                        : "200"
                      }
                    size={200}
                  />
            </View>
            </TouchableOpacity>
              </View>
        </Modal>
        <Animated.View style={{
        transform: [{ scale: changeScale }],
        opacity: this.qrCodeAnimated,
        }}>
          <TouchableOpacity  onPress={this.onPress}>
            <QRCode
                value={(userProfile !== null)
                    ? userProfile.id
                    : "200"
                    }
                  size={200}
                />
          </TouchableOpacity>
        </Animated.View>
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

