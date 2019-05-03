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
    shadowColor: theme.colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6
  },
  userInfoText: {
    paddingHorizontal: theme.size.padding.userListItem.infoHorizontal,
    paddingVertical: theme.size.padding.userListItem.infoVertical
  },
  emailText: {
    paddingHorizontal: theme.size.padding.userListItem.infoHorizontal,
    paddingBottom: theme.size.padding.infoTextVertical,
    fontSize: theme.size.font.email,
    color: theme.colors.profileList.userListEmail,
  }
});

export default styles;
