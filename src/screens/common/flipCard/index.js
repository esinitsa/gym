import React from "react";
import {
  Animated,
  Dimensions,
  Easing,
  TouchableOpacity,
  View
} from "react-native";
import { CustomText } from "../text/customText";
import styles from "./styles";

const DEVICE_HEIGHT = Dimensions.get("window").height;
const DEVICE_WIDTH = Dimensions.get("window").width;
const MARGIN = 40;

export default class CardFlip extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.animatedValueWidth = new Animated.Value(0);
    this.animatedValueMove = new Animated.ValueXY({
      x: -(DEVICE_WIDTH / 2 - (DEVICE_WIDTH + 15) / 2),
      y: 0
    });
    this.animatedOpenPage = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });

    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
    });

    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"]
    });

    // this.moveTranslate = this.animatedValueMove.interpolate({
    //   inputRange: [20, 21],
    //   outputRange: [-DEVICE_HEIGHT / 2, 0]
    // });
  }

  onPress = () => {
    if (this.value >= 90) {
      Animated.sequence([
        Animated.spring(this.animatedValueMove, {
          toValue: { x: -(DEVICE_WIDTH / 2 - (DEVICE_WIDTH + 15) / 2), y: 0 },
          velocity: 1,
          friction: 8,
          tension: 10
        }),
        Animated.parallel([
          Animated.spring(this.animatedValue, {
            toValue: 0,
            friction: 8,
            tension: 10
          }),
          Animated.timing(this.animatedValueWidth, {
            toValue: 5,
            duration: 200,
            easing: Easing.linear
          }),

          Animated.spring(this.animatedOpenPage, {
            toValue: 0,
            friction: 8,
            tension: 40
          })
        ])
      ]).start();
    } else {
      Animated.sequence([
        Animated.spring(this.animatedValueMove, {
          toValue: {
            x: -(DEVICE_WIDTH / 2 - (DEVICE_WIDTH + 15) / 2),
            y: -(DEVICE_HEIGHT / 2 - (DEVICE_HEIGHT - 300) / 2)
          },
          velocity: 1,
          friction: 8,
          tension: 10
        }),
        Animated.parallel([
          Animated.spring(this.animatedValue, {
            toValue: 180,
            friction: 8,
            tension: 10
          }),
          Animated.timing(this.animatedValueWidth, {
            toValue: 0,
            duration: 200,
            easing: Easing.linear
          }),
          Animated.spring(this.animatedOpenPage, {
            toValue: -200,
            friction: 30,
            tension: 30
          })
        ])
      ]).start();
    }
  };

  render() {
    const frontAnimatedStyle = {
      transform: [{ rotateX: this.frontInterpolate }]
    };

    const backAnimatedStyle = {
      transform: [{ rotateX: this.backInterpolate }]
    };

    const movePageStyle = {
      transform: [
        {
          translateY: this.animatedOpenPage
        }
      ]
    };

    const moveTranslateStyle = {
      transform: [
        {
          translateY: this.animatedValueMove.y
        },
        {
          translateX: this.animatedValueMove.x
        }
      ]
    };

    // const moveAnimatedXStyle = this.animatedValueMove.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [1, 50]
    // });

    const changeWidth = this.animatedValueWidth.interpolate({
      inputRange: [0, 1],
      outputRange: [2, 1 ]
    });

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.onPress}
        activeOpacity={1}
      >
        <Animated.View
          style={[
            moveTranslateStyle,
            {
              backgroundColor: "black",
              position: "absolute",
              top: this.animatedValueMove.y,
              left: this.animatedValueMove.x,
            }
          ]}
        >
          <View style={styles.card}>
            <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
              <CustomText text={"Front"} />
            </Animated.View>
            <Animated.View
              style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
            >
              <CustomText text={"Back"} />
            </Animated.View>
          </View>
          <Animated.View
            style={[
              styles.card2,
              { position: "absolute", top: 0, left: 0, zIndex: 1 },
              backAnimatedStyle,
              movePageStyle
            ]}
          >
            <Animated.View style={[styles.flipCard, backAnimatedStyle]}>
              <CustomText text={"Front"} />
            </Animated.View>
            <Animated.View
              style={[styles.flipCard, styles.flipCardBack, frontAnimatedStyle]}
            >
              <CustomText text={"Back"} />
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
