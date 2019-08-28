import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import { Home } from "./Home";

export const App = () => {
  return (
      <BrowserRouter>
        <div>
            <Home />
        </div>
      </BrowserRouter>
  );
};
