import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {isAuthorized} from "./Auth";
import Navbar from '../components/Navbar/Navbar'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={ props =>
            isAuthorized() ? (
                <React.Fragment>
                    <Navbar {...props} />
                    <Component {...props} />
                </React.Fragment>
            ) : (
                <Redirect
                    to={{
                    pathname: "/home",
                    state: { from: props.location }
                    }}
                />
            )
        }
    />
);