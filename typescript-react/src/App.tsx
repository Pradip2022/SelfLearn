import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonIncrement } from './component/ButtonIncrement';

const App:FC = ()=>{
  return (
    <div className="App">
      <h1>Creating a button that increments the value when clicked</h1>
      <ButtonIncrement/>
    </div>  
  );
}

export default App;
