import React from 'react';
import { Route } from 'react-router-dom'
import { News } from './News'
import Navbar from './Navbar'
import './App.css'


export const App = () => {
  return (
    <div>
      <Navbar />
      <News />
    </div>
  );
};
