import React from 'react';
import { News } from './News'
import Navbar from './Navbar'
import './App.css'
import { isAuthorized, getToken } from "../services/auth";


class App extends React.Component {
    componentDidMount() {
        if (!isAuthorized()) {
            this.props.history.replace('/home')
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <News />

            </div>
        );
    }
}

export default App;
