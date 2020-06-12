import React, {useState, useEffect} from 'react';
import {withRouter, useHistory} from "react-router-dom";


//supports
import axios from '../../../../supports/axios';
import listMenu from '../../../../supports/listComponent';
import {alert, handleError} from '../../../../supports/helper';

import 'antd/lib/checkbox/style/css';
import { 
    Checkbox
} from 'antd';

const useAccess = props => {
    const nameRoute = '/user-group';
    const history   = useHistory();
    const [state, setState] = useState({
        name: null,
    }); 

    const columns = [
        {title: 'Name Menus', dataIndex: 'name', key: 'name'},
        {title: 'Access', dataIndex: 'access', key: 'name'},
    ];

    const choose = e => {
        console.log(e.target);
    }

    const customAccess = item => {
        return item.access.map((item, index) => 
            <Checkbox key={index} name={item} onChange={choose}>{item}</Checkbox> 
        );
    };

    let menus = listMenu
                    .filter(item => item.index != null)
                    .map((item, index) => {
                        return {
                            ...item,
                            key: index,
                            access: customAccess(item),
                        }
                    });

    return {
        menus: menus,
        columns: columns,
        setState: setState,
        nameRoute: nameRoute,
    }
}

export default useAccess;