import React from 'react';

// supports
import axios from '../../supports/axios';
import {alert, handleError} from '../../supports/helper';

import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/layout/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/breadcrumb/style/css';
import { 
    Row, Col, Layout, Breadcrumb, Button,
} from 'antd';

const { Content } = Layout;

const dashboard = props => {

    const send = props => {
        // console.log('terkirim');

        axios.get('notification')
            .then(response => {
                alert(response);
            })
            .catch(e => {
                handleError(e);
            });
    }

    return(
        <div>
            <Row className="header-content">
                <Col span="20">
                    <h1 className="title-content">Dashboard</h1>
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
                    {/* content */}
                    <Button 
                        className="btn-success" onClick={() => send()} style={{marginBottom: 20}}
                    > Send </Button>
                </div>
            </Content>
        </div>
    )
}

export default dashboard;