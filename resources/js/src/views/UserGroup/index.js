import React, {useEffect, useState} from 'react';

// components
import Datatable from '../_components/Datatable';

import './styles.scss';

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

const userGroup = props => {

    const nameRoute = '/user-group';
    const columns = [
        {title: 'Name', dataIndex: 'name', key: 'name'},
    ];

    return(
        <div>
            <Row className="header-content">
                <Col span="20">
                    <h1 className="title-content">User Group</h1>
                </Col>
                <Col span="4">
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Table</Breadcrumb.Item>
                    </Breadcrumb> */}
                </Col>
            </Row>
            <Content>
                <div className="site-layout-background" >
                    <Datatable
                        columns={columns} 
                        nameRoute={nameRoute}
                    />
                </div>
            </Content>
        </div>
    )
}

export default userGroup;