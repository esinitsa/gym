import React from "react";
import {
  View, Text, Input, Item, Container, Button
} from "native-base";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import {
  loginUser,
} from "../../components/login/actions";
import { I18n } from "react-redux-i18n";

class LoginForm extends React.PureComponent {

  renderInput({ input }) {
    return (
      <View>
      <Item>
        <Input
            autoCapitalize="none"
            autoCorrect={ false }
            keyboardType={ input.name === "login" ? "email-address" : "default" }
            placeholder={ input.name === "login"
                            ? I18n.t("login.placeholders.emailOrUsername")
                            : I18n.t("login.placeholders.password") }
            secureTextEntry={ input.name === "password" ? true : false }
            { ...input }
        />
      </Item>
    </View>
    );
}

login = () => {
      this.props.onLogin(
          this.props.login,
          this.props.password,
      );
};

storeCheck = () => {
    // eslint-disable-next-line no-console
    console.log(this.props.user);
}

  render() {
    return (
      <Container>
        <View>
            <Text>
              {I18n.t("login.placeholders.emailOrUsername")}</Text>
            <Field
              name="login"
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
          <Button onPress={this.login}>
            <Text>
              Login
            </Text>
          </Button>
          <Button onPress={this.storeCheck}>
            <Text>
              Check store
            </Text>
          </Button>
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
    login: selector(state, "login"),
    password: selector(state, "password"),
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    onLogin: (login, password) => dispatch(loginUser(login, password)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
