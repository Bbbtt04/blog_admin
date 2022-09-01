const Layout = () => import('@/layout/index.vue')

export default {
    name: 'tags',
    path: '/tags',
    component: Layout,
    meta: {
        title: "标签管理",
        sort: 4,
        icon: 'Notification'
    },
    children: [
        {
            name: 'tags',
            path: '/tags',
            component: () => import('./index.vue'),
            meta: {
                title: '标签管理',
            },
        },
    ],
}
