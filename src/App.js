import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Detail from './routes/Detail';
import NoMatch from './routes/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/project" component={Projects}/>
            <Route path="/project/:id" component={Detail}/>
            <Route component={NoMatch} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
