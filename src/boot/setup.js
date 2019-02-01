import React from "react";
import { Provider } from "react-redux";
import { store } from "./configureStore";
import App from "../App";

export default class Setup extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
