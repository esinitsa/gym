import { createSwitchNavigator } from "react-navigation";
import AuthNavigation from "./auth";
import ClientNavigation from "./client";
import PersonalNavigation from "./personal";

export default createSwitchNavigator({
    Auth: { screen: AuthNavigation },
    Client: { screen: ClientNavigation },
    Personal: { screen: PersonalNavigation },
});
