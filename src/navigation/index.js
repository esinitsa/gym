import { createSwitchNavigator } from "react-navigation";
import AuthNavigation from "./auth";

export default createSwitchNavigator({
    Auth: { screen: AuthNavigation }
});
