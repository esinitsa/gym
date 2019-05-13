import { createSwitchNavigator } from "react-navigation";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

export default createSwitchNavigator(
    {
        Login: { screen: Login },
        SignUp: { screen: SignUp },
    },
    {
        initialRouteName: "Login",
        headerMode: "none",
    }
);
