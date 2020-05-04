import React , {useState} from 'react';
import './styles.scss'; // global syle

// partials
import ViewMenu from './partials/ViewMenu';

//third party 
import 'antd/lib/layout/style/css';
import 'antd/lib/drawer/style/css';
import 'antd/lib/breadcrumb/style/css';
// import 'antd/dist/antd.css';
import { Layout, Drawer } from 'antd';
import {
  MenuOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider } = Layout;

const mainLayout = ({children}) => {
    const [visible, setVisible]         = useState(false);
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

    return (
      <div>
        <Drawer
          placement="left"
          closable={false}
          visible={visible}
          title={nameProject}
          onClose={() => menuMobile()}
        >
          <ViewMenu 
            menuMobile={() => menuMobile()}
          />
        </Drawer>
        <Layout
          style={{ minHeight: '100vh' }}
        >
          <Sider 
            collapsed={collapsed}

            breakpoint="lg"
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
            <Header className="site-layout-background">
              {<MenuOutlined
                  className="trigger"
                  onClick={() => onCollapse()}
                />}
            </Header>
            {children}
            <Footer style={{ textAlign: 'center' }}>Setup Project Laravel</Footer>
          </Layout>
        </Layout>
      </div>    
    );
}

export default mainLayout;