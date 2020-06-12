import React, {useState, useEffect} from 'react';
import {withRouter, useHistory} from "react-router-dom";

// support
import axios from '../../../../supports/axios';
import {alert, handleError} from '../../../../supports/helper';

const useAccess = props => {
    const nameRoute = '/user-group';
    const history   = useHistory();
    const [state, setState] = useState({
        name: null,
    }); 

    const columns = [
        {title: 'Name Menus', dataIndex: 'name', key: 'name'},
    ];

    return {
        columns: columns,
        setState: setState,
        nameRoute: nameRoute,
    }
}

export default useAccess;