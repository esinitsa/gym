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
        this.growAnimated = new Animated.Value(0);
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
            this._onGrow();
        }, 2000);

        setTimeout(() => {
            this.setState({ isLoading: false });
            this.buttonAnimated.setValue(0);
            this.growAnimated.setValue(0);
        }, 2300);
    }

    _onGrow() {
        Animated.timing(this.growAnimated, {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
        }).start();
    }

    render() {
        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
        });
        const changeScale = this.growAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, MARGIN],
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
                            : (<Text style={styles.text}>Вход</Text>)}
                    </TouchableOpacity>
                    <Animated.View style={[styles.circle, { transform: [{ scale: changeScale }] }]} Î />
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#554e7b",
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
        borderColor: "#554e7b",
        borderRadius: 100,
        alignSelf: "center",
        zIndex: 99,
        backgroundColor: "#554e7b",
    },
    container: {
        alignItems: "center",
        flex: 1,
        marginTop: 30,
        justifyContent: "flex-start",
    },
    text: {
        color: "white",
        backgroundColor: "transparent",
    },
});
