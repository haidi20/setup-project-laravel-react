import React , {useState} from 'react';
// import { Link } from "react-router-dom";
import './StyleLayout.scss';

// components
import ListMenu from './ListMenu';

//third party 
import { Layout, Breadcrumb } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;



const mainLayout = ({children}) => {
    const [collapsed, setCollapsed]   = useState(false);
    const [hideButton, setHideButton] = useState(false);

    const onCollapse = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider 
            // collapsible 
            // trigger={null}
            collapsed={collapsed}
            // onCollapse={() => onCollapse()}

            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              // console.log('broken '+broken);
              setCollapsed(broken);
              setHideButton(broken);
            }}
            onCollapse={(collapsed, type) => {
              // console.log(collapsed, type);
              setCollapsed(collapsed);
            }}
          >
            <div className="logo" >
              <span>Name Project</span>
            </div>
            <ListMenu />
          </Sider>
          <Layout className="site-layout">
            {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
            {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {!hideButton && React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => onCollapse(),
              })}
            </Header>
            {/* <Header className="site-layout-background" style={{ padding: 0 }}>
              <MenuUnfoldOutlined className="trigger" />
              <MenuFoldOutlined className="trigger" />
            </Header> */}
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Setup Project Laravel</Footer>
          </Layout>
        </Layout>
      );
}

export default mainLayout;