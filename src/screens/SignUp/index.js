import React from "react";
import { View, Input, Item, Label, Text } from "native-base";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { signUpUser } from "../../components/login/actions";
import { I18n } from "react-redux-i18n";
import styles from "./styles";
import { showToast } from "../../services/UIActions";
import { GRADIENT_COLORS } from "../../constants/cssConstants";
import {
  emailRegexCheck,
  required,
  minLength,
  maxLength,
  handleMaxLength
} from "../../services/validations";
import { NavigationType } from "../../constants/navigationTypes";
import LinearGradient from "react-native-linear-gradient";
import ButtonSubmit from "../common/buttons/submit";

const maxLength100BlockInput = 100;
const maxLength70BlockInput = 70;
const maxLength30BlockInput = 30;
const maxLength100 = maxLength(maxLength100BlockInput);
const maxLength70 = maxLength(maxLength70BlockInput);
const maxLength30 = maxLength(maxLength30BlockInput);
const minLength4 = minLength(4);

class SignUpForm extends React.PureComponent {
  renderInput({ input }) {
    return (
      <Item floatingLabel style={{ marginTop: 10 }}>
        <Label style={{ color: "white", fontWeight: "200" }}>
          {input.name === "email"
            ? I18n.t("login.placeholders.email")
            : input.name === "password"
            ? I18n.t("login.placeholders.password")
            : input.name === "firstName"
            ? I18n.t("login.placeholders.firstName")
            : input.name === "lastName"
            ? I18n.t("login.placeholders.lastName")
            : input.name === "locale"
            ? I18n.t("login.placeholders.locale")
            : ""}
        </Label>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={input.name === "login" ? "email-address" : "default"}
          secureTextEntry={input.name === "password" ? true : false}
          {...input}
        />
      </Item>
    );
  }
  goToLogin = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.Login);
  };

  signUp = () => {
    if (this.props.valid){
      return this.props
      .onSignUp(
        this.props.email,
        this.props.password,
        this.props.firstName,
        this.props.lastName,
        this.props.locale
      )
      .then(() => {
        showToast(I18n.t("login.messages.signUpSuccess"));
        this.goToLogin();
      })
      .catch(error => {
        showToast(error);
        throw error;
      });
    }
    else {
      showToast(I18n.t("login.messages.invalidSignUpData"));
      return new Promise(() => {
        throw new Error(I18n.t("login.messages.invalidSignUpData"));
      });
    }
  };

  render() {
    return (
      <LinearGradient
        colors={GRADIENT_COLORS}
        style={styles.linearGradient}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.formContainer}>
            <Field
              name="email"
              component={this.renderInput}
              type="email"
              validate={[emailRegexCheck, required, maxLength100]}
            />
            <Field name="firstName"
            component={this.renderInput}
            type="text"
            validate={ [required, maxLength70] }/>
            <Field name="lastName"
            component={this.renderInput}
            type="text"
            validate={ [required, maxLength70] }/>
            <Field name="locale"
            component={this.renderInput}
            type="text"
            validate={ [minLength4, maxLength30, required] }
            />
            <Field
              name="password"
              component={this.renderInput}
              type="password"
              parse={handleMaxLength(maxLength30BlockInput + 1)}
              validate={[minLength4, maxLength30, required]}
            />
            <ButtonSubmit
              onPress={this.signUp}
              buttonText={I18n.t("login.buttons.signup")}
              {...this.props}
            />
          </View>
          <View style={styles.signInView}>
            <Text style={styles.text}>{I18n.t("login.hint.or")}</Text>
            <TouchableOpacity onPress={this.goToLogin} activeOpacity={1}>
              <Text style={styles.signInText}>
                {I18n.t("login.buttons.login")}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const SignUp = reduxForm({
  form: "signUp"
})(SignUpForm);

const selector = formValueSelector("signUp");

const mapStateToProps = state => ({
  email: selector(state, "email"),
  firstName: selector(state, "firstName"),
  lastName: selector(state, "lastName"),
  locale: selector(state, "locale"),
  password: selector(state, "password")
});

const mapDispatchToProps = dispatch => ({
  onSignUp: (email, password, fullName, lastName, locale) =>
    dispatch(signUpUser(email, password, fullName, lastName, locale))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
