import React from 'react'
import { connect } from 'react-redux'
import { addActionCreator, subtractActionCreator, addAnyActionCreator, clearHistoryActionCreator, multiplyActionCreator } from '../actions'
import Button from '@material-ui/core/Button';  

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