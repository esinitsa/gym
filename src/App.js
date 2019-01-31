import React from "react";
import { Root } from "native-base";
import { createStackNavigator } from "react-navigation";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";


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
});

class App extends React.PureComponent {
  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
   );
 }
}

export default App;

