import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container, Divider, Form, Header, Message } from "semantic-ui-react";
import './Registration.css'
import '../App.css';

class Registration extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        passwordConfirmation: '',
        errors: []
    };

    handleSubmit(event) {
        this.setState({ errors: [] })
        event.preventDefault();
            axios({
                method: 'post',
                url: 'http://localhost:4000/register',
                data: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    emailAddress: this.state.emailAddress,
                    password: this.state.password,
                }
            }).then((result) => {
                if (result && result.data) {
                    this.props.history.replace('/')
                }
            }).catch((err) => {
                err.response.data.errors.forEach(error => {
                    this.setState({ errors: [...this.state.errors, error]})
                });
                console.log(err.response.data);
            })
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    render() {
        return (
            <div className="leaf-bg">
                <Container className="pt-2">
                    <Form error className="container-dark" onSubmit={event => this.handleSubmit(event)}>
                        <Header className="color-white" as="h2">
                            Create new account
                        </Header>
                        <Divider />
                        {this.state.errors.map(error => {
                            return (
                                <Message key={error.param}
                                    error
                                    header={error.msg}
                                />
                            )
                        })}
                        <Form.Group widths='equal'>
                            <Form.Input
                                required
                                label="First Name"
                                placeholder="First Name"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleOnChange}
                                error={this.state.nameError}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                required
                                label="Last Name"
                                placeholder="Last Name"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleOnChange}
                                error={this.state.lastNameError}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                required
                                label="Email Address"
                                placeholder="Email Address"
                                name="emailAddress"
                                type="email"
                                value={this.state.emailAddress}
                                onChange={this.handleOnChange}
                                error={this.state.emailError}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                required
                                label="Password"
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleOnChange}
                                error={this.state.passwordError}
                            />
                            <Form.Input
                                required
                                label="Confirm Password"
                                name="passwordConfirmation"
                                placeholder="Confirm Password"
                                type="password"
                                value={this.state.passwordConfirmation}
                                onChange={this.handleOnChange}
                                error={this.state.passwordConfirmationError}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Link to="/" className="align-link">
                                <Form.Button
                                    color='red'
                                    content="Cancel"
                                />
                            </Link>
                            <Form.Button
                                color='green'
                                content='Submit'
                                type="submit"
                            />
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Registration;
