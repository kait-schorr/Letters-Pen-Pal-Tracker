import React, { Component } from "react";
import Penpal from "./Penpal";
import "./PenpalList.css";
import axios from "axios";
import { Container, Row } from "reactstrap";

class PenpalsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      penpals: []
    };
  }
  getPenpals() {
    let config = {
      headers: { Authorization: localStorage.getItem("authToken") }
    };
    console.log(config);
    axios
      .get(
        `http://localhost:5000/api/penpals/${this.props.user.userId}`,
        config
      )
      .then(response => {
        this.setState({ penpals: response.data });
      });
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props.user) {
      this.getPenpals();
    }
  }

  render() {
    return (
      <div className="friends-card">
        <h1>PenpalList Component</h1>
        <Container>
          <Row>
            {this.state.penpals.map(penpal => (
              <Penpal
                key={penpal._id}
                name={penpal.name}
                address={penpal.address}
                letters={penpal.letters}
                // picture={friend.picture}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default PenpalsList;
