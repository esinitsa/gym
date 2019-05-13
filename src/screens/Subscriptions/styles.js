import { StyleSheet } from "react-native";
import theme from "../../styles";

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.container
  },
  card: {
    paddingVertical: theme.size.padding.large,
    paddingHorizontal: theme.size.padding.medium,
    width: theme.size.parameters.cardWidth,
    marginTop: theme.size.margin.medium,
    borderRadius: theme.size.border.radius.secondary,
    alignSelf: "center",
    shadowColor: theme.shadows.color,
    shadowOffset: theme.shadows.offset,
    shadowOpacity: theme.shadows.opacity,
    shadowRadius: theme.shadows.radius
  },
  modalView: {
    backgroundColor: theme.shadows.background,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    right: 0,
    top: 0
  },
  header: {
    borderBottomColor: theme.colors.container,
    borderBottomWidth: theme.size.border.width.empty,
    backgroundColor: "transparent"
  },
  headerUsername: {
    fontSize: theme.fonts.size.placeholder,
    color: theme.colors.secondary
  },
  leftHeader: {
    justifyContent: "flex-start",
    alignSelf: "flex-start"
  },
  bodyHeaderText: {
    fontSize: theme.fonts.size.subtitle,
    fontWeight: theme.fonts.weight.bold
  },
  backArrowIcon: {
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: theme.size.margin.medium
  },
  listItem: {
    borderTopColor: theme.colors.secondary,
    backgroundColor: theme.colors.light,
    justifyContent: "space-between",
    alignContent: "space-between",
    flexDirection: "row"
  },
  listText: {
    padding: theme.size.padding.mediumVertical,
    color: theme.colors.text,
    fontSize: theme.fonts.size.standard
  },
  activeText: {
    color: theme.colors.success,
    paddingHorizontal: theme.size.padding.small
  },
  inactiveText: {
    color: theme.colors.danger,
    paddingHorizontal: theme.size.padding.small
  },
  activeTermView: {
    flexDirection: "row"
  },
  typeIcon: {
    height: theme.size.parameters.small,
    width: theme.size.parameters.small,
    borderRadius: theme.size.border.radius.secondary,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    backgroundColor: "transparent"
  }
});

export default styles;