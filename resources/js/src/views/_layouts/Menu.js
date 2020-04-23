import React, {useState} from 'react';
import { Menu, Button, Layout } from 'antd';
import {
    // AppstoreOutlined,
    // MenuUnfoldOutlined,
    // MenuFoldOutlined,
    PieChartOutlined,
    // DesktopOutlined,
    // ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';

const { SubMenu } = Menu;

const viewMenu = props => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <Layout>
             <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <Menu
                    mode="inline"
                    // theme="light"
                    defaultOpenKeys={['sub1']}
                    defaultSelectedKeys={['1']}
                    inlineCollapsed={collapsed}
                    className="background-menu"
                >
                    <Menu.Item key="1">
                        <PieChartOutlined />
                        <span>Option 1</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <MailOutlined />
                                <span>Navigation One</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
                {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    {children}
                </div> */}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
        
}

export default viewMenu;
