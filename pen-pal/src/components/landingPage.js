import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      loginModal: false,
      signUpModal: false
    };
    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  }
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }
  toggleSignUp() {
    this.setState({
      signUpModal: !this.state.signUpModal
    });
  }
  toggleLogin() {
    this.setState({
      loginModal: !this.state.loginModal
    });
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  loginHandler = event => {
    console.log(this.props);
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("response", response.data);
        this.props.setUser({
          username: this.state.username,
          userId: response.data.id
        });
        localStorage.setItem("authToken", response.data.token);
        this.props.history.push("/penpals"); //TODO:Put a route here
        this.toggleLogin();
      })
      .catch(error => {
        console.log("error:", error);
      });
  };
  signupHandler = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/users", this.state)
      .then(response => {
        console.log("New account created! Login to continue.");
        this.props.history.push("/login");
      })
      .catch(error => {
        alert("There was an error creating a new account");
      });
  };
  render() {
    return (
      <div>
        <Button className="mr-1" color="danger" onClick={this.toggleSignUp}>
          Sign Up
        </Button>
        <Modal isOpen={this.state.signUpModal} toggle={this.toggleSignUp}>
          <ModalHeader toggle={this.toggleSignUp}>
            Create An Account
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.loginHandler.bind(this)}>
              <FormGroup>
                <Label for="username">User Name</Label>
                <Input
                  required
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.inputHandler}
                  placeholder="Enter your user name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                  required
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.inputHandler}
                  placeholder="Enter your password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password">Confirm Password</Label>
                <Input
                  required
                  type="password"
                  name="password"
                  value={this.state.confirmPassword}
                  onChange={this.inputHandler}
                  placeholder="Enter your password"
                />
              </FormGroup>
              <Button disabled={!this.validateForm()}>Submit</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleSignUp}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Button className="ml-1" color="danger" onClick={this.toggleLogin}>
          Login
        </Button>
        <Modal isOpen={this.state.loginModal} toggle={this.toggleLogin}>
          <ModalHeader toggle={this.toggleLogin}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.loginHandler.bind(this)}>
              <FormGroup>
                <Label for="username">User Name</Label>
                <Input
                  required
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.inputHandler}
                  placeholder="Enter your user name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                  required
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.inputHandler}
                  placeholder="Enter your password"
                />
              </FormGroup>
              <Button disabled={!this.validateForm()}>Submit</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleLogin}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Landing);
