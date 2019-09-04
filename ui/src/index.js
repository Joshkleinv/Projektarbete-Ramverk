import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import { configureStore } from "./redux_setup/configureStore";
import {Provider} from "react-redux";
import { Route } from "react-router-dom"
import { Home } from "./components/Home";
import { Chat } from "./components/Chat";
import Login from "./components/Login";
import Registration from "./components/Registration";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Route exact path="/" component={App}/>
            <Route path="/chat" component={Chat}/>
            <Route path="/home" component={Home}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/login" component={Login} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);