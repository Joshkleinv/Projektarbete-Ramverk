import React from 'react';
import './Registration.css'
import { Link } from "react-router-dom";
import { Container, Divider, Form, Select, Header } from "semantic-ui-react";

class Registration extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        passwordConfirmation: ''
    };

    render() {
        const options = [
            { key: 'm', text: 'Male', value: 'male' },
            { key: 'f', text: 'Female', value: 'female' },
            { key: 'o', text: 'Other', value: 'other' },
        ];

        return (
            <Container>
                <Form widths='equal'>
                    <Header as="h2">
                        Create new account
                    </Header>
                    <Divider />
                    <Form.Group>
                        <Form.Input
                            required
                            label="First Name"
                            placeholder="First Name"
                            name="firstName"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            required
                            label="Last Name"
                            placeholder="Last Name"
                            name="lastName"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            required
                            className="white-text"
                            label="Email Address"
                            placeholder="Email Address"
                            name="emailAddress"
                            type="email"
                        />
                        <Form.Field
                            control={Select}
                            label='Gender'
                            options={options}
                            placeholder='Gender'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            required
                            label="Password"
                            name="password"
                            type="password"
                        />
                        <Form.Input
                            required
                            label="Confirm Password"
                            name="passwordConfirmation"
                            type="password"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Button
                            color='green'
                            content='Submit'
                            type="submit"
                        />
                        <Link to="/">
                            <Form.Button
                                color='red'
                                content="Cancel"
                            />
                        </Link>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

export default Registration;
