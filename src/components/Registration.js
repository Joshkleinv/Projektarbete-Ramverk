import React from 'react';
import { Button, Form} from "semantic-ui-react";

class Registration extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
    };

    render() {
        return (
            <div>
                <Form>
                    <Form.Group required>
                        <Form.Input
                            label="First Name"
                            placeholder="First Name"
                            name="firstName"
                            value={firstName}
                        />
                        <Form.Input
                            label="Last Name"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                        />
                    </Form.Group>
                    <Form.Group required>
                        <Form.Input
                            label="Email Address"
                            placeholder="Email Address"
                            name="emailAddress"
                            value={emailAddress}
                        />
                    </Form.Group>
                    <Form.Group>
                        
                    </Form.Group>
                </Form>
            </div>
        )
    }
};

export default Registration;