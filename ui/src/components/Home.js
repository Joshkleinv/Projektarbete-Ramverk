import React from 'react';
import './Home.css';
import './App.css';
import {Container, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";


export const Home = () => {
    return (
        <Container className="container">
            <div className="align-center">
                <Header as="h2">Welcome!</Header>
                <p className="color-white">Please choose if you would like to sign up or login.</p>
                <Link to="/login">
                    <Button size='large' color='green'>Login</Button>
                </Link>
                <Link to="/registration">
                    <Button size='large' color='green'>Register account</Button>
                </Link>
            </div>
        </Container>
    )
};
