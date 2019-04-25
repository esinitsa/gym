import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { NativeModules, Platform } from "react-native";
import { initializeI18n } from "../i18n";
import App from "../App";

export default class Setup extends React.PureComponent {
  state = { store, persistor };

  getLanguageCode = () => {
    let systemLanguage;
    if (Platform.OS === "android") {
      systemLanguage = NativeModules.I18nManager.localeIdentifier;
    } else {
      systemLanguage = NativeModules.SettingsManager.settings.AppleLocale;
    }
    const language = systemLanguage.substring(0, 2);
    return language.includes("en") || language.includes("ru") ? language : "en";
  };

  componentDidMount() {
    const systemLanguage = this.getLanguageCode();
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
