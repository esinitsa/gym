import { createSwitchNavigator } from "react-navigation";
import PersonalPanel from "../screens/PersonalPanel";
import UserPreview from "../screens/UserPreview";
import SubscriptionList from "../screens/SubscriptionList";

export default createSwitchNavigator(
    {
        PersonalPanel: { screen: PersonalPanel },
        UserPreview: { screen : UserPreview },
        SubscriptionList: { screen: SubscriptionList}
    },
    {
        initialRouteName: "PersonalPanel",
        headerMode: "none",
    }
);
