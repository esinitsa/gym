import {
  LOGIN_GO_TO_SIGNUP,
  LOGIN_AUTH,
  LOGIN_GO_TO_HOME,
  SIGNUP_GO_TO_LOGIN,
  SIGNUP_SUBMIT,
  SKIP_AUTH,
  HOME_GO_TO_SUBSCRIPTIONS,
  HOME_GO_TO_NOTES,
  HOME_GO_TO_MY_CALENDAR,
  CALENDAR_GO_TO_HOME,
  HOME_GO_TO_MAKE_AN_APPOINTMENT,
  SUBSCRIPTIONS_EXTEND_CARD,
  SUBSCRIPTIONS_GO_TO_HOME,
  NOTES_GO_TO_HOME
} from "./constants";
import {
  NONE,
  AUTO,
  BOX_NONE,
  BOX_ONLY
} from "../../constants/onBoardingStates";

export const loginGoToSignup = () => ({
  type: LOGIN_GO_TO_SIGNUP,
  previousStep: AUTO,
  nextStep: NONE
});

export const loginInputAuth = () => ({
  type: LOGIN_AUTH,
  previousStep: AUTO,
  nextStep: NONE
});

export const loginGoToHome = () => ({
  type: LOGIN_GO_TO_HOME,
  previousStep: AUTO,
  nextStep: NONE
});

export const signupSubmit = () => ({
  type: SIGNUP_SUBMIT,
  previousStep: AUTO,
  nextStep: NONE
});

export const signupGoToLogin = () => ({
  type: SIGNUP_GO_TO_LOGIN,
  previousStep: AUTO,
  nextStep: NONE
});

export const homeGoToSubscriptions = () => ({
  type: HOME_GO_TO_SUBSCRIPTIONS,
  previousStep: AUTO,
  nextStep: NONE
});

export const homeGoToNotes = () => ({
  type: HOME_GO_TO_NOTES,
  previousStep: AUTO,
  nextStep: NONE
});

export const homeGoToMyCalendar = () => ({
  type: HOME_GO_TO_MY_CALENDAR,
  previousStep: AUTO,
  nextStep: NONE
});

export const subscriptionsExtendCard = () => ({
  type: SUBSCRIPTIONS_EXTEND_CARD,
  previousStep: AUTO,
  nextStep: NONE
});

export const subscriptionGoToHome = () => ({
  type: SUBSCRIPTIONS_GO_TO_HOME,
  previousStep: AUTO,
  nextStep: NONE
});

export const notesGoToHome = () => ({
  type: NOTES_GO_TO_HOME,
  previousStep: AUTO,
  nextStep: NONE
});

export const calendarGoToHome = () => ({
  type: CALENDAR_GO_TO_HOME,
  previousStep: AUTO,
  nextStep: NONE
});

export const skipAuth = () => ({
  type: SKIP_AUTH,
  skip: NONE
});
