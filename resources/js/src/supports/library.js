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
        component: <Dashboard />,
        isSubMenu: false,
    },
    {
        name: 'User', 
        icon: <UserOutlined />,
        exact: true,
        isSubMenu: true,
        subMenu: [
            {
                icon: null,
                name: 'Table', 
                path: '/user', 
                isSubMenu: false,
                component: <User />,
            },
        ]
    },
];