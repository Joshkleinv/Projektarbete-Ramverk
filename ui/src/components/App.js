import React from 'react';
import { News } from './News/News'
import './App.css'
import {isAuthorized} from "../services/auth";

class App extends React.Component {
    componentDidMount() {
        if (!isAuthorized()) {
            this.props.history.replace('/home')
        }
    }

    render() {
        return (
            <News />
        );
    }
}

export default App;
