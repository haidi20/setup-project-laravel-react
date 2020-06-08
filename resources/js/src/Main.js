import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';

import Route from './route';

class Main extends Component {
    render(){
        return(
            <Provider store={store}>
                <Route />
            </Provider>
        )
    }
}

export default Main;