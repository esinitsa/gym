import React from "react";
import { View, Input, Item, Label, Text, Container } from "native-base";
import { SafeAreaView, TouchableOpacity, StatusBar } from "react-native";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { signUpUser } from "../../components/login/actions";
import { I18n } from "react-redux-i18n";
import theme from "../../styles";
import styles from "./styles";
import { showToast } from "../../services/UIActions";
import {
  emailRegexCheck,
  required,
  maxLength30BlockInput,
  handleMaxLength,
  maxLength100,
  maxLength70,
  maxLength30,
  minLength4
} from "../../services/validations";
import { NavigationType } from "../../constants/navigationTypes";
import ButtonSubmit from "../common/buttons/submit";

class SignUpForm extends React.PureComponent {
  renderInput({ input }) {
    return (
      <Item floatingLabel style={styles.inputItem}>
        <Label style={styles.label}>
          {I18n.t(`login.placeholders.${input.name}`)}
        </Label>
        <Input
          autoCapitalize="none"
          style={styles.input}
          autoCorrect={false}
          keyboardType={input.name === "login" ? "email-address" : "default"}
          secureTextEntry={input.name === "password" ? true : false}
          {...input}
        />
      </Item>
    );
  }

  goToLogin = () => this.props.navigation.navigate(NavigationType.Login);

  signUp = () => {
    if (this.props.valid) {
      return this.props
        .onSignUp({
          email: this.props.email,
          password: this.props.password,
          firstName: this.props.firstName,
          lastName: this.props.lastName,
          locale: this.props.locale
        })
        .then(() => {
          showToast(I18n.t("login.messages.signUpSuccess"));
          this.goToLogin();
        })
        .catch(error => {
          showToast(error);
          throw error;
        });
    } else {
      showToast(I18n.t("login.messages.invalidSignUpData"));
      return new Promise(() => {
        throw new Error(I18n.t("login.messages.invalidSignUpData"));
      });
    }
  };

  render() {
    return (
     <Container>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={theme.colors.container} barStyle="dark-content" />
          <View style={styles.formContainer}>
            <Field
              name="email"
              component={this.renderInput}
              type="email"
              validate={[emailRegexCheck, required, maxLength100]}
            />
            <Field
              name="firstName"
              component={this.renderInput}
              type="text"
              validate={[required, maxLength70]}
            />
            <Field
              name="lastName"
              component={this.renderInput}
              type="text"
              validate={[required, maxLength70]}
            />
            <Field
              name="locale"
              component={this.renderInput}
              type="text"
              validate={[minLength4, maxLength30, required]}
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
        </Container>
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
