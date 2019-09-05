import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import {Container, Divider, Form, Header} from "semantic-ui-react";
import './Login.css';
import '../App.css';
import { setToken } from "../../services/Auth";
import { setEmailAddress } from "../../services/Auth";

class Login extends React.Component{
    state = {
        emailAddress: '',
        password: ''
    };

    handleSubmit(event) {
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
            });
            setEmailAddress(this.state.emailAddress);
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    render(){
        return (
            <div className="leaf-bg">
                <Container className="pt-2">
                    <Form className="container-dark" onSubmit={event => this.handleSubmit(event)}>
                        <Header className="color-white" as="h2">
                        Login
                        </Header>
                        <Divider />
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
