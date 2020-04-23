import React , {useState} from 'react';
// import { Link } from "react-router-dom";
import './StyleLayout.scss';

// components
import ListMenu from './ListMenu'

//third party 
import { Layout, Breadcrumb, Drawer } from 'antd';
import {
  MenuOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const mainLayout = ({children}) => {
    const [visible, setVisible]       = useState(false);
    const [isMobile, setIsMobile]     = useState(false);
    const [collapsed, setCollapsed]   = useState(false);
    const [hideButton, setHideButton] = useState(false);

    const onCollapse = () => {
        !isMobile 
        ? setCollapsed(prev => !prev)
        : setVisible(prev => !prev);
    }

    const menuMobile = () => {
      setVisible(prev => !prev);
    }

    return (
      <div>
        <Drawer
          placement="left"
          closable={false}
          title="Basic Drawer"
          onClose={() => menuMobile()}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Layout
          style={{ minHeight: '100vh' }}
        >
          <Sider 
            // collapsible 
            // trigger={null}
            collapsed={collapsed}
            // onCollapse={() => onCollapse()}

            breakpoint="lg"
            collapsedWidth={isMobile ? 0 : undefined}
            onBreakpoint={broken => { // UNTUK DETEKSI MOBILE / WEB
              // console.log('broken '+broken);
              setIsMobile(broken);
              setCollapsed(broken);
              setHideButton(broken);
              !broken && setVisible(broken);
            }}
            onCollapse={(collapsed, type) => { // 
              // console.log('collapsed');
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
              {
                <MenuOutlined
                  className="trigger"
                  onClick={() => onCollapse()}
                />
              }
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
      </div>    
    );
}

export default mainLayout;