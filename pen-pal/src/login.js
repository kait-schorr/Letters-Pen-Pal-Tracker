import React, { Component } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:"",
            password:""
        };
    }

    validateForm() {
        return this.state.user.length > 0 && this.state.password.length > 0;
    }

    inputHandler = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    loginSubmitHandler = event => {
        event.preventDefault();
        axios
            .post('https://localhost:5000/api/login', this.state)
            .then(response =>{
                console.log('response', response.data);
                localStorage.setItem('authToken', response.data.token);
                this.props.history.push('')       //TODO:Put a route here
            }).catch( error => {
                console.log('error': error)
            })
    }

    render() {
        return (
            <Container>
                <h2>Sign In:</h2>
                <Form onSubmit= { this.loginSubmitHandler.bind(this) }>
                    <FormGroup>
                    <Label for="username">User Name</Label>
                    <Input required type="text" name="username" value={this.state.username} onChange={ this.inputHandler } placeholder="Enter your user name" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input required type="password" name="password" value={this.state.password} onChange={ this.inputHandler } placeholder="Enter your password" />
                    </FormGroup>
                    <Button disabled={!this.validateForm()}>Submit</Button>
                </Form>
            </Container>
        );
    }
}