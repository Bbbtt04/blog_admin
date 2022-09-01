const Layout = () => import('@/layout/index.vue')

export default {
    name: 'Workbench',
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
        title: "工作台",
        icon: 'Monitor',
        sort:1
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
