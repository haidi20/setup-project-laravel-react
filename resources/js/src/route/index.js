import React, {Component} from 'react';
import {
    Route,
    Switch,
    HashRouter,
    BrowserRouter as Router,
  } from "react-router-dom";

import {listMenu} from '../supports/library';
import MainLayout from '../views/_layouts';

const ListRoute = () => {

    const subRoute = item => (
        item.subMenu.map((value, key) => 
            !value.isSubMenu 
            ?    <Route 
                    key={`sub-${key}`}
                    path={value.path} 
                    exact
                    render={ () => value.component} 
                />
            : subRoute(value)
        )
    )
    
    return(
        <Router>
            <HashRouter>
                <MainLayout>
                    <Switch>
                        {listMenu.map((item, index) =>
                            !item.isSubMenu  
                            ?   <Route 
                                    exact 
                                    key={index}
                                    path={item.path} 
                                    render={() => item.component} 
                                />
                            : subRoute(item)
                        )}                    
                    </Switch>                 
                </MainLayout>
            </HashRouter>
        </Router>
    )
}

export default ListRoute;

// {listMenu.map((item, index) => 
//     {
//         console.log(item);
//         return(
//             !item.isSubMenu  
//             ?   <Route 
//                     key={index}
//                     path={item.path} 
//                     exact
//                     render={ () => item.component} 
//                 />
//             : item.subMenu.map((value, key) => 
//                 <Route 
//                     key={key}
//                     path={value.path} 
//                     exact
//                     render={ () => value.component} 
//                 />    
//             )
//         )
//     }
// )}