import React from "react";
import { Root } from "native-base";
import { createStackNavigator } from "react-navigation";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";


const AppNavigator = createStackNavigator({
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

