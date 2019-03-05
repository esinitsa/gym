/* eslint-disable no-console */
import React from "react";
import {
    ActivityIndicator, Animated, Dimensions, Easing, StyleSheet, Text, TouchableOpacity, View
} from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;
const MARGIN = 40;

export default class ButtonSubmit extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isLoading: false };

        this.buttonAnimated = new Animated.Value(0);
    }

    onPress = () => {
        if (this.state.isLoading) { return; }
        this.setState({ isLoading: true });
        Animated.timing(this.buttonAnimated, {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
        }).start();

      setTimeout(() => {
          this.props.onPress().catch(error => {
            this.stopAnimation();
          });
      }, 1500);
    }

    stopAnimation = () => {
      this.setState({ isLoading: false });
      this.buttonAnimated.setValue(0);
    }

    render() {
        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
        });

        return (
            <View style={styles.container}>
                <Animated.View style={{ width: changeWidth }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}
                        activeOpacity={1}>
                        {this.state.isLoading
                            ? <ActivityIndicator size="small" color="#ffffff" />
                            : (<Text style={styles.text}>{this.props.buttonText}</Text>)}
                    </TouchableOpacity>
                    <Animated.View style={[styles.circle]} Î />
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        // backgroundColor: "#554e7b",
        backgroundColor: "#BF8330",
        borderRadius: 20,
        justifyContent: "center",
        height: MARGIN,
        zIndex: 100,
    },
    circle: {
        height: MARGIN,
        marginTop: -MARGIN,
        width: MARGIN,
        borderWidth: 1,
        borderColor: "#BF8330",
        borderRadius: 100,
        alignSelf: "center",
        zIndex: 99,
        backgroundColor: "#BF8330",
    },
    container: {
        alignItems: "center",
        flex: 1,
        marginTop: 40,
        justifyContent: "flex-start",
    },
    text: {
        color: "#ffffff",
        fontSize: 18,
        backgroundColor: "transparent",
    },
});
