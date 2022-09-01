const Layout = () => import('@/layout/index.vue')

export default {
    name: 'links',
    path: '/links',
    component: Layout,
    meta: {
        title: "友联管理",
        sort: 5,
        icon: 'Link'
    },
    children: [
        {
            name: 'links',
            path: '/links',
            component: () => import('./index.vue'),
            meta: {
            },
        },
    ],
}
