import { Input, Item, Label, View, Text } from "native-base";
import React from "react";
import { SafeAreaView, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { Field, formValueSelector, reduxForm } from "redux-form";
import { loginUser } from "../../components/login/actions";
import ButtonSubmit from "../common/buttons/submit";
import { NavigationType } from "../../constants/navigationTypes";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
const logo = require("../../../assets/images/logo.png");

class LoginForm extends React.PureComponent {

  goToSignUp = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.SignUp);
  };

  login = () => {
    this.props
      .onLogin(this.props.login, this.props.password)
      .then(res => {
        const isAdmin = this.props.user.userProfile.roles.includes("ADMIN");
        if (isAdmin)
          {this.goToPersonalPanel();}
        else
          {this.goToProfile();}
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error); // TODO ALERT
      });
  };

  goToProfile = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.Client);
  }

  goToPersonalPanel = () => {
    const { navigation } = this.props;
    navigation.navigate(NavigationType.Personal);
  }

  renderInput = ({ input }) => {
    return (
      <Item floatingLabel style={{ marginTop: 10 }}>
        <Label style={{ color: "white", fontWeight: "200" }}>
          {input.name === "login"
            ? I18n.t("login.placeholders.emailOrUsername")
            : I18n.t("login.placeholders.password")}
        </Label>
        <Input
          style={styles.inputText}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#ffffff"
          keyboardType={input.name === "login" ? "email-address" : "default"}
          secureTextEntry={input.name === "password"}
          {...input}
        />
      </Item>
    );
  };

  render() {
    return (
      <LinearGradient colors={["#ffffff", "#093145", "#00AC6B"]} style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>
          <Image style={styles.logo} source={logo} />
          <View style={styles.loginView}>
            <Field name="login" component={this.renderInput} type="text" />
            <Field name="password" component={this.renderInput} type="password" />
            <ButtonSubmit
              onPress={this.login}
              buttonText={I18n.t("login.buttons.login")}
              {...this.props}
            />
          </View>
          <View style={styles.signUpView}>
            <Text style={styles.text}>{I18n.t("login.hint.or")}</Text>
            <TouchableOpacity onPress={this.goToSignUp} activeOpacity={1}>
              <Text style={styles.signUpText}>
                {I18n.t("login.buttons.signup")}
              </Text>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
      </LinearGradient>
    );
  }
}

const Login = reduxForm({
  form: "login"
})(LoginForm);

const selector = formValueSelector("login");

const mapStateToProps = state => ({
  login: selector(state, "login"),
  password: selector(state, "password"),
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  onLogin: (login, password) => dispatch(loginUser(login, password))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

