
import React, { PureComponent } from "react";
import { Header, Left, Right, Button, Title, Body, View } from "native-base";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  FlatList,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import { getClients } from "../../components/personal/actions";
import QRCodeScanner from "react-native-qrcode-scanner";

class PersonalPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      qrcodeVisible: false
    };
  }

  componentDidMount () {
    this.props.getMyClients();
  }

  onSuccess = e => {
    console.log(e);
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

  _keyExtractor = (item, index) => `${index}${item.id}`;

  render() {
    const { myClients } = this.props.personal;
    return (
      <LinearGradient
        colors={["#ffffff", "#093145", "#00AC6B"]}
        style={styles.linearGradient}
      >
        <Header>
          <Left>
            <Button transparent>
              <FontAwesome5 name={"angle-left"} size={30} solid />
            </Button>
          </Left>
          <Body>
            <Title>
              <Text>Header</Text>
            </Title>
          </Body>
          <Right>
            <Button onPress={this.openQRCodeScanner} transparent>
              <FontAwesome5 name={"camera"} size={25} solid />
            </Button>
          </Right>
          <Right>
            <Button transparent>
              <FontAwesome5 name={"sign-out-alt"} size={25} solid />
            </Button>
          </Right>
        </Header>
        <SafeAreaView style={{ flex: 1 }}>
   {/*        <FlatList
            removeClippedSubviews={false}
            data={myClients}
            enableEmptySections={true}
            keyExtractor={this._keyExtractor}
            style={styles.postsListView}
            renderItem={(item, index) => (
              <View>
                <Text>{item.firstName}</Text>
              </View>
            )}
          /> */}
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.qrcodeVisible}
          >
            <QRCodeScanner
              style={{ flex: 1 }}
              onRead={this.onSuccess}
              cameraProps={{ captureAudio: false }}
              bottomContent={
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.closeQRCodeScanner}
                >
                  <Text style={styles.buttonText}>My QR-code</Text>
                </TouchableOpacity>
              }
            />
          </Modal>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
const mapStateToProps = state => ({
  personal: state.personal
});

const  mapDispatchToProps = dispatch => {
  return {
    getMyClients: () => dispatch(getClients())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalPanel);

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  buttonText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#BF8330",
    borderRadius: 20,
    justifyContent: "center",
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    zIndex: 100
  }
});
