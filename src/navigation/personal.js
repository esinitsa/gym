import { createSwitchNavigator } from "react-navigation";
import PersonalPanel from "../screens/PersonalPanel";

export default createSwitchNavigator(
    {
        PersonalPanel: { screen: PersonalPanel },
    },
    {
        initialRouteName: "PersonalPanel",
        headerMode: "none",
    }
);
