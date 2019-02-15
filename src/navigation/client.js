import { createSwitchNavigator } from "react-navigation";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

export default createSwitchNavigator(
    {
        Home: { screen: Home },
        Profile: { screen: Profile },
    },
    {
        initialRouteName: "Home",
        headerMode: "none",
    }
);
