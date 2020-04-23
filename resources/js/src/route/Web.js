import React, {Component} from 'react';
import {
    Route,
    Switch,
    HashRouter,
    BrowserRouter as Router,
  } from "react-router-dom";

import MainLayout from '../views/_layouts';

// pages
import Dashboard from '../views/Dashboard';

const web = () => (
    <Router>
        <HashRouter>
            <MainLayout>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                </Switch>                 
            </MainLayout>
        </HashRouter>
    </Router>
)

export default web;