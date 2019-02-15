import { createSwitchNavigator } from "react-navigation";
import AuthNavigation from "./auth";
import ClientNavigation from "./client";

export default createSwitchNavigator({
    Auth: { screen: AuthNavigation },
    Client: { screen: ClientNavigation }
});
