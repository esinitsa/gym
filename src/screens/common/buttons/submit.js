import React from "react";
import { ActivityIndicator, Animated, Dimensions, Easing, TouchableOpacity, View } from "react-native";
import { CustomText } from "../text/customText";
import styles from "./styles";

const DEVICE_WIDTH = Dimensions.get("window").width;
const MARGIN = 40;

export default class ButtonSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
    this.buttonAnimated = new Animated.Value(0);
  }

  onPress = () => {
    if (this.state.isLoading) {
      return;
    }
    this.setState({ isLoading: true });
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }).start();

    setTimeout(() => {
      this.props.onPress().catch(error => {
        this.stopAnimation();
      });
    }, 1500);
  };

  stopAnimation = () => {
    this.setState({ isLoading: false });
    this.buttonAnimated.setValue(0);
  };

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
    });

    return (
      <View style={styles.container}>
        <Animated.View style={{ width: changeWidth }}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
            activeOpacity={1}
          >
            {this.state.isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <CustomText style={styles.text} text={this.props.buttonText}/>
            )}
          </TouchableOpacity>
          <Animated.View style={[styles.circle]}/>
        </Animated.View>
      </View>
    );
  }
}
