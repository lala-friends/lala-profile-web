import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Developers from './components/Developers';
import DeveloperDetail from './components/DeveloperDetail';
import AddDeveloper from './components/AddDeveloper';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';
import NoMatch from './components/NoMatch';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/developers" component={Developers}/>
                        <Route exact path="/developer/new" component={AddDeveloper}/>
                        <Route path="/developer/:name" component={DeveloperDetail}/>
                        <Route exact path="/products" component={Products}/>
                        <Route exact path="/product/new" component={AddProduct}/>
                        <Route path="/product/:name" component={ProductDetail}/>

                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
