import React, { Component } from 'react';
import Person from './components/Person';
import Project from './components/Project';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="header">
          <div className="logo">LALA FRIENDS</div>
          <div className="menus">
            <button type="button" className="btn btn-light menu">Person</button>
            <button className="btn btn-light menu">Project</button>
          </div>
        </div>
        <div className="flexbox">
          <Person></Person>
          <Project></Project>
        </div>
      </div>
    );
  }
}

export default App;
