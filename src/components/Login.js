import React from 'react'
import { Link } from "react-router-dom";
import './Login.css';
import './App.css';
import {Container, Divider, Form, Header} from "semantic-ui-react";


class Login extends React.Component{
    state = {
        emailAddress: '',
        password: ''
    };

    render(){
        return (
            <Container>
                <Form>
                    <Header as="h2">
                    Login
                    </Header>
                    <Divider />
                    <Form.Group widths='equal'>
                        <Form.Input
                            label="Email Address"
                            placeholder="Email Address"
                            name="emailAddress"
                            type="email"
                        />
                        <Form.Input
                            label="Password"
                            placeholder="Password"
                            name="password"
                            type="password"
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
        )
    }
}

export default Login;
