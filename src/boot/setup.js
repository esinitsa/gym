import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { initializeI18n } from "../i18n";
import App from "../App";

export default class Setup extends React.Component {
  constructor() {
    super();
    this.state = {
      store: store,
      persistor: persistor,
    };
  }

  componentDidMount() {
    this.state.store && initializeI18n(this.state.store, "ru");
  }
  render() {
    return (
      <Provider store={store}>
       <PersistGate loading={ null } persistor={ this.state.persistor }>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}
