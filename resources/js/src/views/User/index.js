import React, {useEffect} from 'react';
import {connect} from 'react-redux';

const user = props => {
    console.log(props);
    const {modal}       = props.datatable;
    const {openModal}   = props;

    return(
        <div>
            <h1>Table User</h1>
            <button onClick={() => openModal()}>buka modal</button>
            <p>open modal : {modal ? 1 : 0}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        datatable: state.datatable,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        openModal: () => dispatch({type: 'OPEN_MODAL'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(user);