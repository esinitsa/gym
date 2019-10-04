import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { userReducer } from "../components/login/reducer";
import { personalReducer } from "../components/personal/reducer";
import { scheduleReducer } from "../components/schedule/reducer";
import { onBoardingReducer } from "../components/onBoarding/reducer";
import { i18nReducer } from "react-redux-i18n";


const appReducer = combineReducers({
  user: userReducer,
  personal: personalReducer,
  schedule: scheduleReducer,
  form: formReducer,
  i18n: i18nReducer,
  onBoarding: onBoardingReducer
});

export default appReducer;
