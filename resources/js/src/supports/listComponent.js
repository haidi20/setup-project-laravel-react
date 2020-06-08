import React from 'react';

import {
    UserOutlined, UsergroupAddOutlined, DashboardOutlined,
} from '@ant-design/icons';

// pages
// dashboard
const Dashboard = React.lazy(() => import('../views/Dashboard'));
// auth
// const Logout = React.lazy(() => import('../views/Auth/logout'));
// user
const User = React.lazy(() => import('../views/User'));
const FormUser = React.lazy(() => import('../views/User/FormUser'));
// organization
const Organization = React.lazy(() => import('../views/Organization'));
const FormOrganization = React.lazy(() => import('../views/Organization/FormOrganization'));

/*
    NOTE: 
    - index     = untuk keperluan authentication
    - access    = fitur yg ada di menu tersebut. INGAT jika index null maka access null juga                
    - subMenu   = tempat menaruh source sub menu
    - showMenu  = agar muncul di daftar menu 
    - isSubMenu = apakah punya sub menu atau tidak
*/

const listMenu = [
    {
        name: 'Dashboard',
        index: 'dashboard', 
        icon: <DashboardOutlined />, 
        path: '/',
        access: ['read'],
        showMenu: true,
        isSubMenu: false,
        component: <Dashboard />,
        subMenu:null,
    },
    {
        name: 'User',
        index: 'user', 
        icon: <UserOutlined />,
        path: '/user',
        access: ['read', 'create', 'edit', 'delete'],
        showMenu: true, 
        isSubMenu: false,
        component: <User />,
        subMenu: null,
    },
    {
        name: 'Form User', 
        index: null,
        icon: null,
        path: '/user/form',
        access: null,
        showMenu: false, 
        isSubMenu: false,
        component: <FormUser />,
        subMenu: null,
    },
    {
        name: 'Organisasi',
        index: 'organization', 
        icon: <UsergroupAddOutlined />,
        path: '/organization',
        access: ['read', 'create', 'edit', 'delete'],
        showMenu: true, 
        isSubMenu: false,
        component: <Organization />,
        subMenu: null,
    },
    {
        name: 'Form Organisasi', 
        index: null,
        icon: null,
        path: '/organization/form',
        access: null,
        showMenu: false, 
        isSubMenu: false,
        component: <FormOrganization />,
        subMenu: null,
    },
];

export default listMenu;