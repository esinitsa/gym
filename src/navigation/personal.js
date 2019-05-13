import { createSwitchNavigator } from "react-navigation";
import AdminPanel from "../screens/AdminPanel";

export default createSwitchNavigator(
    {
        AdminPanel: { screen: AdminPanel }
    },
    {
        initialRouteName: "AdminPanel",
        headerMode: "none",
    }
);
