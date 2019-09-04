import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container, Divider, Form, Header } from "semantic-ui-react";
import './Registration.css'
import './App.css';

class Registration extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        passwordConfirmation: ''
    };

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.password === this.state.passwordConfirmation) {
            axios({
                method: 'post',
                url: 'http://localhost:4000/register',
                data: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    emailAddress: this.state.emailAddress,
                    password: this.state.password
                }
            }).then((result) => {
                if (result && result.data) {
                    this.props.history.replace('/')
                }
            })
        } else {
            alert('Password is not identical.')
        }
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    render() {
        return (
            <Container>
                <Form onSubmit={event => this.handleSubmit(event)}>
                    <Header as="h2">
                        Create new account
                    </Header>
                    <Divider />
                    <Form.Group widths='equal'>
                        <Form.Input
                            required
                            label="First Name"
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleOnChange}
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
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            required
                            className="white-text"
                            label="Email Address"
                            placeholder="Email Address"
                            name="emailAddress"
                            type="email"
                            value={this.state.emailAddress}
                            onChange={this.handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            required
                            label="Password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleOnChange}
                        />
                        <Form.Input
                            required
                            label="Confirm Password"
                            name="passwordConfirmation"
                            type="password"
                            value={this.state.passwordConfirmation}
                            onChange={this.handleOnChange}
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
        )
    }
}

export default Registration;
