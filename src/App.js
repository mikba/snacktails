import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Myvideo from "./assets/home/homeloop.mp4";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <video src={Myvideo} autoPlay loop muted />
	  <div className="App-Content">
		<div className="App-Brick">one</div>
		<div className="App-Brick">two</div>
		<div className="App-Brick">tree</div>
	  </div>
          
        </header>
      </div>
    );
  }
}

export default App;
