import React from 'react';

import MainLayout from '../../_layouts';

//third party
import 'antd/lib/spin/style/css';
import { Spin, Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

const Loading = props => {

    return(
        <Spin tip="Loading...">
            <MainLayout >
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 300 }}>
                        
                    </div>
                </Content>
            </MainLayout>
        </Spin>
    )
}

export default Loading;