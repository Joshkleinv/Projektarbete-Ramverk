import React from 'react';
import './App.css'
import { BrowserRouter, Route } from "react-router-dom"
import { Home } from "./Home";
import { Login} from "./Login";
import Registration from "./Registration";

export const App = () => {
  return (
      <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/login" component={Login} />
      </BrowserRouter>
  );
};
