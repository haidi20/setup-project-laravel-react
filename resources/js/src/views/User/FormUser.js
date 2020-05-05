import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router-dom";

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

const user = props => {
    const nameRoute = '/user';

    return(
        <div>
            <Row className="header-content">
                <Col span="20">
                    <h1 className="title-content">Form User</h1>
                </Col>
                <Col span="4">
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Table</Breadcrumb.Item>
                    </Breadcrumb> */}
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Content>
                        <div className="site-layout-background" >
                            form
                        </div>
                    </Content>
                </Col>
            </Row>
            
        </div>
    )
}

export default withRouter(user);