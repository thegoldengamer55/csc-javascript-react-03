import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message.js'
import Counter from './components/Counter.js';
import FunctionClick from './components/FunctionClick.js';
import ClassClick from './components/ClassClick.js';
import EventBind from './components/EventBind.js';
import Greeting from './components/Greet';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Table/>
      {/* <StyleSheet main={true}/> */}
    </div>
  );
}

export default App;
