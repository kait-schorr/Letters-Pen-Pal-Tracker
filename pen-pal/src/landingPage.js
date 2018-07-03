import React, { Component } from 'react';
import axios from 'axios';
import { Form,  FormGroup, Label, Input, Button} from 'reactstrap';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        };
    }
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    inputHandler = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    loginHandler = event => {
        event.preventDefault();
        axios
            .post('https://localhost:5000/api/login', this.state)
            .then(response => {
                console.log('response', response.data);
                localStorage.setItem('authToken', response.data.token);
                this.props.history.push('')       //TODO:Put a route here
            }).catch(error => {
                console.log('error:', error)
            })
    }
    signupHandler = event => {
        event.preventDefault();
        axios
            .post('http://localhost:5000/api/users', this.state)
            .then(response => {
                console.log('New account created! Login to continue.');
                this.props.history.push('/login');
            })
            .catch(error => {
                alert('There was an error creating a new account');
            });
    }
    render() {
        return (
            <div>
                {/* sign up modal */}
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Sign Up
                </button>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Sign Up Form</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <Form onSubmit={this.loginHandler.bind(this)}>
                                    <FormGroup>
                                        <Label for="username">User Name</Label>
                                        <Input required type="text" name="username" value={this.state.username} onChange={this.inputHandler} placeholder="Enter your user name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="Password">Password</Label>
                                        <Input required type="password" name="password" value={this.state.password} onChange={this.inputHandler} placeholder="Enter your password" />
                                    </FormGroup>
                                    <Button disabled={!this.validateForm()}>Submit</Button>
                                </Form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* login modal */}

                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Log In
                </button>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Sign Up Form</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <Form onSubmit={this.loginHandler.bind(this)}>
                                    <FormGroup>
                                        <Label for="username">User Name</Label>
                                        <Input required type="text" name="username" value={this.state.username} onChange={this.inputHandler} placeholder="Enter your user name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="Password">Password</Label>
                                        <Input required type="password" name="password" value={this.state.password} onChange={this.inputHandler} placeholder="Enter your password" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="Password">Confirm Password</Label>
                                        <Input required type="password" name="password" value={this.state.confirmPassword} onChange={this.inputHandler} placeholder="Enter your password" />
                                    </FormGroup>
                                    <Button disabled={!this.validateForm()}>Submit</Button>
                                </Form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;