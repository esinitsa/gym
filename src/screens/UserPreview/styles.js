import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f4f5",
  },
  header: {
    borderBottomColor: "#f5f4f5",
    borderBottomWidth: 0,
    backgroundColor: "transparent"
  },
  leftHeader: {
    paddingLeft: 15
  },
  leftHeaderText: {
    fontSize: 20,
    fontWeight: "700"
  },
  infoView: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginTop: 30
  },
  userInfoText: {
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  rightHeaderText: {
    paddingHorizontal: 10,
    color: "#52a5ff"
  },
  cardView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15
  }
});

export default styles;
