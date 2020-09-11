import React from "react";
import "./App.css";
import AppTitle from "./AppTitle.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  render() {
    if (!this.state.loggedIn) {
      return <AppTitle loggedIn={this.state.loggedIn}></AppTitle>;
    }
  }
}

export default App;
