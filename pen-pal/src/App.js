import React, { Component } from "react";
import "./App.css";
import friends from "./data";
import PenpalsList from "./components/PenpalsList";
import Authenticate from "./Authenticate/Authenticate";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PenpalForm from "./components/PenpalForm";
import { Container, Row, Col, Button } from "reactstrap";
import Landing from "./landingPage";
import NavBar from "./components/NavBar";

const routes = [
  {
    path: "/api/login",
    main: () => <login />
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      penpals: [],
      penpal: ""
    };
  }

  componentDidMount() {
    this.setState({ penpals: [...this.state.penpals] });
  }

  // addPenpal = event => {
  //   event.preventDefault();
  //   const penpals = this.state.penpals.slice();
  //   penpals.push({
  //     name: this.state.penpal,
  //     address: this.state.penpal,
  //     letters: this.state.penpal
  //   });
  //   this.setState({ penpals, penpal: "" });
  // };

  // submitHandler = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Landing />
        {/* <PenpalForm
          penpal={this.state.penpal}
          submitHandler={this.submitHandler}
          addPenpal={this.addPenpal}
        />
        <h1>Pen Pals</h1>
        <PenpalsList penpals={this.state.penpals} /> */}
      </div>
    );
  }
}
export default App;
// export default Authenticate(App);
