import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import { Route } from "react-router-dom"
import { configureStore } from "./redux_setup/configureStore";
import { Provider } from "react-redux";

import { PrivateRoute } from "./services/PrivateRoute";
import App from './components/App';
import Login from "./components/Login/Login";
import Users from "./components/Users/Users";
import Registration from "./components/Registration/Registration";
import { Home } from "./components/Home/Home";
import Chat from "./components/Chat/Chat";
import PostNews from './components/News/PostNews';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PrivateRoute exact path="/" component={App}/>
            <PrivateRoute path="/postnews" component={PostNews}/>
            <PrivateRoute path="/chat" component={Chat}/>
            <PrivateRoute path="/users" component={Users}/>
            <Route path="/home" component={Home}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/login" component={Login} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
