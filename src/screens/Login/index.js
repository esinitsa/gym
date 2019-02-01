import React from "react";
import {
  View, Text, Input, Item, Container
} from "native-base";
import { Button } from "react-native";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import {
  loginUser,
} from "../../components/login/actions";

class LoginForm extends React.PureComponent {

  renderInput({ input }) {
    // eslint-disable-next-line no-console
    return (
      <View>
      <Item>
        <Input
            autoCapitalize="none"
            autoCorrect={ false }
            keyboardType={ input.name === "login" ? "email-address" : "default" }
            placeholder={ input.name === "login"
              ? "login"
              : "password"}
            secureTextEntry={ input.name === "password" ? true : false }
            { ...input }
        />
      </Item>
    </View>
    );
}

login = () => {
  // eslint-disable-next-line no-console
  console.log("signup");
      this.props.onLogin(
          this.props.user,
          this.props.password,
      );
};

  render() {
    return (
      <Container>
        <View>
            <Text>Login</Text>
            <Field
              name="login"
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
          onPress={this.login}
          title="Press Me" />
        </View>
      </Container>
    );
  }
}

const Login = reduxForm({
  form: "login",
})(LoginForm);

const selector = formValueSelector("login");

const mapStateToProps = state => ({
    user: selector(state, "login"),
    password: selector(state, "password"),
});

const mapDispatchToProps = dispatch => ({
    onLogin: (login, password) => dispatch(loginUser(login, password)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
