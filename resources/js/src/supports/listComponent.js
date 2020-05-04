import React from 'react';

import {
    UserOutlined,
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
        showMenu: true,
        isSubMenu: false,
        component: <Dashboard />,
        subMenu:null,
    },
    {
        name: 'User', 
        icon: <UserOutlined />,
        path: '/user',
        showMenu: true, 
        isSubMenu: false,
        component: <User />,
        subMenu: null,
    },
    {
        name: 'Form User', 
        icon: null,
        path: '/user/form',
        showMenu: false, 
        isSubMenu: false,
        component: <FormUser />,
        subMenu: null,
    },
];

export default listMenu;