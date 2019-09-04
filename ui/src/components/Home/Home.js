import React from 'react';
import {Container, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import './Home.css';
import '../App.css';

export const Home = () => {
    return (
        <div className="leaf-bg">
        <Container>
            <div className="align-center pt-2">
                <Header className="color-white" as="h2">Welcome!</Header>
                <p className="color-white">Please choose if you would like to sign up or login.</p>
                <Link to="/login">
                    <Button size='large' color='green'>Login</Button>
                </Link>
                <Link to="/registration">
                    <Button size='large' color='green'>Register account</Button>
                </Link>
            </div>
        </Container>
        </div>
    )
};
