const Layout = () => import('@/layout/index.vue')

export default {
    name: 'Workbench',
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
        title: "工作台",
        order: 0,
        icon: 'Monitor'
    },
    children: [
        {
            name: 'dashboard',
            path: 'dashboard',
            component: () => import('./index.vue'),
            meta: {
                title: '工作台',
            },
        },
    ],
}
