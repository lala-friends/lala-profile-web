import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Detail from './routes/Detail';
import Idea from './routes/Idea';
import Add from './routes/Add';
import NoMatch from './routes/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route exact path="/project" component={Projects}/>
            <Route path="/project/:id" component={Detail}/>
            <Route path="/idea" component={Idea}/>
            <Route path="/add" component={Add}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
