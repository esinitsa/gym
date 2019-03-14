import { createSwitchNavigator } from "react-navigation";
import PersonalPanel from "../screens/PersonalPanel";
import UserPreview from "../screens/UserPreview";

export default createSwitchNavigator(
    {
        PersonalPanel: { screen: PersonalPanel },
        UserPreview: { screen : UserPreview },
    },
    {
        initialRouteName: "PersonalPanel",
        headerMode: "none",
    }
);
