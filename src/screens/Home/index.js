import React from "react";
import {
  Container, Text, Button
} from "native-base";
import { NavigationType } from "../../constants/navigationTypes";

class Home extends React.PureComponent {
  goToLogin = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.Login);
  }

  goToSignUp = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.SignUp);
  }

  goToProfile = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.Profile);
  }

  render() {
    return (
      <Container >
      <Button onPress={this.goToLogin}>
        <Text>
          Go to Login
        </Text>
      </Button>
      <Button onPress={this.goToSignUp}>
        <Text>
          Go to SignUp
        </Text>
      </Button>
      <Button onPress={this.goToProfile}>
        <Text>
          Go to Profile
        </Text>
      </Button>
      </Container>
    );
  }
}

export default Home;
