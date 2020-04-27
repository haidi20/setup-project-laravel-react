import React from 'react';

import {
    UserOutlined,
    LogoutOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

// pages
// dashboard

const Dashboard = React.lazy(() => import('../views/Dashboard'));
// auth
const Logout = React.lazy(() => import('../views/Auth/logout'));
// user
const User = React.lazy(() => import('../views/User'));
const FormUser = React.lazy(() => import('../views/User/FormUser'));

const listMenu = [
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

export default listMenu;