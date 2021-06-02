import React, { Component } from 'react';

import Layouts from '../layoutdesigns/layout.js';
import App from '../App.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Owndesign() {
    return (
        <div>
            <Router>
                {/* <button><a href={'/layout'} > Home </a></button> */}

                <Switch>
                    <Route exact path='/layout' component={Layouts} />
                    <Route path='/App' component={App} />

                </Switch>
            </Router>
        </div>
    )
}
export default Owndesign;