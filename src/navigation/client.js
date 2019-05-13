import { createSwitchNavigator } from "react-navigation";
import Profile from "../screens/Profile";
import UserNotes from "../screens/Notes";
import Home from "../screens/Home";
import Subscriptions from "../screens/Subscriptions";

export default createSwitchNavigator(
  {
    Home: {screen: Home},
    Subscriptions: {screen: Subscriptions},
    Profile: { screen: Profile },
    UserNotes: { screen: UserNotes }
  },
  {
    initialRouteName: "Profile",
    headerMode: "none"
  }
);
