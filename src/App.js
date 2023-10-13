import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Nav from './component/Nav';
import News from './component/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <News/>
      </div>
    )
  }
}
