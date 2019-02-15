import React from "react";
import {
  View, Input, Item, Label
} from "native-base";
import {  SafeAreaView } from "react-native";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { signUpUser } from "../../components/login/actions";
import { I18n } from "react-redux-i18n";
import ButtonSubmit from "../common/buttons/submit";

class SignUpForm extends React.PureComponent {

  renderInput({ input }) {
    return (
      <Item floatingLabel style={{ marginTop: 10 }}>
        <Label style={{ color: "white", fontWeight: "200" }}>{input.name === "email"
        ? I18n.t("login.placeholders.email")
        : input.name === "password"
          ? I18n.t("login.placeholders.password")
          : input.name === "firstName"
            ? I18n.t("login.placeholders.firstName")
            : input.name === "lastName"
              ? I18n.t("login.placeholders.lastName")
              : input.name === "locale"
                ? I18n.t("login.placeholders.locale")
                : ""
        }
        </Label>
        <Input
            autoCapitalize="none"
            autoCorrect={ false }
            keyboardType={ input.name === "login" ? "email-address" : "default" }
            secureTextEntry={ input.name === "password" ? true : false }
            { ...input }
        />
      </Item>
    );
}

signUp = () => {
      this.props.onSignUp(
          this.props.email,
          this.props.password,
          this.props.firstName,
          this.props.lastName,
          this.props.locale,
      );
};

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#2a264f", flex: 1, justifyContent: "center" }}>
         <View>
          <View style={{ padding: 20, marginBottom: 30 }}>
            <Field
              name="email"
              component={this.renderInput}
              type="email"
            />
            <Field
              name="firstName"
              component={this.renderInput}
              type="text"
            />
            <Field
              name="lastName"
              component={this.renderInput}
              type="text"
            />
            <Field
              name="locale"
              component={this.renderInput}
              type="text"
            />
            <Field
              name="password"
              component={this.renderInput}
              type="password"
            />
            </View>
              <ButtonSubmit onPress={this.signUp} buttonText={I18n.t("login.buttons.signup")} {...this.props} />
           </View>
      </SafeAreaView>
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
    password: selector(state, "password"),
});

const mapDispatchToProps = dispatch => ({
    onSignUp: (email, password, fullName, lastName, locale) => (
    dispatch(signUpUser(email, password, fullName, lastName, locale))),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
