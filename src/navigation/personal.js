import { createSwitchNavigator } from "react-navigation";
import AdminPanel from "../screens/AdminPanel";
import StaffSchedule from "../screens/StaffSchedule";

export default createSwitchNavigator(
    {
        AdminPanel: { screen: AdminPanel },
        StaffSchedule: { screen: StaffSchedule}
    },
    {
        initialRouteName: "AdminPanel",
        headerMode: "none",
    }
);
