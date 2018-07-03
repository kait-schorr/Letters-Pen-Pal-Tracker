import React, { Component } from "react";
import Penpal from "./Penpal";
import "./PenpalList.css";

class PenpalsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      penpals: []
    };
  }
  render() {
    return (
      <div className="friends-card">
        {/* {props.penpals.map(penpal => (
        <Penpal
          key={penpal.id}
          name={penpal.name}
          penpal={penpal.penpal}
          letter={penpal.letter}
          // picture={friend.picture}
        />
      ))} */}
        <h1>PenpalList Component</h1>
        {this.props.user != undefined && this.props.user.username}
        <Penpal />
      </div>
    );
  }
}

export default PenpalsList;
