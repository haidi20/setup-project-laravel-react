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

    return (
        <Menu 
            theme="dark" 
            mode="inline"
            openKeys={openKeys}
            defaultSelectedKeys={['0']}
            onOpenChange={(e) => onOpenChange(e)}
        >
            {
                listMenu.map((item, index) =>
                    !item.isSubMenu
                    ?   <Menu.Item 
                            key={index} 
                        >
                            {item.icon}
                            <span>
                                <NavLink  to={item.path} style={{color: '#fff'}}>
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
                                item.subMenu.map((value, key) => 
                                    <Menu.Item
                                        key={`submenu-${index}-${key}`}
                                    >
                                        <span>
                                            <NavLink  to={value.path} style={{color: '#fff'}}>
                                                {value.name}
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
