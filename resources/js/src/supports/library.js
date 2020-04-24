import React from 'react';

import {
    UserOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

// pages
import User from '../views/User';
import Dashboard from '../views/Dashboard';

export const listMenu = [
    {
        name: 'Dashboard', 
        icon: <PieChartOutlined />, 
        path: '/',
        exact: true,
        showMenu: true,
        component: <Dashboard />,
        isSubMenu: false,
    },
    {
        name: 'User', 
        icon: <UserOutlined />,
        showMenu: true,
        isSubMenu: true,
        subMenu: [
            {
                icon: null,
                name: 'Table', 
                path: '/user',
                exact: true,
                showMenu: true, 
                isSubMenu: false,
                component: <User />,
            },
            {
                icon: null,
                name: 'Form', 
                path: '/user/form',
                exact: false,
                showMenu: false, 
                isSubMenu: false,
                component: <User />,
            },
        ]
    },
];