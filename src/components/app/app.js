import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {HomePage, CartPage} from '../pages';
import './app.css';
import {withBookstoreService} from '../hoc'
import ShopHeader from '../shop-header';

const App = ({bookstoreService}) => {

    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={120}/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/cart" component={CartPage} exact/>
            </Switch>
        </main>
    );
};

export default withBookstoreService()(App);
