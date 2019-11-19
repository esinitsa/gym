import { AUTO, NONE } from "../../constants/onBoardingStates";
import {
  CALENDAR_GO_TO_HOME,
  HOME_GO_TO_MY_CALENDAR,
  HOME_GO_TO_NOTES,
  HOME_GO_TO_SUBSCRIPTIONS,
  LOGIN_AUTH,
  LOGIN_GO_TO_HOME,
  LOGIN_GO_TO_SIGNUP,
  NOTES_GO_TO_HOME,
  SIGNUP_GO_TO_LOGIN,
  SIGNUP_SUBMIT,
  SKIP_AUTH,
  SUBSCRIPTIONS_EXTEND_CARD,
  SUBSCRIPTIONS_GO_TO_HOME
} from "./constants";

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
