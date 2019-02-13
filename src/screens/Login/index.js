import React from "react";
import { View, Text, Input, Item, Label } from "native-base";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { loginUser } from "../../components/login/actions";
import { I18n } from "react-redux-i18n";
import { SafeAreaView } from "react-native";
import ButtonSubmit from "../common/buttons/submit";

class LoginForm extends React.PureComponent {
  renderInput({ input }) {
    return (
      <Item floatingLabel style={{ marginTop: 10 }}>
        <Label style={{ color: "white", fontWeight: "200" }}>{input.name === "login"
          ? I18n.t("login.placeholders.emailOrUsername")
          : I18n.t("login.placeholders.password")}
        </Label>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#ffffff"
          keyboardType={input.name === "login" ? "email-address" : "default"}
          secureTextEntry={input.name === "password"}
          {...input}
        />
      </Item>
    );
  }

  login = () => this.props.onLogin(this.props.login, this.props.password);

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#2a264f", flex: 1, justifyContent: "center" }}>
        <View>
          <View style={{ padding: 20, marginBottom: 30 }}>
            <Field name="login" component={this.renderInput} type="text" />
            <Field name="password" component={this.renderInput} type="password" />
          </View>
          <ButtonSubmit onPress={this.login} {...this.props} />
        </View>
      </SafeAreaView>
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
