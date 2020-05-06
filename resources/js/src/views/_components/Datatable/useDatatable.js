import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

import axios from '../../../supports/axios';
import {alert} from '../../../supports/helper';

// third party
import Swal from 'sweetalert2';
// antd
import 'antd/lib/button/style/css';
import { Button } from 'antd';
import {
    EditOutlined, DeleteOutlined,
} from '@ant-design/icons';

const useDatatable = props => {
    const state     = useSelector(state => state.datatable);
    const history   = useHistory();
    const dispatch  = useDispatch();
    const location  = useLocation();

    let addFilter                   = props.addFilter ? props.addFilter : {};
    let typingTimer                 = null;
    const [columns, setColumns]     = useState([]);
    
    let allEffect   = [
        state.remove, state.search, state.pagination.pageSize, 
        state.pagination.current,
    ];

    useEffect(() => {
        fetchData();
        insertColumns();
    }, allEffect);
    
    const handleOpenPopup = () => {
        dispatch({type: 'OPEN_POPUP'});
    }

    const handleClosePopup = () => {
        dispatch({type: 'CLOSE_POPUP'});
    }

    const handleError = e => {
        let result = {
            data: 'Maaf, Ada Kesalahan Sistem',
            status: e.response.status,
        }
        alert(result);
    }

    const insertColumns = () => {
        let propsColumns = props.columns;

        propsColumns = [
            { 
                key: 'no', title: 'No', width: '4%', dataIndex: '', 
                render: (text, record, index) => handleNumber(index, record)
            },
            ...propsColumns
        ]

        // if hideAction = true, hide column action
        if(!props.hideAction){
            let width = 8 ;

            if(!props.usePopup){
                width += (3 * props.addActions.length);
            }

            propsColumns = [
                ...propsColumns, 
                {
                    key: 'x',
                    width: width+'%',
                    dataIndex: '',
                    title: 'Action',
                    render: (_, record) => allButtonAction(record),
                },
            ];
        }

        setColumns(propsColumns);
    }

    const handleNumber = (index, record) => {
        const per_page      = Number(state.pagination.pageSize);
        const current_page  = Number(state.pagination.current);
        
        let number = index + (current_page * per_page);
    
        return (number - per_page) + 1 +'.';
    }

    const allButtonAction = (record, usePopup = props.usePopup) => {
        let actions = [
            {
                title: <EditOutlined />, color: 'primary', handle:e => handleEdit(e), 
                hide: props.hideEdit, disabled: props.disabledEdit,
            },
            {
                title: <DeleteOutlined />, color: 'danger', handle:e => handleDelete(e), 
                hide: props.hideDelete, disabled: props.disabledDelete,
            },
        ];

        actions = [
            ...actions,
            ...props.addActions,
        ];

        if(usePopup){
            return (
                <Button 
                    type="primary"
                    onClick={() => handleDetail(record)}
                >
                    Detail
                </Button>
            )
        }else{
            let data = record;
            let size = 'small';

            if(props.usePopup){
                data = state.selectItem;
                size = 'large';
            }

            return actions.filter(item => !item.hide).map((item, index) => {
                const attributes = {
                    key:index, 
                    size:size, 
                    type:item.color,
                    style:{margin: '1px'},
                    disabled:item.disabled,
                    className:`bg-${item.color}`,
                    onClick:() => item.handle(data), // how can addAction get data
                }

                return <Button {...attributes} block={props.usePopup}>{item.title}</Button>
            });
        }
    }

    const handleDetail = record => {
        dispatch({type: 'OPEN_POPUP'});
        dispatch({type: 'SELECT_ITEM', payload: record});
    }

    const handleAdd = () => {
        history.push({
            pathname: props.nameRoute+"/form",
        });
    }

    const handleEdit = data => {
        history.push({
            pathname: props.nameRoute+"/form",
            state: data,
        });

        dispatch({type: 'CLOSE_POPUP'});
    }

    const handleDelete = data => {
        dispatch({type: 'CLOSE_POPUP'});
        Swal.fire({
                icon: 'question',
                text: 'Anda yakin ingin menghapus data ini ?',
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: "Ya, Yakin.",
                cancelButtonText: "Tidak.", 
            })
            .then((result) => {
                if(result.value){
                    dispatch({type: 'LOADING'});
                    axios.post(props.nameRoute+"/delete/"+data.id)
                        .then(response => {
                            alert(response);

                            dispatch({type: 'DELETE_DATA', payload: data.id});
                        })
                        .catch(e => {
                            dispatch({type: 'REMOVE_LOADING'});
                            handleError(e);
                        });
                }
            });
    }

    const handleSearch = e => {
        let search = e.target.value;

        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
            dispatch({type: 'SEARCH', payload: search});
        }, 800);

    }

    const handlePagination = e => {
        dispatch({type: 'CHANGE_PAGE', payload: e});
    }

    const handleShowPage = e => {
        dispatch({type: 'SHOW_PAGE', payload: e});
    }

    const fetchData = async () => {

        let params = {
            search: state.search,
            page: state.pagination.current,
            per_page: state.pagination.pageSize,
            // ...addFilter,
        }

        dispatch({type: 'LOADING'});
        await axios.get(props.nameRoute, {params: params})
            .then(response => {
                let data = response.data;
                
                dispatch({type: 'FETCH_DATA', payload: data});
            })
            .catch(e => {
                dispatch({type: 'REMOVE_LOADING'});
                handleError(e);
            });
    }

    return {
        ...state,
        columns: columns,
        // function
        handleAdd: handleAdd,
        handleSearch: handleSearch,
        handleShowPage: handleShowPage,
        allButtonAction: allButtonAction,
        handleOpenPopup: handleOpenPopup,
        handleClosePopup: handleClosePopup,
        handlePagination: handlePagination,
    };
}

export default useDatatable;