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
  HOME_GO_TO_MAKE_AN_APPOINTMENT,
  SUBSCRIPTIONS_EXTEND_CARD,
  SUBSCRIPTIONS_GO_TO_HOME,
  CALENDAR_GO_TO_HOME,
  NOTES_GO_TO_HOME
} from "./constants";
import { mapValues } from "lodash";

const login = {
  stepGoToSignup: "none",
  stepAuth: "auto",
  stepGoToHome: "auto"
};

const signup = {
  stepSignup: "none",
  stepGoToLogin: "auto"
};

const home = {
  stepGoToSubscriptions: "none",
  stepGoToNotes: "auto",
  stepGoToMyCalendar: "auto",
  stepGoToMakeAnAppointment: "auto"
};

const subscriptions = {
  stepExtendCard: "auto",
  stepGoToHome: "auto"
};

const notes = {
  stepGoToHome: "auto"
};

const calendar = {
  stepGoToHome: "auto"
};

const initialState = {
  login: {
    stepGoToSignup: "none",
    stepAuth: "auto",
    stepGoToHome: "auto"
  },
  signup: {
    stepSignup: "none",
    stepGoToLogin: "auto"
  },
  home: {
    stepGoToSubscriptions: "none",
    stepGoToNotes: "auto",
    stepGoToMyCalendar: "auto",
    stepGoToMakeAnAppointment: "auto"
  },
  subscriptions: {
    stepExtendCard: "auto",
    stepGoToHome: "auto"
  },
  notes: {
    stepGoToHome: "auto"
  },
  calendar: {
    stepGoToMyCalendar: "auto"
  }
};

export const onBoardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_GO_TO_SIGNUP:
      return {
        ...state,
        login: {
          ...login,
          stepGoToSignup: action.previousStep,
          stepGoToHome: action.nextStep
        }
      };
    case SIGNUP_SUBMIT:
      return {
        ...state,
        login: {
          ...login,
          stepAuth: action.nextStep,
          stepGoToHome: action.nextStep
        }
      };
    case SKIP_AUTH:
      return {
        ...state,
        login: mapValues({ ...login }, () => action.skip),
        signup: mapValues({ ...signup }, () => action.skip)
      };
    case HOME_GO_TO_SUBSCRIPTIONS:
      return {
        ...state,
        home: {
          ...home,
          stepGoToSubscriptions: action.previousStep
        },
        subscriptions: {
          ...subscriptions,
          stepExtendCard: action.nextStep
        }
      };
    case SUBSCRIPTIONS_EXTEND_CARD:
      return {
        ...state,
        subscriptions: {
          ...subscriptions,
          stepGoToHome: action.nextStep
        }
      };
    case SUBSCRIPTIONS_GO_TO_HOME:
      return {
        ...state,
        home: {
          ...home,
          stepGoToSubscriptions: action.previousStep,
          stepGoToNotes: action.nextStep
        },
        subscriptions: {
          ...subscriptions,
          stepGoToHome: action.previousStep
        }
      };
    case HOME_GO_TO_NOTES:
      return {
        ...state,
        notes: {
          ...notes,
          stepGoToHome: action.nextStep
        },
        home: {
          ...home,
          stepGoToSubscriptions: action.previousStep,
          stepGoToNotes: action.previousStep
        }
      };
    case HOME_GO_TO_MY_CALENDAR:
      return {
        ...state,
        calendar: {
          ...calendar,
          stepGoToHome: action.nextStep
        },
        home: {
          ...home,
          stepGoToSubscriptions: action.previousStep,
          stepGoToMyCalendar: action.previousStep
        }
      };
    case NOTES_GO_TO_HOME:
      return {
        ...state,
        notes: {
          ...notes,
          stepGoToHome: action.previousStep
        },
        home: {
          ...home,
          stepGoToSubscriptions: action.previousStep,
          stepGoToMyCalendar: action.nextStep
        }
      };
    case CALENDAR_GO_TO_HOME:
      return {
        ...state,
        calendar: {
          ...calendar,
          stepGoToHome: action.previousStep
        },
        home: {
          ...home,
          stepGoToSubscriptions: action.previousStep,
          stepGoToMakeAnAppointment: action.nextStep
        }
      };
    default:
      return state;
  }
};
