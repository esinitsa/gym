import React from "react";
import {
  Container, Title, Text, Button,
} from "native-base";
import { NavigationType } from "../../constants/navigationTypes";

class Profile extends React.PureComponent {
  goToHome = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.Home);
  }

  render() {
    return (
      <Container>
        <Title>
          <Text>This is the Profile screen</Text>
        </Title>
        <Button onPress={this.goToHome}>
          <Text>Click Me!</Text>
        </Button>
      </Container>
    );
  }
}

export default Profile;
