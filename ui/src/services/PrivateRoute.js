import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {isAuthorized} from "./Auth";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={ props =>
            isAuthorized() ? (
                <Component {...props} />
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