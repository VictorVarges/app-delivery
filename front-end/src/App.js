import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import Routs from './router/Routs';

function App() {
  return (
    <BrowserRouter>
      <Routs />
    </BrowserRouter>
  );
}

export default App;
