import { createSwitchNavigator } from "react-navigation";
import Profile from "../screens/Profile";

export default createSwitchNavigator(
    {
        Profile: { screen: Profile },
    },
    {
        initialRouteName: "Profile",
        headerMode: "none",
    }
);
