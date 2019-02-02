import React from "react";
import { Provider } from "react-redux";
import { store } from "./configureStore";
import { initializeI18n } from "../i18n";
import App from "../App";

export default class Setup extends React.Component {
  constructor() {
    super();
    this.state = {
      store: store,
    };
  }

  componentDidMount() {
    this.state.store && initializeI18n(this.state.store, "ru");
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
