const accessMenu = [
    {
        name: 'Dashboard',
        index: 'dashboard',
        access: ['read'],
    },
    {
        name: 'User',
        index: 'user',
        access: ['read', 'create', 'edit', 'delete'],
    },
    {
        name: 'User Group',
        index: 'userGroup',
        access: ['read', 'create', 'edit', 'delete', 'access',],
    },
];

export default accessMenu;