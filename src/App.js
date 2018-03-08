import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import Home from './containers/Home';
import Developers from './containers/Developers';
import DeveloperDetail from './containers/DeveloperDetail';
import AddDeveloper from './containers/AddDeveloper';
import Products from './containers/Products';
import ProductDetail from './containers/ProductDetail';
import AddProduct from './containers/AddProduct';
import NoMatch from './containers/NoMatch';

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
