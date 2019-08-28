import React from 'react'
import { Button, Form} from "semantic-ui-react";


class Login extends React.Component{
    state = {
        emailAddress: '',
        password: ''
    }

    render(){
        return (
            <div>
                <Form>
                    <Form.Group required>
                        <Form.Input
                            label="Email Address"
                            placeholder="Email Address"
                            name="emailAddress"
                            value={emailAddress}
                        />
                        <Form.Input
                            label="Password"
                            placeholder="Password"
                            name="password"
                            value={password}
                        />
                        <Form.Button
                            Button="btnLogin"
                            placeholder="Login"
                            name="btnLogin"
                            value={btnLogin}
                        />
                    </Form.Group>
                </Form>
            </div>
    )
    }
};

export default Login;