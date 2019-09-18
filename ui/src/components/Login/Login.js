import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import {Container, Divider, Form, Header, Message } from "semantic-ui-react";
import './Login.css';
import '../App.css';
import { setToken } from "../../services/Auth";

class Login extends React.Component{
    state = {
        emailAddress: '',
        password: '',
        errors: [],
    };

    handleSubmit(event) {
        this.setState({ errors: [] })
        event.preventDefault();
            axios({
                method: 'post',
                url: 'http://localhost:4000/login',
                data: {
                    emailAddress: this.state.emailAddress,
                    password: this.state.password
                }
            }).then((result) => {
                if (result && result.data && result.data.signedJWT) {
                    setToken(result.data.signedJWT);
                    this.props.history.replace('/')
                }
            }).catch((err) => {
                if (err.response.data.errors) {
                    err.response.data.errors.forEach(error => {
                        this.setState({ errors: [...this.state.errors, error]})
                    });
                } console.log(err.response.data)
            });
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    render(){
        return (
            <div className="leaf-bg">
                <Container className="pt-2">
                    <Form error className="container-dark" onSubmit={event => this.handleSubmit(event)}>
                        <Header className="color-white" as="h2">
                        Login
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
                                label="Email Address"
                                placeholder="Email Address"
                                name="emailAddress"
                                type="email"
                                value={this.state.emailAddress}
                                onChange={this.handleOnChange}
                            />
                            <Form.Input
                                label="Password"
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Link to="/" className="align-link">
                                <Form.Button
                                    color="red"
                                    content="Cancel"
                                />
                            </Link>
                            <Form.Button
                                color="green"
                                content="Login"
                                type="submit"
                            />
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Login;
