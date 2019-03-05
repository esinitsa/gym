import React from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import { View, Text, Card, CardItem, Header, Left, Right, Button, Title, Body} from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { userLogOut } from "../../components/login/actions";
import { I18n } from "react-redux-i18n";
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
      <LinearGradient colors={["#ffffff", "#093145", "#00AC6B"]} style={styles.linearGradient}>
       <Header>
          <Left>
            <Button transparent>
            <FontAwesome5 name={"angle-left"} size={30} solid />
            </Button>
          </Left>
          <Body>
            <Title><Text>Header</Text></Title>
          </Body>
          <Right>
            <Button onPress={this.onLogOut} transparent>
            <FontAwesome5 name={"sign-out-alt"} size={25} solid />
            </Button>
          </Right>
        </Header>
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

const  mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(userLogOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
