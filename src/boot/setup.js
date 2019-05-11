import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { initializeI18n } from "../i18n";
import { getLanguageCode } from "../services/language";
import App from "../App";

export default class Setup extends React.PureComponent {
  state = { store, persistor };

  componentDidMount() {
    const systemLanguage = getLanguageCode();
    this.state.store && initializeI18n(this.state.store, systemLanguage);
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={this.state.persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}
