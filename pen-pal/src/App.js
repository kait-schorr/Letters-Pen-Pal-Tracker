import React, { Component } from "react";
import "./App.css";
import Authenticate from "./Authenticate/Authenticate";
import PenpalsList from "./components/PenpalsList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "./landingPage";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    this.setState({ user: this.setState.user });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Landing />
        <Route path="/" component={PenpalsList} />
      </div>
    );
  }
}
export default App;
