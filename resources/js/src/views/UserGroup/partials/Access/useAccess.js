import React, {useState, useEffect} from 'react';


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
    const [access, setAccess]   = useState({});
    const [checked, setChecked] = useState({});
    const [state, setState] = useState({
        userGroup:{},
        data:[],
        columns: [
            {title: 'Name Menus', dataIndex: 'name', key: 'name'},
            {title: 'Access', dataIndex: 'data', key: 'date'},
        ],
    });

    useEffect(() => {
        insertMenus();
        // console.log(checked);
    }, [checked]);

    useEffect(() => {
        // console.log(state);
    }, [state]);

    useEffect(() => {
        getAccess();
    }, [state.userGroup]);

    const getAccess = async () => {
        await axios({
            method: 'get',
            url: 'permission',
            params: state.userGroup,
        }).then(response => {
            let data = response.data;
            if(data.length != 0){
                data.map(item => {
                    let access = item.access.split(',');

                    access.map(value => {
                        setChecked(prev => {
                            return {
                                ...prev,
                                [item.menu]: {
                                    ...prev[item.menu],
                                    [value]: true,
                                },
                            }
                        });
                    })
                });
            }
        }).catch(function (error) {
            handleError(error);
        });
    }

    const handleChecked = (nameMenu, item) => {
        if(checked[nameMenu]){
            if(checked[nameMenu][item]){
                return checked[nameMenu][item];
            }
        }
    }

    const choose = e => {
        console.log(e.target);
    }

    const customAccess = menu => {
        return menu.access.map((item, index) => 
                <Checkbox 
                    key={index} 
                    name={item} 
                    onChange={choose}
                    checked={handleChecked(menu.index, item)}
                >{item}</Checkbox> 
            );
    };

    const insertMenus = () => {
        const data = listMenu
                        .filter(item => item.index != null)
                        .map((item, index) => {
                            return {
                                ...item,
                                key: index,
                                data: customAccess(item),
                            }
                        });

        setState(prev => {
            return {...prev, data: data}
        });
    }

    return {
        state: state,
        setState: setState,
    }
}

export default useAccess;