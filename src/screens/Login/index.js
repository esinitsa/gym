import { Container, Input, Item, Label, Text, View } from "native-base";
import React from "react";
import { Image, SafeAreaView, TouchableOpacity, StatusBar } from "react-native";
import { connect } from "react-redux";
import { I18n } from "react-redux-i18n";
import { Field, formValueSelector, reduxForm } from "redux-form";
import { loginUser, refreshToken } from "../../components/login/actions";
import { NavigationType } from "../../constants/navigationTypes";
import { showToast } from "../../services/UIActions";
import theme from "../../styles";
import {
  loginGoToSignup,
  loginInputEmail,
  loginInputPassword,
  loginGoToHome
} from "../../components/onBoarding/actions";
import ButtonSubmit from "../common/buttons/submit";
import { CustomText } from "../common/text/customText";
import { checkUserRole } from "../../services/filter";
import OnBoardingLoginForm from "../OnBoarding/Login";
import styles from "./styles";

class LoginForm extends React.PureComponent {
  componentWillMount() {
    this.props.user.isTokenValid &&
      this.checkAdminAndRedirect(this.props.user.userProfile);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user.userProfile && newProps.user.isTokenValid) {
      this.checkAdminAndRedirect(newProps.user.userProfile);
    }
  }

  checkAdminAndRedirect = user => this.goTo(checkUserRole(user));

  login = () => {
    return this.props
      .onLogin(this.props.login, this.props.password)
      .then(res => this.checkAdminAndRedirect(res.user))
      .catch(error => {
        showToast(error);
        throw error;
      });
  };

  goTo = (screen, params) => this.props.navigation.navigate(screen, params);

  goToSignup = () => {
    this.goTo(NavigationType.SignUp);
    this.props.activateSignup();
  };

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
      <Container>
        <SafeAreaView style={styles.container}>
          <StatusBar
            backgroundColor={theme.colors.container}
            barStyle="dark-content"
          />
          <Image style={styles.logo} source={theme.images.logo} />
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
            <TouchableOpacity onPress={this.goToSignup} activeOpacity={1}>
              <CustomText
                style={styles.signUpText}
                text={I18n.t("login.buttons.signup")}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <OnBoardingLoginForm />
      </Container>
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
  activateSignup: () => dispatch(loginGoToSignup()),
  activateInputEmail: () => dispatch(loginInputEmail()),
  activateInputPassword: () => dispatch(loginInputPassword()),
  activateHome: () => dispatch(loginGoToHome())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
