import { StyleSheet, Dimensions } from "react-native";

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
       backgroundColor: "rgba(9,49,69, 0.4)",
    },
    cardText: {
      fontSize: 20, color: "#ffffff",
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
      marginLeft: 20,
    },
    rightCard: {
      //backgroundColor: "#093145",
      backgroundColor: "rgba(9,49,69, 0.6)",
      width: DEVICE_WIDTH / 2 - 30,
      alignItems: "center",
      paddingTop: 5,
      paddingBottom: 5,
      marginLeft: 10,
      marginRight: 20,
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
      // backgroundColor: "#007aa3",rgb(0, 122, 163)
      //backgroundColor: "rgba(58, 118, 168, 0.9)",
      backgroundColor: "rgba(65, 146, 168, 0.7)",
      borderRadius: 20,
      justifyContent: "center",
      marginLeft: 15,
      marginRight: 15,
      height: 50,
  },
  text: {
      color: "white",
      backgroundColor: "transparent",
  },
});

export default styles;
