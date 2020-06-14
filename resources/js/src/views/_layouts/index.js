import React , {useState, useEffect} from 'react';
import openSocket from 'socket.io-client';
import './styles/index.scss'; // global style

// partials
import ViewMenu from './partials/ViewMenu';

//third party 
import 'antd/lib/badge/style/css';
import 'antd/lib/layout/style/css';
import 'antd/lib/drawer/style/css';
import 'antd/lib/breadcrumb/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/descriptions/style/css';
import 'antd/lib/page-header/style/css';
// import 'antd/dist/antd.css';
import { Layout, Drawer, Badge,  PageHeader, Button, Descriptions } from 'antd';
import {
  MenuOutlined, NotificationOutlined
} from '@ant-design/icons';

const { Header, Footer, Sider } = Layout;

const mainLayout = ({children}) => {
    const [visible, setVisible]         = useState(false);
    const [sumNotif, setSumNotif]       = useState(0);
    const [isMobile, setIsMobile]       = useState(false);
    const [collapsed, setCollapsed]     = useState(false);
    const [nameProject, setNameProject] = useState('Nama Project');

    const onCollapse = () => {
        !isMobile 
        ? setCollapsed(prev => !prev)
        : setVisible(prev => !prev);
    }

    const menuMobile = () => {
      setVisible(prev => !prev);
    }

    // UNTUK DETEKSI layar MOBILE / WEB
    const handleOnBreakpoint = broken => { 
      // apakah layar mobile / web
      setIsMobile(broken);
      // show / hide menu web
      setCollapsed(broken);
      // menu mobile akan tertutup jika layar web
      !broken && setVisible(broken);
    }

    useEffect(() => {
      const socket = openSocket('http://localhost:9001');

      socket.on('notification', message => {
        console.log(message);
  
        setSumNotif(sumNotif + 1);
      });

      return () => socket.disconnect();
    }, [sumNotif])

    return (
      <div>
        <Drawer
          placement="left"
          closable={false}
          visible={visible}
          title={nameProject}
          onClose={() => menuMobile()}
          style={{display: 'none'}}
        >
          <ViewMenu 
            menuMobile={() => menuMobile()}
          />
        </Drawer>
        <Layout
          style={{ minHeight: '100vh', }}
        >
          <Sider 
            collapsed={collapsed}

            breakpoint="lg"
            style={{display: 'none'}}
            collapsedWidth={isMobile ? 0 : undefined}
            onBreakpoint={broken => handleOnBreakpoint(broken)}
            onCollapse={(collapsed, type) => {setCollapsed(collapsed);}}
          >
            <div className="logo" >
              <span>{nameProject}</span>
            </div>
            {/* LIST MENU */}
            <ViewMenu />
          </Sider>
          <Layout className="site-layout">
              <PageHeader
                ghost={false}
                style={{display: 'none'}}
                className="site-layout-background"
                // onBack={() => window.history.back()}
                // title="Title"
                // subTitle="This is a subtitle"
                extra={[
                  <MenuOutlined key={0} className="trigger" onClick={() => onCollapse()} />,
                  <Badge key={1} offset={[5, 5]} count={sumNotif} className="icon-notif">
                    <NotificationOutlined  style={{fontSize: '20px'}} />
                  </Badge>,
                ]}
              >
                {/* all about description header */}
              </PageHeader>
            {/* <Header 
              className="site-layout-background"
            > */}
              {/* <MenuOutlined
                className="trigger"
                onClick={() => onCollapse()}
              />
              <Badge  offset={[5, 5]} count={sumNotif} style={{fontSize: '10px'}}>
                <NotificationOutlined style={{fontSize: '20px'}} />
              </Badge> */}
              
            {/* </Header> */}
              {children}
            <Footer style={{ textAlign: 'center' }}>Setup Project Laravel</Footer>
          </Layout>
        </Layout>
      </div>    
    );
}

export default mainLayout;