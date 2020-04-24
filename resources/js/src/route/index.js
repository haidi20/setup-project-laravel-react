import React, {Component} from 'react';
import {
    Route,
    Switch,
    HashRouter,
    BrowserRouter as Router,
  } from "react-router-dom";

import {listMenu} from '../supports/library';
import MainLayout from '../views/_layouts';

//pages
import User from '../views/User';
import Dashboard from '../views/Dashboard';

const ListRoute = () => {

    
    return(
        <Router>
            <HashRouter>
                <MainLayout>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            component={Dashboard} 
                        /> 
                        <Route 
                            path="/user" 
                            exact
                            component={User} 
                        />
                        {/* {listMenu.map((item, index) => 
                            <Route 
                                key={index}
                                path={item.path} 
                                exact
                                component={item.component} 
                            />    
                        )} */}
                    </Switch>                 
                </MainLayout>
            </HashRouter>
        </Router>
    )
}

export default ListRoute;