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
    const nameRoute = '/permission';
    const [access, setAccess]   = useState({});
    const [checked, setChecked] = useState({});
    const [clickMenu, setClickMenu] = useState({});
    const [state, setState] = useState({
        userGroup:{},
        data:[],
        columns: [
            {title: 'Name Menus', dataIndex: 'name', key: 'name'},
            {title: 'Access', dataIndex: 'data', key: 'date'},
        ],
    });

    useEffect(() => {
        sendPermissions();
    }, [clickMenu])

    useEffect(() => {
        insertData();
        // console.log(checked);
    }, [checked]);

    useEffect(() => {
        getAccess();
    }, [state.userGroup]);

    const getAccess = async () => {
        await axios({
            method: 'get',
            url: nameRoute,
            params: state.userGroup,
        }).then(response => {
            let data = response.data;
            if(data.length != 0){
                data.map(item => {
                    if(item.access.length != 0){
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
                    }
                });
            }
        }).catch(function (error) {
            handleError(error);
        });
    }

    const handleChecked = (menu, item) => {
        if(checked[menu]){
            if(checked[menu][item]){
                return checked[menu][item];
            }
        }
    }

    const choose = (e, menu, access) => {
        setChecked(prev => {
            return {
                ...prev,
                [menu]: {
                    ...prev[menu],
                    [access]: e.target.checked
                }
            }
        });

        setClickMenu({menu: menu});
    }

    const customAccess = menu => {
        return menu.access.map((item, index) => 
                <Checkbox 
                    key={index} 
                    name={item} 
                    onChange={e => choose(e, menu.index, item)}
                    checked={handleChecked(menu.index, item)}
                >{item}</Checkbox> 
            );
    };

    const insertData = () => {
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

    const sendPermissions = () => {

        let access = checked[clickMenu.menu] && 
                    Object.keys(checked[clickMenu.menu])
                    .filter(item => checked[clickMenu.menu][item] != false)
                    .toString();

        let data = {
            menu: clickMenu.menu,
            access: access,
        }

        axios({
            method: 'post',
            url: nameRoute + '/store',
            data:data
        }).then(response => {
            console.log(response);
        })
    }

    return {
        state: state,
        setState: setState,
    }
}

export default useAccess;