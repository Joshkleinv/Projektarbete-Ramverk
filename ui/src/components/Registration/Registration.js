import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container, Divider, Form, Header } from "semantic-ui-react";
import './Registration.css'
import '../App.css';

class Registration extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        passwordConfirmation: '',
        nameError: false,
        lastNameError: false,
        emailError: false,
        passwordError: false,
        passwordConfirmationError: false,
    };

    handleSubmit(event) {
        event.preventDefault();
        let error = false;

        if(this.state.emailAddress == ''){
            this.setState({emailError: true});
            error =  true;
        }else{
            this.setState({emailError: false});
        }
        
        if(this.state.password.length < 8 ){
            this.setState({passwordError: true});
            error =  true;
        }else{
            this.setState({passwordError: false});
        }
        if(this.state.password != this.state.passwordConfirmation){
            this.setState({passwordConfirmationError: true});
            error =  true;
        }else{
            this.setState({passwordConfirmationError: false});
        }
        


        if (!error) {
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
            })
        }
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    render() {
        return (
            <div className="leaf-bg">
                <Container className="pt-2">
                    <Form className="container-dark" onSubmit={event => this.handleSubmit(event)}>
                        <Header className="color-white" as="h2">
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
                                className="white-text"
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
                                name="password"
                                type="password"
                                placeholder="Password"
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
                                disabled={
                                   !this.state.emailAddress
                                || !this.state.firstName
                                || !this.state.lastName
                                || !this.state.password
                                || !this.state.passwordConfirmation
                                }
                            />
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Registration;
