import React from "react";
import {
  View, Text, Input, Item, Container
} from "native-base";
import { Button } from "react-native";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { signUpUser } from "../../components/login/actions";

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
            placeholder={input.name}
            secureTextEntry={ input.name === "password" ? true : false }
            { ...input }
        />
      </Item>
    </View>
    );
}

signUp = () => {
  // eslint-disable-next-line no-console
  console.log("signup");
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
            <Text>Login</Text>
            <Field
              name="email"
              component={this.renderInput}
              type="email"
            />
              <Text>FirstName</Text>
            <Field
              name="fistName"
              component={this.renderInput}
              type="text"
            />
              <Text>LastName</Text>
            <Field
              name="lastName"
              component={this.renderInput}
              type="text"
            />
            <Text>Locale</Text>
            <Field
              name="locale"
              component={this.renderInput}
              type="text"
            />
            <Text>Password</Text>
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
