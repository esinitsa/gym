import { createSwitchNavigator } from "react-navigation";
import Profile from "../screens/Profile";
import UserNotes from '../screens/Notes';

export default createSwitchNavigator(
    {
        Profile: { screen: Profile },
        UserNotes: { screen: UserNotes }
    },
    {
        initialRouteName: "Profile",
        headerMode: "none",
    }
);
