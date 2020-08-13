import React, { Component } from 'react';
import {HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/app/Pages/index'
import Login from './components/app/Pages/login'

import { isAuthenticated } from './services/auth'

const PrivateRoute =({ component: Component, ...rest}) => (
    <Route 
        {...rest}
        render={props => isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: "/", state: {from: props.location}}} />
        )}
    />
)

const App = () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute exact path="/home" component={Home} />
            </Switch>
        </HashRouter>
    )
}

export default App;