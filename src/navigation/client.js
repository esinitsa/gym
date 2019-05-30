import { createSwitchNavigator } from "react-navigation";
import Profile from "../screens/Profile";
import UserNotes from "../screens/Notes";
import Home from "../screens/Home";
import Calendar from "../screens/Calendar";
import StaffTable from "../screens/StaffTable";
import Appointment from "../screens/Appointment";
import Subscriptions from "../screens/Subscriptions";

export default createSwitchNavigator(
  {
    Home: {screen: Home},
    Subscriptions: {screen: Subscriptions},
    Profile: { screen: Profile },
    UserNotes: { screen: UserNotes },
    Calendar: { screen: Calendar },
    StaffTable: { screen: StaffTable },
    Appointment: { screen: Appointment }
  },
  {
    initialRouteName: "Profile",
    headerMode: "none"
  }
);
