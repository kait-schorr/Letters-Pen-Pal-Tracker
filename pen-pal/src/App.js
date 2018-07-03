import React, { Component } from "react";
import "./App.css";
import friends from "./data";
import FriendsList from "./components/FriendsList";
import Authenticate from "./Authenticate/Authenticate";
import { Link } from "react-router-dom";
import FriendForm from "./components/FriendForm";

const routes = [
  {
    path: ""
  }
];

class App extends Component {
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

  addFriend = event => {
    event.preventDefault();
    const friends = this.state.friends.slice();
    friends.push({
      name: this.state.friend,
      address: this.state.friend,
      letters: this.state.friend
    });
    this.setState({ friends, friend: "" });
  };

  submitHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <FriendForm
          value={this.state.friend}
          submitHandler={this.submitHandler}
          addFriend={this.addFriend}
        />
        <h1>Pen Pals</h1>
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default Authenticate(App);
