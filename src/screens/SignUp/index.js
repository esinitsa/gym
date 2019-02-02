import React from "react";
import {
  View, Text, Input, Item, Container
} from "native-base";
import { Button } from "react-native";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { signUpUser } from "../../components/login/actions";
import { I18n } from "react-redux-i18n";

class SignUpForm extends React.PureComponent {

  renderInput({ input }) {
    // eslint-disable-next-line no-console
    return (
      <View>
      <Item>
        <Input
            autoCapitalize="none"
            autoCorrect={ false }
            keyboardType={ input.name === "login" ? "email-address" : "default" }
            placeholder={
                            input.name === "email"
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
            secureTextEntry={ input.name === "password" ? true : false }
            { ...input }
        />
      </Item>
    </View>
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
      <Container>
        <View>
            <Text>
              {I18n.t("login.placeholders.email")}
            </Text>
            <Field
              name="email"
              component={this.renderInput}
              type="email"
            />
              <Text>
                {I18n.t("login.placeholders.firstName")}
              </Text>
            <Field
              name="firstName"
              component={this.renderInput}
              type="text"
            />
              <Text>
                {I18n.t("login.placeholders.lastName")}
              </Text>
            <Field
              name="lastName"
              component={this.renderInput}
              type="text"
            />
            <Text>
              {I18n.t("login.placeholders.locale")}
            </Text>
            <Field
              name="locale"
              component={this.renderInput}
              type="text"
            />
            <Text>
              {I18n.t("login.placeholders.password")}
            </Text>
            <Field
              name="password"
              component={this.renderInput}
              type="password"
            />
          <Button
          onPress={this.signUp}
          title="Press Me" />
        </View>
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
