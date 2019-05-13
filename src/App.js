import { Root } from "native-base";
import React from "react";
import Navigation from "./navigation";

class App extends React.PureComponent {
  render() {
    return (
      <Root>
        <Navigation />
      </Root>
    );
  }
}

export default App;
