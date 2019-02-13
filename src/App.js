import React from "react";
import { Root } from "native-base";
import { createStackNavigator } from "react-navigation";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";

import Navigation from "./navigation";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  SignUp: {
    screen: SignUp
  },
  Login: {
    screen: Login,
  },
  Profile: {
    screen: Profile,
  },
});

class App extends React.PureComponent {
  render() {
    return (
      <Root>
        <Navigation />
      </Root>
    );
  }
}

export default App;

