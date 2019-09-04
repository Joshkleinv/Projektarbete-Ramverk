import React from 'react';
import { Route } from 'react-router-dom'
import { News } from './News'
import { Test } from './Test'
import './App.css'


export const App = () => {
  return (
    <div>
      <Navbar />
      <News />
    </div>
  );
};
