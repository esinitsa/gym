import { Input, Item, Label, View, Text } from "native-base";
import React from "react";
import { SafeAreaView, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { Field, formValueSelector, reduxForm } from "redux-form";
import { loginUser, refreshToken } from "../../components/login/actions";
import ButtonSubmit from "../common/buttons/submit";
import { NavigationType } from "../../constants/navigationTypes";
import LinearGradient from "react-native-linear-gradient";
import { showToast } from "../../services/UIActions";
import styles from "./styles";
import { GRADIENT_COLORS } from "../../constants/cssConstants";
import { CustomText } from "../common/text/customText";
const logo = require("../../../assets/images/logo.png");

class LoginForm extends React.PureComponent {
  componentWillMount() {
    /*   this.props.refreshToken(this.props.user.auth); */
    this.props.user.isTokenValid &&
      this.checkAdminAndRedirect(this.props.user.userProfile);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user.userProfile && newProps.user.isTokenValid) {
      this.checkAdminAndRedirect(newProps.user.userProfile);
    }
  }

  checkAdminAndRedirect = user => {
    const isAdmin = user.roles.includes("ADMIN");
    if (isAdmin) {
      return this.goToPersonalPanel();
    } else {
      return this.goToProfile();
    }
  };

  login = () => {
    return this.props
      .onLogin(this.props.login, this.props.password)
      .then(res => {
        return this.checkAdminAndRedirect(res.user);
      })
      .catch(error => {
        showToast(error);
        throw error;
      });
  };

  goToPersonalPanel = () => this.props.navigation.navigate(NavigationType.Personal);

  goToProfile = () => this.props.navigation.navigate(NavigationType.Home);

  goToSignUp = () => this.props.navigation.navigate(NavigationType.SignUp);

  renderInput = ({ input }) => {
    return (
      <Item floatingLabel style={styles.item}>
        <Label style={styles.label}>
          {I18n.t(`login.placeholders.${input.name}`)}
        </Label>
        <Input
          style={styles.inputText}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={input.name === "login" ? "email-address" : "default"}
          secureTextEntry={input.name === "password"}
          {...input}
        />
      </Item>
    );
  };

  render() {
    return (
      <LinearGradient colors={GRADIENT_COLORS} style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>
          <Image style={styles.logo} source={logo} />
          <View style={styles.loginView}>
            <Field name="login" component={this.renderInput} type="text" />
            <Field
              name="password"
              component={this.renderInput}
              type="password"
            />
            <ButtonSubmit
              onPress={this.login}
              buttonText={I18n.t("login.buttons.login")}
              {...this.props}
            />
          </View>
          <View style={styles.signUpView}>
            <Text style={styles.text}>{I18n.t("login.hint.or")}</Text>
            <TouchableOpacity onPress={this.goToSignUp} activeOpacity={1}>
              <CustomText style={styles.signUpText} text={I18n.t("login.buttons.signup")} />
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
  user: state.user,
  token: state.user.token
});

const mapDispatchToProps = dispatch => ({
  onLogin: (login, password) => dispatch(loginUser(login, password)),
  refreshToken: auth => dispatch(refreshToken(auth)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
