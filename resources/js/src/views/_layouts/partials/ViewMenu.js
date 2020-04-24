import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

//supports
import {listMenu} from '../../../supports/library';

//third party 
import { Menu } from 'antd';

const { SubMenu } = Menu;

const ViewMenu = props => {
    const [openKeys, setOpenKeys] = useState([]);

    const onOpenChange = (openKeys) => {
        let lastKey = openKeys.slice(-1)[0];
        lastKey = [lastKey];      
        setOpenKeys(lastKey);  
    }

    const clickMenu = key => {
        let link = document.getElementById(key);
        link.click();
    }

    return (
        <Menu 
            theme="dark" 
            mode="inline"
            openKeys={openKeys}
            defaultSelectedKeys={['0']}
            onOpenChange={(e) => onOpenChange(e)}
        >
            {
                listMenu.filter(item => item.showMenu).map((item, index) =>
                    !item.isSubMenu
                    ?   <Menu.Item key={index} htmlFor={`menu-${index}`} onClick={() => clickMenu(`menu-${index}`)} > 
                            {item.icon}
                            <span key={index} htmlFor={`menu-${index}`}>
                                <NavLink id={`menu-${index}`} to={item.path} style={{color: '#fff'}}>
                                    {item.name}
                                </NavLink>
                            </span>
                        </Menu.Item>   
                    :   <SubMenu
                            key={index} 
                            title={
                                <span>
                                    {item.icon}
                                    <span>{item.name}</span>
                                </span>
                            }
                        > 
                            {
                                item.subMenu.filter(item => item.showMenu).map((value, key) => 
                                    <Menu.Item key={`submenu-${index}-${key}`}>
                                        <span htmlFor={`submenu-${index}-${key}`}>
                                            <NavLink  to={value.path} style={{color: '#fff'}}>
                                                <p id={`submenu-${index}-${key}`}>{value.name}</p>
                                            </NavLink>
                                        </span>
                                    </Menu.Item>    
                                )
                            }
                        </SubMenu>
                )
            }
        </Menu>
    );
        
}

export default ViewMenu;

{/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    <Menu.Item key="1">
        <PieChartOutlined />
        <span>Option 1</span>
    </Menu.Item>
    <SubMenu
        key="sub1"
        title={
            <span>
                <UserOutlined />
                <span>User</span>
            </span>
        }
    >
        <Menu.Item key="3">Tom</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
    </SubMenu>
</Menu> */}
