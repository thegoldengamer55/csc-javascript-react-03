import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message.js'
import Counter from './components/Counter.js';
import FunctionClick from './components/FunctionClick.js';
import ClassClick from './components/ClassClick.js';
import EventBind from './components/EventBind.js';
import Greeting from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greeting/>
    </div>
  );
}

export default App;
