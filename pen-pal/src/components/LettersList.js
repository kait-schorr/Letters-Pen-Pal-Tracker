import React, { Component } from "react";
import Letter from "./Letter";
import axios from "axios";
import { Container, Row } from "reactstrap";

class LettersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: []
    };
  }
  getLetters() {
    let config = {
      headers: { Authorization: localStorage.getItem("authToken") }
    };
    console.log(config);
    axios
      .get(
        `http://localhost:5000/api/letters/${this.props.user.userId}/${
          this.props.key
        }`,
        config
      )
      .then(response => {
        console.log(response.data);
        this.setState({ letters: response.data });
      });
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props.user) {
      console.log("Get Letters executed");
      this.getLetters();
    }
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.letters.map(letter => (
            <Letter
              key={letter._id}
              penpal={letter.penpal}
              outbound={letter.outbound}
              image={letter.image}
              date={letter.date}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default LettersList;
