import React from 'react';

import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/layout/style/css';
import 'antd/lib/breadcrumb/style/css';
import { 
    Row, Col, Layout, Breadcrumb,
} from 'antd';

const { Content } = Layout;

const dashboard = props => {

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
                </div>
            </Content>
        </div>
    )
}

export default dashboard;