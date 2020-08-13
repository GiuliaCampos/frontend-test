import React from 'react';
import {HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/app/Pages/index'
import Login from './components/app/Pages/login'

function App(){
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </HashRouter>
    )
}

export default App;