import React from "react";
import { createStackNavigator } from "react-navigation";
import LoginForm from "./screens/Login";


const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginForm,
  },
});

class App extends React.PureComponent {
  render() {
    return (
       <AppNavigator />
   );
 }
}

export default App;
