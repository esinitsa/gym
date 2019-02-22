import React from "react";
import { connect } from "react-redux";
import { View, Text, Card, CardItem } from "native-base";
import {
  Modal,
  TouchableOpacity,
  Animated,
  Easing,
  SafeAreaView,
} from "react-native";
import { NavigationType } from "../../constants/navigationTypes";
import LinearGradient from "react-native-linear-gradient";
import QRCode from "react-native-qrcode-svg";
import styles from "./styles";

class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      qrcodeVisible: false
    };
    this.qrCodeAnimated = new Animated.Value(0);
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

  onPress = () => {
    Animated.timing(this.qrCodeAnimated, {
      toValue: 1,
      duration: 750,
      easing: Easing.linear
    }).start();
  };

  render() {
    const { userProfile } = this.props.user;
    return (
      <LinearGradient colors={["#ffffff", "#093145", "#00AC6B"]} style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Text style={styles.cardText}>
              {userProfile !== null ? userProfile.email : "EmailTest"}
            </Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={styles.cardText}>
              {userProfile !== null ? userProfile.firstName : "firstName"}
            </Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={styles.cardText}>
              {userProfile !== null ? userProfile.lastName : "lastName"}
            </Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={styles.cardText}>
              {userProfile !== null ? userProfile.locale : "locale"}
            </Text>
          </CardItem>
        </Card>
        <View style={styles.cardRow}>
          <Card
            style={styles.leftCard}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#ffffff"
              }}
            >
              {userProfile !== null ? userProfile.email : "Дата окончания"}
            </Text>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 20,
                paddingTop: "40%",
                fontWeight: "bold"
              }}
            >
              20/09/2019
            </Text>
          </Card>
          <Card style={styles.rightCard}>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 14,
                fontWeight: "bold"
              }}
            >
              {userProfile !== null ? userProfile.email : "Количество занятий"}
            </Text>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "bold",
                paddingTop: "40%"
              }}
            >
              12
            </Text>
          </Card>
        </View>
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

export default connect(mapStateToProps)(Profile);
