import React from "react";
import {
  SafeAreaView
} from "react-native";
import { NavigationType } from "../../constants/navigationTypes";
import { Header, Button, Title, Text, Left, Body, Right} from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { GRADIENT_COLORS } from "../../constants/cssConstants";
import LinearGradient from "react-native-linear-gradient";
import ProfileCards from "../common/profileCards";
import styles from "./styles";

class UserPreview extends React.PureComponent {

  goToPersonalPanel = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.PersonalPanel);
  }

  render() {
    return (
      <LinearGradient colors={GRADIENT_COLORS} style={styles.linearGradient}>
      <Header >
          <Left>
            <Button onPress={this.goToPersonalPanel} transparent>
              <FontAwesome5 name={"angle-left"} size={30} solid />
            </Button>
          </Left>
         <Body>
         <Title>
           <Text>
             User Preview
           </Text>
         </Title>
          </Body>
          <Right/>
        </Header>
        <SafeAreaView style={styles.container} >
          <ProfileCards user={this.props.navigation.state.params.user}/>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

export default UserPreview;
