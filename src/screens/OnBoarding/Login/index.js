import { Item, Label, Text, View } from "native-base";
import React from "react";
import { Image, SafeAreaView, TouchableOpacity } from "react-native";
import { skipAuth } from "../../../components/onBoarding/actions";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import theme from "../../../styles";
import { BOX_NONE } from "../../../constants/onBoardingStates";
import { CustomText } from "../../common/text/customText";
import styles from "./styles";

class OnBoardingLoginForm extends React.PureComponent {
  renderInput = () => {
    return (
      <Item floatingLabel style={styles.item}>
        <Label style={styles.label} />
      </Item>
    );
  };

  render() {
    const { stepGoToSignup, stepAuth, stepGoToHome } = this.props.login;
    return (
      <SafeAreaView pointerEvents={BOX_NONE} style={styles.container}>
        <Image style={styles.logo} source={theme.images.logo} />
        <View pointerEvents={BOX_NONE} style={styles.loginView}>
          <View pointerEvents={stepAuth}>
            {this.renderInput()}
            {this.renderInput()}
          </View>
          <View style={styles.buttonContainer} pointerEvents={stepGoToHome}>
            <TouchableOpacity style={styles.button} activeOpacity={1}>
              <CustomText
                style={styles.buttonText}
                text={this.props.buttonText}
              />
            </TouchableOpacity>
          </View>
          <View pointerEvents={stepGoToSignup} style={styles.signUpView}>
            <Text style={styles.text}>{I18n.t("login.hint.or")}</Text>
            <CustomText
              style={styles.signUpText}
              text={I18n.t("login.buttons.signup")}
            />
          </View>
        </View>
        <TouchableOpacity onPress={this.props.skipAuth} style={styles.skip}>
          <CustomText style={styles.signUpText} text={"Skip"} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  login: state.onBoarding.login,
  token: state.user.token
});

const mapDispatchToProps = dispatch => ({
  skipAuth: () => dispatch(skipAuth())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnBoardingLoginForm);
