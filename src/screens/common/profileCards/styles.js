import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    //backgroundColor: "#093145",
    backgroundColor: "rgba(9,49,69, 0.6)",
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  cardItem: {
    //backgroundColor: "#093145",
    backgroundColor: "rgba(9,49,69, 0.4)"
  },
  cardText: {
    fontSize: 20,
    color: "#ffffff"
  },
  cardRow: {
    height: 175,
    flexDirection: "row",
    marginBottom: 40
  },
  leftCard: {
    // backgroundColor: "#093145",
    backgroundColor: "rgba(9,49,69, 0.6)",
    width: DEVICE_WIDTH / 2 - 30,
    alignItems: "center",
    marginRight: 10,
    marginLeft: 20
  },
  rightCard: {
    //backgroundColor: "#093145",
    backgroundColor: "rgba(9,49,69, 0.6)",
    width: DEVICE_WIDTH / 2 - 30,
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
    marginRight: 20
  },
  startDateText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffff",
    paddingTop: "20%"
  },
  dateText: {
    color: "#ffffff",
    fontSize: 22,
    paddingTop: "20%",
    fontWeight: "bold"
  },
  visitsAmountText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    paddingTop: "20%"
  },
  visitsNumber: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: "20%"
  }
});

export default styles;
