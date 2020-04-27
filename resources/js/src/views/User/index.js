import React, {useReducer} from 'react';
import {connect} from 'react-redux';

const user = props => {

    console.log(props);

    return(
        <div>
            <h1>Table User</h1>
        </div>
    )
}

const state = state => {
    return{
        state: state,
    }
}

const reducer = reducer => {
    return{
        openModal: null,
    }
}

export default connect(state, reducer)(user);