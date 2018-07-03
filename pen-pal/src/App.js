import React, { Component } from "react";
import "./App.css";
import Authenticate from "./Authenticate/Authenticate";
import PenpalsList from "./components/PenpalsList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "./components/landingPage";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: undefined
    };
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    this.setState({ user: this.setState.user });
  }
  setUser(user) {
    this.setState({ user: user });
  }
  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} />
        <Landing setUser={this.setUser} />
        <Route
          path="/penpals"
          render={() => <PenpalsList user={this.state.user} />}
        />
      </div>
    );
  }
}
export default App;
