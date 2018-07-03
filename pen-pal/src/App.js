import React, { Component } from "react";
import "./App.css";
import friends from "./data";
import PenpalsList from "./components/PenpalsList";
import Authenticate from "./Authenticate/Authenticate";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PenpalForm from "./components/PenpalForm";
import { Container, Row, Col, Button } from "reactstrap";
import Landing from "./landingPage"

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

<<<<<<< HEAD
  // componentDidMount() {
  //   this.setState({ penals: [...penpals] });
  // }
=======
  componentDidMount() {
    this.setState({ penpals: [...this.state.penpals] });
  }
>>>>>>> 4a396008346b04a1910ce88b66780a3927aa8b7e

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
      <Landing/>
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
