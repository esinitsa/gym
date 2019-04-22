import { FluidNavigator } from "react-navigation-fluid-transitions";
import Home from "../screens/Home";
import UserSubscriptionList from "../screens/UserSubscriptionList";

const CardNavigator = FluidNavigator({
  Home: { screen: Home },
  UserSubscriptionList: { screen: UserSubscriptionList },
});

export default CardNavigator;
