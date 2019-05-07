import { StyleSheet } from "react-native";
import theme from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  userIcon: {
    color: theme.colors.profileList.userListIcon
  },
  typeIcon: {
    height: theme.size.parameters.userListItem.typeIcon,
    width: theme.size.parameters.userListItem.typeIcon,
    borderRadius: theme.size.border.typeIconBorderRadius,
    backgroundColor: theme.colors.typeIcon,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: theme.shadows.color,
    shadowOffset: theme.shadows.offset,
    shadowOpacity: theme.shadows.opacity,
    shadowRadius: theme.shadows.radius
  },
  userInfoText: {
    paddingHorizontal: theme.size.padding.userListItem.infoHorizontal,
    paddingVertical: theme.size.padding.userListItem.infoVertical
  },
  emailText: {
    paddingHorizontal: theme.size.padding.userListItem.infoHorizontal,
    paddingBottom: theme.size.padding.infoTextVertical,
    fontSize: theme.fonts.size.email,
    color: theme.colors.profileList.userListEmail,
  }
});

export default styles;
