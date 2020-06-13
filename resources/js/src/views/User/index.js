import React, {useEffect, useState} from 'react';
import Datatable from '../_components/Datatable';
import {useDispatch} from 'react-redux';

import './styles.scss';

// partials
import FilterUser from './partials/FilterUser';

import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/layout/style/css';
import 'antd/lib/breadcrumb/style/css';
import { 
    Row, Col, Layout, Breadcrumb,
} from 'antd';
import {
    BarsOutlined
} from '@ant-design/icons';

const { Content }   = Layout;

const user = props => {
    const dispatch  = useDispatch();

    const nameRoute = '/user';
    const initialFilter = {id: null};
    const [filterUser, setFilterUser] = useState({value: null, label: null});
    const [addFilter, setAddFilter] = useState(initialFilter);
    const columns = [
        {title: 'Name', dataIndex: 'name', key: 'name'},
        {title: 'Name User Group', dataIndex: 'name_user_group', key: 'name_user_group'},
    ];
    const addAction = [
        {title: <BarsOutlined />, color: 'info', handle:e => handleDetail(e)},
    ];

    const handleDetail = e => {
        // console.log(e);
        dispatch({type: 'CLOSE_POPUP'});
    }

    const handleResetFilter = () => {
        setAddFilter(initialFilter);
    }

    const handleAddFilter = (e, name) => {
        // console.log(e, name);
        setFilterUser({...e});
        setAddFilter({...addFilter, [name]: e.value});
    }

    return(
        <div>
            <Row className="header-content">
                <Col span="20">
                    <h1 className="title-content">User</h1>
                </Col>
                <Col span="4">
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Table</Breadcrumb.Item>
                    </Breadcrumb> */}
                </Col>
            </Row>
            {/* <FilterUser
                addFilter={addFilter}
                filterUser={filterUser} 
                handleAddFilter={handleAddFilter}
            /> */}
            <Content>
                <div className="site-layout-background" >
                    <Datatable
                        columns={columns} 
                        nameRoute={nameRoute}
                        addFilter={addFilter}
                        addAction={addAction}
                    />
                </div>
            </Content>
        </div>
    )
}

export default user;