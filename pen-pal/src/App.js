import React, { Component } from "react";
import "./App.css";
import friends from "./data";
import FriendsList from "./components/FriendsList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: ""
    };
  }

  componentDidMount() {
    this.setState({ friends: [...friends] });
  }

  render() {
    return (
      <div className="App">
        <h1>Pen Pals</h1>
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
