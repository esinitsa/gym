import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { userReducer } from "../components/login/reducer";


const appReducer = combineReducers({
  user: userReducer,
  form: formReducer,
});

export default appReducer;
