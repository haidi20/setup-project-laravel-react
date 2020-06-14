import React, { Suspense } from 'react';
import {
    Route,
    Switch,
    HashRouter,
    BrowserRouter as Router,
} from "react-router-dom";

import MainLayout from '../views/_layouts';
import listMenu from '../supports/listMenu';
import Loading from '../views/_components/Loading';

const ListRoute = props => {

    const subRoute = item => (
        item.subMenu.map((value, key) => 
            !value.isSubMenu 
            ?    <Route 
                    exact
                    path={value.path} 
                    key={`sub-${key}`}
                    render={ () => value.component} 
                />
            : subRoute(value)
        )
    )
    
    return(
        <Router>
            <Suspense fallback={<Loading />}>
            <HashRouter>
                <Switch>
                    <MainLayout>
                        {listMenu.filter(item => item !== item[0]).map((item, index) =>
                            !item.isSubMenu  
                            ?   <Route 
                                    exact 
                                    key={index}
                                    path={item.path} 
                                    render={() => item.component} 
                                />
                            : subRoute(item)
                        )}
                    </MainLayout>         
                </Switch>                 
            </HashRouter>
            </Suspense>    
        </Router>
    )
}

export default ListRoute;