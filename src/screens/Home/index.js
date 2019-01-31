import React from "react";
import {
  Container, Title, Text, Button,
} from "native-base";
import { NavigationType } from "../../constants/navigationTypes";


class Home extends React.PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Title>
          <Text>This is the Home screen</Text>
        </Title>
        <Button onPress={() => navigation.navigate(NavigationType.Login)}>
          <Text>Go to Login!</Text>
        </Button>
        <Button onPress={() => navigation.navigate(NavigationType.SignUp)}>
          <Text>Go to SignUp!</Text>
        </Button>
      </Container>
    );
  }
}

export default Home;
