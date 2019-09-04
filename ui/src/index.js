import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import { Route } from "react-router-dom"
import { configureStore } from "./redux_setup/configureStore";
import { Provider } from "react-redux";

import App from './components/App';
import Login from "./components/Login/Login";
import Friends from "./components/Friends/Friends";
import Registration from "./components/Registration/Registration";
import { Home } from "./components/Home/Home";
import { Chat } from "./components/Chat/Chat";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={App}/>
            <Route path="/chat" component={Chat}/>
            <Route path="/friends" component={Friends}/>
            <Route path="/home" component={Home}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/login" component={Login} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
