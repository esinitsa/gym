import { Item, Label, Text, View } from "native-base";
import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import ButtonSubmit from "../../common/buttons/submit";
import { skipAuth } from "../../../components/onBoarding/actions";
import { CustomText } from "../../common/text/customText";
import { BOX_NONE } from "../../../constants/onBoardingStates";
import styles from "./styles";

class OnBoardingSignUpForm extends React.PureComponent {
  renderInput = () => {
    return (
      <Item floatingLabel style={styles.inputItem}>
        <Label style={styles.label} />
      </Item>
    );
  };

  render() {
    const { stepSignup, stepGoToLogin } = this.props.signup;
    return (
      <SafeAreaView pointerEvents={BOX_NONE} style={styles.container}>
        <View pointerEvents={stepSignup} style={styles.formContainer}>
          {this.renderInput()}
          {this.renderInput()}
          {this.renderInput()}
          {this.renderInput()}
          {this.renderInput()}
          <ButtonSubmit
            onPress={() => Promise.reject()}
            buttonText={I18n.t("login.buttons.signup")}
            {...this.props}
          />
        </View>
        <View pointerEvents={stepGoToLogin} style={styles.signInView}>
          <Text style={styles.text}>{I18n.t("login.hint.or")}</Text>
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.signInText}>
              {I18n.t("login.buttons.login")}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={this.props.skipAuth}
          style={styles.skip}
        >
          <CustomText style={styles.signInText} text={"Skip"} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  signup: state.onBoarding.signup
});

const mapDispatchToProps = dispatch => ({
  skipAuth: () => dispatch(skipAuth())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnBoardingSignUpForm);
