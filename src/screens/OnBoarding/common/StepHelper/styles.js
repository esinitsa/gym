const styles = {
  container: {
    position: "absolute",
    height: 100,
    width: 200,
    left: "50%",
    backgroundColor: "#fff"
  },
  alignBottom: {
    bottom: 0,
    transform: [{ translateX: -100 }, { translateY: 100 }]
  },
  alignTop: {
    top: 0,
    transform: [{ translateX: -100 }, { translateY: -100 }]
  },
  content: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default styles;
