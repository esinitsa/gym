import { createSwitchNavigator } from "react-navigation";
import Profile from "../screens/Profile";
import UserNotes from "../screens/Notes";
import Home from "../screens/Home";
import UserSubscriptionList from "../screens/UserSubscriptionList";

export default createSwitchNavigator(
  {
    Home: {screen: Home},
    UserSubscriptionList: {screen: UserSubscriptionList},
    Profile: { screen: Profile },
    UserNotes: { screen: UserNotes }
  },
  {
    initialRouteName: "Profile",
    headerMode: "none"
  }
);
