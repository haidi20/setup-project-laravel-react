import React from 'react';

import {
    UserOutlined,
    LogoutOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

// pages
// dashboard
import Dashboard from '../views/Dashboard';
// auth
import Logout from '../views/Auth/Logout';
// user
import User from '../views/User';
import FormUser from '../views/User/FormUser';

export const listMenu = [
    {
        name: 'Dashboard', 
        icon: <PieChartOutlined />, 
        path: '/',
        exact: true,
        showMenu: true,
        isSubMenu: false,
        component: <Dashboard />,
        subMenu:null,
    },
    {
        name: 'User', 
        icon: <UserOutlined />,
        path: null,
        exact: true,
        showMenu: true,
        isSubMenu: true,
        component: null,
        subMenu: [
            {
                name: 'Table User', 
                icon: null,
                path: '/user',
                exact: true,
                showMenu: true, 
                isSubMenu: false,
                component: <User />,
                subMenu: null,
            },
            {
                name: 'Form', 
                icon: null,
                path: '/user/form',
                exact: true,
                showMenu: true, 
                isSubMenu: false,
                component: <FormUser />,
                subMenu: null,
            },
        ]
    },
    {
        name: 'Logout', 
        icon: <LogoutOutlined />,
        path: '/logout',
        exact: true,
        showMenu: true, 
        isSubMenu: false,
        component: <Logout />,
        subMenu: null,
    },
];