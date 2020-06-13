import React from 'react';

import {
    UserOutlined, UsergroupAddOutlined, DashboardOutlined,
} from '@ant-design/icons';

// pages
// dashboard
const Dashboard = React.lazy(() => import('../views/Dashboard'));
// auth
// user
const User = React.lazy(() => import('../views/User'));
const FormUser = React.lazy(() => import('../views/User/FormUser'));
// user group
const UserGroup = React.lazy(() => import('../views/UserGroup'));
const Access = React.lazy(() => import('../views/UserGroup/partials/Access'));
const FormUserGroup = React.lazy(() => import('../views/UserGroup/FormUserGroup'));

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
        name: 'User Group',
        index: 'userGroup', 
        icon: <UsergroupAddOutlined />,
        path: '/user-group',
        access: ['read', 'create', 'edit', 'delete', 'access',],
        showMenu: true, 
        isSubMenu: false,
        component: <UserGroup />,
        subMenu: null,
    },
    {
        name: 'Form User Group', 
        index: null,
        icon: null,
        path: '/user-group/form',
        access: null,
        showMenu: false, 
        isSubMenu: false,
        component: <FormUserGroup />,
        subMenu: null,
    },
    {
        name: 'access', 
        index: null,
        icon: null,
        path: '/user-group/access',
        access: null,
        showMenu: false, 
        isSubMenu: false,
        component: <Access />,
        subMenu: null,
    },
];

export default listMenu;