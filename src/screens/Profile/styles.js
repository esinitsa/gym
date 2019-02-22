import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1
    },
    container:{
      flex: 1,
      justifyContent: "center"
    },
    card: {
      backgroundColor: "#093145",
      paddingTop: 5,
      paddingBottom: 5,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 5
    },
    cardItem: {
      backgroundColor: "#093145",
    },
    cardText: {
      fontSize: 20, color: "#ffffff",
    },
    cardRow: {
      height: 200,
      flexDirection: "row",
      marginBottom: 40
    },
    leftCard: {
      backgroundColor: "#093145",
      width: DEVICE_WIDTH / 2 - 20,
      alignItems: "center",
      paddingTop: 5,
      paddingBottom: 5,
      marginLeft: 15,
      marginRight: 5
    },
    rightCard: {
      backgroundColor: "#093145",
      width: DEVICE_WIDTH / 2 - 20,
      alignItems: "center",
      paddingTop: 5,
      paddingBottom: 5,
      marginLeft: 5,
      marginRight: 15
    },
    buttonText: {
      fontSize: 20,
      color: "#ffffff",
      fontWeight: "bold"
    },
    modalView: {
      backgroundColor: "rgba(0,0,0,0.6)",
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
      position: "relative",
      right: 0,
      top: 0,
    },
    touchableView: {
      borderColor: "white",
      borderWidth: 20,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#BF8330",
      borderRadius: 20,
      justifyContent: "center",
      marginLeft: 15,
      marginRight: 15,
      height: 50,
      zIndex: 100,
  },
  text: {
      color: "white",
      backgroundColor: "transparent",
  },
});

export default styles;
